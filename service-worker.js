var version = 'v1::';

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
            .open(version + 'fundamentals')
            .then(function(cache) {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/favicon.svg',
                ]);
            })
    );
});