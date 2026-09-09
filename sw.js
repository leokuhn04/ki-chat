// Service Worker: App-Hülle zwischenspeichern, damit die App auch offline startet.
// Strategie: erst Netz (damit Updates ankommen), sonst Cache.
const CACHE = 'kichat-v4';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180-v3.png', './icon-192-v3.png', './icon-512-v3.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    // cache: 'no-cache' zwingt den Browser, beim Server nachzufragen, statt bis zu 10 Minuten alte Kopien zu nehmen.
    fetch(e.request, {cache: 'no-cache'}).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
