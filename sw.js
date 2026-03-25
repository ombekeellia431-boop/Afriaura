self.addEventListener('install', (e) => {
  console.log('Afriaura Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
