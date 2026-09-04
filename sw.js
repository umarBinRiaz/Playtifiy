var CACHE_PREFIX = "playtifiy-";
var CACHE_NAME = "playtifiy-v6";

var APP_SHELL = [
    "./",
    "./index.html",
    "./style.css",
    "./js/script.js",
    "./js/enhance.js",
    "./js/offline-storage.js",
    "./js/download-manager.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-192.png",
    "./icons/icon-maskable-512.png",
    "./icons/apple-touch-icon.png",
    "./assets/Favico/fav.png"
];


function isCacheable(response) {
    return (
        response &&
        (response.type === "opaque" || response.status === 200)
    );
}


function cachePut(request, response) {
    var url =
        typeof request === "string"
            ? request
            : request.url;

    return caches
        .open(CACHE_NAME)
        .then(function (cache) {
            return cache.put(url, response);
        });
}


function cacheFirst(request) {
    return caches
        .match(request)
        .then(function (cached) {

            var network = fetch(request)
                .then(function (response) {

                    if (isCacheable(response)) {
                        cachePut(request, response.clone());
                    }

                    return response;

                })
                .catch(function () {
                    return cached;
                });

            return cached || network;

        });
}


self.addEventListener("install", function (event) {

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(APP_SHELL);
            })
            .then(function () {
                return self.skipWaiting();
            })
    );

});


self.addEventListener("activate", function (event) {

    event.waitUntil(
        caches
            .keys()
            .then(function (keys) {

                return Promise.all(
                    keys
                        .filter(function (key) {

                            return (
                                key.indexOf(CACHE_PREFIX) === 0 &&
                                key !== CACHE_NAME
                            );

                        })
                        .map(function (key) {
                            return caches.delete(key);
                        })
                );

            })
            .then(function () {
                return self.clients.claim();
            })
    );

});


self.addEventListener("fetch", function (event) {

    var request = event.request;

    if (request.method !== "GET") {
        return;
    }

    var url = new URL(request.url);

    if (request.mode === "navigate") {

        event.respondWith(
            fetch(request)
                .then(function (response) {

                    if (response.status === 200) {
                        cachePut(request, response.clone());
                    }

                    return response;

                })
                .catch(function () {
                    return caches
                        .match("./index.html")
                        .then(function (cached) {
                            return cached || caches.match("./");
                        });
                })
        );

        return;

    }

    if (
        request.destination === "audio" ||
        request.destination === "video"
    ) {

        event.respondWith(
            caches.match(request).then(function (cached) {
                if (cached) return cached;
                return fetch(request).then(function (response) {
                    if (isCacheable(response)) {
                        cachePut(request, response.clone());
                    }
                    return response;
                }).catch(function () {
                    return new Response("", { status: 408, statusText: "Offline" });
                });
            })
        );

        return;

    }

    if (
        request.destination === "image" ||
        request.destination === "font"
    ) {

        event.respondWith(cacheFirst(request));

        return;
    }

    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(cacheFirst(request));

});
