const CACHE_NAME = "couponnet-v2";
const ASSETS = [
    "./",
    "./index.html",
    "./manifest.json"
];

// Кэшируем файлы при установке
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Отдаем файлы из кэша в офлайне
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
