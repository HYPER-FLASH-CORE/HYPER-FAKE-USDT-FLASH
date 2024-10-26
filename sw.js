// service-worker.js

const CACHE_NAME = 'my-cache-v28';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './FLASHBTC-CORE/',
        './FLASHBTC-CORE/flashbtc/index.html',
        './FLASHBTC-CORE/flashbtc/index.css',
        './FLASHBTC-CORE/flashbtc/fun.js',
        './FLASHBTC-CORE/homescreen72.png',
        './FLASHBTC-CORE/homescreen48.png',
        './FLASHBTC-CORE/homescreen96.png',
        './FLASHBTC-CORE/homescreen144.png',
        './FLASHBTC-CORE/homescreen168.png',
        './FLASHBTC-CORE/homescreen192.png',
        './FLASHBTC-CORE/manifest.json'
        // Add more URLs to cache as needed
      ]);
    })
  );
});

// caches.open(CACHE_NAME).then(cache => {
//   return cache.addAll([
//     '/',
//     '/index.html',
//     '/flashbtc/inde.html',
//     '/script.js',
//     '/flashbtc/index.css',
//     '/flashbtc/fun.js',
//     '/homescreen72.png',
//     '/homescreen48.png',
//     '/homescreen96.png',
//     '/homescreen144.png',
//     '/homescreen168.png',
//     '/homescreen192.png',
//     '/manifest.json'
//     // Add more URLs to cache as needed
//   ]);
// })

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(fetchResponse => {
        if (!fetchResponse || fetchResponse.status !== 200) {
          return fetchResponse;
        }

        // Clone the response before caching and returning it
        const clonedResponse = fetchResponse.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, clonedResponse);
        });

        return fetchResponse;
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // Clean up old caches
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => {
          return caches.delete(name);
        })
      );
    })
  );
});
