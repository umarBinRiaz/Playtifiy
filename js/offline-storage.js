var OfflineStorage = (function () {
    "use strict";

    var DB_NAME = "playtifiy-offline";
    var DB_VERSION = 1;
    var STORE_SONGS = "songs";
    var STORE_META = "meta";
    var db = null;

    function open() {
        if (db) return Promise.resolve(db);
        return new Promise(function (resolve, reject) {
            var req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = function (e) {
                var d = e.target.result;
                if (!d.objectStoreNames.contains(STORE_SONGS)) {
                    var store = d.createObjectStore(STORE_SONGS, { keyPath: "id" });
                    store.createIndex("title", "title", { unique: false });
                }
                if (!d.objectStoreNames.contains(STORE_META)) {
                    d.createObjectStore(STORE_META, { keyPath: "key" });
                }
            };
            req.onsuccess = function (e) {
                db = e.target.result;
                resolve(db);
            };
            req.onerror = function (e) {
                reject(e.target.error);
            };
        });
    }

    function getStore(name, mode) {
        return db.transaction(name, mode).objectStore(name);
    }

    function downloadSong(songId, songTitle, audioUrl, onProgress) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", audioUrl, true);
                xhr.responseType = "blob";

                xhr.onprogress = function (e) {
                    if (e.lengthComputable && onProgress) {
                        onProgress({
                            loaded: e.loaded,
                            total: e.total,
                            percent: Math.round((e.loaded / e.total) * 100),
                        });
                    }
                };

                xhr.onload = function () {
                    if (xhr.status === 200 || xhr.status === 0) {
                        var blob = xhr.response;
                        var tx = db.transaction(STORE_SONGS, "readwrite");
                        var store = tx.objectStore(STORE_SONGS);
                        store.put({
                            id: songId,
                            title: songTitle,
                            blob: blob,
                            size: blob.size,
                            downloadedAt: Date.now(),
                        });
                        tx.oncomplete = function () {
                            resolve({ id: songId, size: blob.size });
                        };
                        tx.onerror = function (e) {
                            reject(e.target.error);
                        };
                    } else {
                        reject(new Error("HTTP " + xhr.status));
                    }
                };

                xhr.onerror = function () {
                    reject(new Error("Network error"));
                };

                xhr.send();
            });
        });
    }

    function getSongBlob(songId) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_SONGS, "readonly").get(songId);
                req.onsuccess = function () {
                    resolve(req.result ? req.result.blob : null);
                };
                req.onerror = function (e) {
                    reject(e.target.error);
                };
            });
        });
    }

    function removeSong(songId) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var tx = db.transaction(STORE_SONGS, "readwrite");
                tx.objectStore(STORE_SONGS).delete(songId);
                tx.oncomplete = function () { resolve(); };
                tx.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function getDownloadedIds() {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_SONGS, "readonly").getAllKeys();
                req.onsuccess = function () { resolve(req.result || []); };
                req.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function getDownloadedSongs() {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_SONGS, "readonly").getAll();
                req.onsuccess = function () {
                    resolve((req.result || []).map(function (item) {
                        return {
                            id: item.id,
                            title: item.title,
                            size: item.size,
                            downloadedAt: item.downloadedAt,
                        };
                    }));
                };
                req.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function isDownloaded(songId) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_SONGS, "readonly").count(songId);
                req.onsuccess = function () { resolve(req.result > 0); };
                req.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function getTotalSize() {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_SONGS, "readonly").openCursor();
                var total = 0;
                req.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        total += cursor.value.size || 0;
                        cursor.continue();
                    } else {
                        resolve(total);
                    }
                };
                req.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function createObjectURL(blob) {
        if (!blob) return null;
        if (typeof blob === "string") return blob;
        return URL.createObjectURL(blob);
    }

    function getMeta(key) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var req = getStore(STORE_META, "readonly").get(key);
                req.onsuccess = function () {
                    resolve(req.result ? req.result.value : null);
                };
                req.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    function setMeta(key, value) {
        return open().then(function () {
            return new Promise(function (resolve, reject) {
                var tx = db.transaction(STORE_META, "readwrite");
                tx.objectStore(STORE_META).put({ key: key, value: value });
                tx.oncomplete = function () { resolve(); };
                tx.onerror = function (e) { reject(e.target.error); };
            });
        });
    }

    return {
        open: open,
        _db: function () { return db; },
        downloadSong: downloadSong,
        getSongBlob: getSongBlob,
        removeSong: removeSong,
        getDownloadedIds: getDownloadedIds,
        getDownloadedSongs: getDownloadedSongs,
        isDownloaded: isDownloaded,
        getTotalSize: getTotalSize,
        createObjectURL: createObjectURL,
        getMeta: getMeta,
        setMeta: setMeta,
    };
})();
