var DownloadManager = (function () {
    "use strict";

    var activeDownloads = {};
    var downloadListeners = [];
    var CORS_PROXIES = [
        "",
        "https://corsproxy.io/?url=",
        "https://api.allorigins.win/raw?url="
    ];

    function formatBytes(bytes) {
        if (bytes === 0) return "0 B";
        var units = ["B", "KB", "MB", "GB"];
        var i = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, i)).toFixed(1) + " " + units[i];
    }

    function notifyListeners() {
        downloadListeners.forEach(function (fn) {
            try { fn(); } catch (e) {}
        });
    }

    function onStatusChange(fn) {
        downloadListeners.push(fn);
        return function () {
            var idx = downloadListeners.indexOf(fn);
            if (idx !== -1) downloadListeners.splice(idx, 1);
        };
    }

    function isDownloading(songId) {
        return !!activeDownloads[songId];
    }

    function getProgress(songId) {
        return activeDownloads[songId] || null;
    }

    function fetchWithProgress(url, onProgress) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "blob";
            xhr.timeout = 30000;

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
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(new Error("HTTP " + xhr.status));
                }
            };

            xhr.ontimeout = function () {
                reject(new Error("Download timed out"));
            };

            xhr.onerror = function () {
                reject(new Error("Network error"));
            };

            xhr.send();
        });
    }

    function downloadSong(song, onProgress) {
        if (!song || !song.id || !song.src) {
            return Promise.reject(new Error("Invalid song"));
        }

        if (activeDownloads[song.id]) {
            return Promise.reject(new Error("Already downloading"));
        }

        if (song.src.indexOf("./assets/") === 0 || song.src.indexOf("/") === 0) {
            return Promise.reject(new Error("Local files are already available offline"));
        }

        activeDownloads[song.id] = { percent: 0, loaded: 0, total: 0 };
        notifyListeners();

        var attempts = CORS_PROXIES.map(function (proxy) {
            if (proxy === "") return song.src;
            return proxy + encodeURIComponent(song.src);
        });

        var chain = Promise.reject();

        attempts.forEach(function (url) {
            chain = chain.catch(function () {
                return fetchWithProgress(url, function (progress) {
                    activeDownloads[song.id] = progress;
                    if (onProgress) onProgress(progress);
                    notifyListeners();
                });
            });
        });

        return chain.then(function (blob) {
            return OfflineStorage.open().then(function () {
                return new Promise(function (resolve, reject) {
                    var tx = OfflineStorage._db().transaction("songs", "readwrite");
                    tx.objectStore("songs").put({
                        id: song.id,
                        title: song.title,
                        blob: blob,
                        size: blob.size,
                        downloadedAt: Date.now(),
                    });
                    tx.oncomplete = function () {
                        delete activeDownloads[song.id];
                        notifyListeners();
                        resolve({ id: song.id, size: blob.size });
                    };
                    tx.onerror = function (e) {
                        delete activeDownloads[song.id];
                        notifyListeners();
                        reject(e.target.error);
                    };
                });
            });
        }).catch(function (err) {
            delete activeDownloads[song.id];
            notifyListeners();
            throw err;
        });
    }

    function removeSong(songId) {
        return OfflineStorage.removeSong(songId).then(function () {
            notifyListeners();
        });
    }

    function resolveSongSrc(song) {
        if (!song || !song.src) return Promise.resolve(song ? song.src : null);

        if (song.src.indexOf("./assets/") === 0 || song.src.indexOf("/") === 0) {
            return Promise.resolve(song.src);
        }

        return OfflineStorage.isDownloaded(song.id).then(function (downloaded) {
            if (!downloaded) return song.src;
            return OfflineStorage.getSongBlob(song.id).then(function (blob) {
                if (blob) {
                    var url = OfflineStorage.createObjectURL(blob);
                    return url || song.src;
                }
                return song.src;
            });
        });
    }

    return {
        downloadSong: downloadSong,
        removeSong: removeSong,
        resolveSongSrc: resolveSongSrc,
        isDownloading: isDownloading,
        getProgress: getProgress,
        getDownloadedIds: OfflineStorage.getDownloadedIds,
        getDownloadedSongs: OfflineStorage.getDownloadedSongs,
        isDownloaded: OfflineStorage.isDownloaded,
        getTotalSize: OfflineStorage.getTotalSize,
        formatBytes: formatBytes,
        onStatusChange: onStatusChange,
    };
})();
