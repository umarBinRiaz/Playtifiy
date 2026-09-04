(function () {

    "use strict";


    /* =========================
       SERVICE WORKER (registered in <head>)
    ========================= */


    /* =========================
       INSTALL / DOWNLOAD BUTTON
    ========================= */

    var deferredPrompt = window.__playtifiyDeferred || null;
    var installBtn = document.getElementById("installBtn");

    window.addEventListener("playtifiy-install-ready", function () {
        deferredPrompt = window.__playtifiyDeferred || deferredPrompt;
    });

    window.addEventListener("beforeinstallprompt", function (e) {
        e.preventDefault();
        deferredPrompt = e;
        window.__playtifiyDeferred = e;
    });

    window.addEventListener("appinstalled", function () {
        deferredPrompt = null;
        window.__playtifiyDeferred = null;
        if (installBtn) {
            installBtn.innerHTML = "<span>\u2713</span> Installed";
        }
    });

    function isElectron() {
        return !!(window && window.process && window.process.type) ||
               !!(window && window.electronAPI && window.electronAPI.isElectron);
    }

    function isStandalone() {
        return window.matchMedia("(display-mode: standalone)").matches ||
               window.navigator.standalone === true;
    }

    function getGitHubReleasesUrl() {
        return "https://github.com/umarbinriaz/Playtifiy/releases/latest";
    }

    function updateInstallButton() {
        if (!installBtn) return;

        if (isElectron()) {
            installBtn.style.display = "none";
            return;
        }

        if (isStandalone()) {
            installBtn.innerHTML = "<span>\u2713</span> Installed";
            installBtn.title = "Playtifiy is installed";
            return;
        }

        var ua = navigator.userAgent;
        var isAndroid = /android/i.test(ua);
        var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

        if (deferredPrompt) {
            installBtn.innerHTML = "<span>\u2193</span> Install";
            installBtn.title = "Install Playtifiy";
        } else if (isAndroid || isIOS) {
            installBtn.innerHTML = "<span>\u2193</span> Install";
            installBtn.title = "Install Playtifiy";
        } else {
            installBtn.innerHTML = "<span>\u2193</span> Download";
            installBtn.title = "Download Playtifiy Desktop";
        }
    }

    if (installBtn) {
        installBtn.addEventListener("click", function () {

            if (isElectron()) {
                return;
            }

            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(function () {
                    deferredPrompt = null;
                    window.__playtifiyDeferred = null;
                    updateInstallButton();
                }).catch(function () {
                    deferredPrompt = null;
                    window.__playtifiyDeferred = null;
                });
                return;
            }

            var ua = navigator.userAgent;
            var isAndroid = /android/i.test(ua);
            var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

            if (isAndroid) {
                var msg = "To install Playtifiy:\n\n" +
                    "1. Open this page in Chrome\n" +
                    "2. Tap the \u22EE menu (top right)\n" +
                    "3. Tap \"Install app\"\n\n" +
                    "Or tap your browser's install banner if shown.";
                alert(msg);
            } else if (isIOS) {
                var msg = "To install Playtifiy:\n\n" +
                    "1. Open this page in Safari\n" +
                    "2. Tap the Share button (\u21E7\u2B06)\n" +
                    "3. Scroll down and tap \"Add to Home Screen\"\n" +
                    "4. Tap \"Add\"";
                alert(msg);
            } else {
                window.open(getGitHubReleasesUrl(), "_blank");
            }
        });
    }

    setTimeout(updateInstallButton, 500);
    setTimeout(updateInstallButton, 2000);
    setTimeout(updateInstallButton, 5000);


    /* =========================
       DOWNLOAD SONGS FOR OFFLINE
    ========================= */

    function initDownloadButtons() {
        document.addEventListener("click", function (e) {
            var btn = e.target.closest(".card-download");
            if (!btn) return;

            var songId = Number(btn.getAttribute("data-song-id"));
            var song = songs.find(function (s) { return s.id === songId; });
            if (!song) return;

            if (!song.src || song.src.indexOf("./assets/") === 0) {
                return;
            }

            if (DownloadManager.isDownloading(songId)) {
                return;
            }

            btn.textContent = "\u23F3";
            btn.title = "Downloading...";

            DownloadManager.downloadSong(song, function (progress) {
                btn.textContent = progress.percent + "%";
            }).then(function () {
                btn.textContent = "\u2713";
                btn.title = "Downloaded for offline";
                btn.classList.add("downloaded");
                showToast("Downloaded: " + song.title);
            }).catch(function (err) {
                btn.textContent = "\u2193";
                btn.title = "Download for offline";
                showToast("Download failed: " + err.message);
            });
        });
    }

    function showToast(msg) {
        var existing = document.querySelector(".toast");
        if (existing) existing.remove();

        var toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = msg;
        document.body.appendChild(toast);

        setTimeout(function () { toast.classList.add("show"); }, 10);
        setTimeout(function () {
            toast.classList.remove("show");
            setTimeout(function () { toast.remove(); }, 300);
        }, 3000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDownloadButtons);
    } else {
        initDownloadButtons();
    }


    /* =========================
       MEDIA SESSION
    ========================= */

    var audio = document.getElementById("audio");
    var titleEl = document.getElementById("playerTitle");
    var artistEl = document.getElementById("playerArtist");
    var coverEl = document.getElementById("playerCover");

    function updateMediaMetadata() {
        if (!("mediaSession" in navigator)) return;
        var cover = coverEl && coverEl.src ? coverEl.src : "";
        var artwork = cover ? [
            { src: cover, sizes: "96x96", type: "image/jpeg" },
            { src: cover, sizes: "256x256", type: "image/jpeg" },
            { src: cover, sizes: "512x512", type: "image/jpeg" }
        ] : [];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: titleEl ? titleEl.textContent : "",
            artist: artistEl ? artistEl.textContent : "",
            album: "Playtifiy",
            artwork: artwork
        });
    }

    function syncPlaybackState() {
        if (!("mediaSession" in navigator)) return;
        navigator.mediaSession.playbackState = audio && audio.paused ? "paused" : "playing";
    }

    function syncPositionState() {
        if (!("mediaSession" in navigator) || !("setPositionState" in navigator.mediaSession)) return;
        if (!audio || isNaN(audio.duration)) return;
        try {
            navigator.mediaSession.setPositionState({
                duration: audio.duration,
                playbackRate: audio.playbackRate,
                position: audio.currentTime
            });
        } catch (e) {}
    }

    if (audio) {
        ["play", "pause"].forEach(function (type) {
            audio.addEventListener(type, function () {
                updateMediaMetadata();
                syncPlaybackState();
            });
        });
        audio.addEventListener("loadedmetadata", syncPlaybackState);
        audio.addEventListener("timeupdate", syncPositionState);
    }

    if ("mediaSession" in navigator) {
        var ms = navigator.mediaSession;
        ms.setActionHandler("play", function () { if (audio) audio.play(); });
        ms.setActionHandler("pause", function () { if (audio) audio.pause(); });
        var prevBtn = document.getElementById("previousBtn");
        var nextBtn = document.getElementById("nextBtn");
        ms.setActionHandler("previoustrack", function () { if (prevBtn) prevBtn.click(); });
        ms.setActionHandler("nexttrack", function () { if (nextBtn) nextBtn.click(); });
        try {
            ms.setActionHandler("seekto", function (d) {
                if (audio && d && !isNaN(d.seekTime)) audio.currentTime = d.seekTime;
            });
        } catch (e) {}
    }


    /* =========================
       TV / REMOTE NAVIGATION
    ========================= */

    function enhanceCard(card) {
        if (card.getAttribute("data-enhanced")) return;
        card.setAttribute("data-enhanced", "1");
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        var t = card.querySelector("h3");
        card.setAttribute("aria-label", t ? "Play " + t.textContent : "Play song");
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                var b = card.querySelector(".card-play");
                if (b) b.click();
            }
        });
    }

    function enhanceAllCards() {
        var cards = document.querySelectorAll(".song-card");
        for (var i = 0; i < cards.length; i++) enhanceCard(cards[i]);
    }

    new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            for (var i = 0; i < m.addedNodes.length; i++) {
                var n = m.addedNodes[i];
                if (n.nodeType !== 1) continue;
                if (n.classList && n.classList.contains("song-card")) enhanceCard(n);
                else if (n.querySelectorAll) {
                    var c = n.querySelectorAll(".song-card");
                    for (var j = 0; j < c.length; j++) enhanceCard(c[j]);
                }
            }
        });
    }).observe(document.body, { childList: true, subtree: true });

    enhanceAllCards();


    /* =========================
       BACK BUTTON (TV / ANDROID)
    ========================= */

    window.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" || e.key === "Escape") {
            var s = document.querySelector(".sidebar.open");
            if (s) {
                e.preventDefault();
                s.classList.remove("open");
                var backdrop = document.querySelector(".sidebar-backdrop");
                if (backdrop) backdrop.remove();
            }
        }
    });

})();
