// Service worker de Steal Internet : reçoit les notifications push (« on te vole un site »)
// même quand le jeu est fermé. Les push sont envoyées « sans données » ; on va chercher le texte
// sur /push/pending (le serveur y range le message juste avant d'envoyer la push).

self.addEventListener('install', () => self.skipWaiting());

// ---------- cache : le jeu se relance presque instantanément ----------
// Les fichiers lourds (modèles 3D, logos, textures, photos, sons, code) sont gardés sur l'appareil après
// la première visite. Le code (/assets/) a un nom qui change à chaque version : jamais de vieux code.
// La page elle-même passe toujours par le réseau d'abord (nouvelle version tout de suite).
const CACHE = 'steal-internet-v1';
const CACHED = /^\/(assets|models|logos|textures|celebs|sons|stickers|icons|avatars|posters|crew-emblems|decouvrir)\//;

self.addEventListener('activate', (event) =>
  event.waitUntil(
    (async () => {
      for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
      await self.clients.claim();
    })(),
  ),
);

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !CACHED.test(url.pathname) || req.headers.has('range')) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      const refresh = fetch(req).then((res) => {
        if (res.ok && res.status === 200) cache.put(req, res.clone()).catch(() => {});
        return res;
      });
      if (hit) {
        // code versionné : jamais modifié, inutile de revérifier ; le reste se met à jour en arrière-plan
        if (!url.pathname.startsWith('/assets/')) event.waitUntil(refresh.catch(() => {}));
        return hit;
      }
      return refresh;
    })(),
  );
});

self.addEventListener('push', (event) => {
  event.waitUntil(
    (async () => {
      let items = [];
      try {
        const sub = await self.registration.pushManager.getSubscription();
        if (sub) {
          const res = await fetch(`/push/pending?e=${encodeURIComponent(sub.endpoint)}`, { cache: 'no-store' });
          if (res.ok) items = await res.json();
        }
      } catch {
        // hors ligne ou serveur injoignable : on affichera un message générique
      }
      // au cas où un payload arriverait quand même
      if (event.data) {
        try {
          items.push(event.data.json());
        } catch {
          items.push({ title: 'Steal Internet', body: event.data.text() });
        }
      }
      if (!items.length) items = [{ title: 'Steal Internet', body: 'Il se passe quelque chose dans ta ville. Reviens vite !' }];
      const last = items[items.length - 1];
      const more = items.length > 1 ? ` (+${items.length - 1})` : '';
      await self.registration.showNotification((last.title || 'Steal Internet') + more, {
        body: last.body || '',
        tag: 'steal-internet',
        renotify: true,
        data: { url: '/' },
      });
    })(),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const c of all) {
        if ('focus' in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(event.notification.data?.url || '/');
    })(),
  );
});
