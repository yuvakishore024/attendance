const CACHE_NAME = "attendance-v3";

const urlsToCache = [
  "/attendance-app/",
  "/attendance-app/index.html",
  "/attendance-app/manifest.json",
  "/attendance-app/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
