self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Permite acesso direto online à API e aos assets
  e.respondWith(fetch(e.request));
});