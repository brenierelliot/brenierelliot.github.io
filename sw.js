// Service worker de Steal Internet : reçoit les notifications push (« on te vole un site »)
// même quand le jeu est fermé. Les push sont envoyées « sans données » ; on va chercher le texte
// sur /push/pending (le serveur y range le message juste avant d'envoyer la push).

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

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
      if (!items.length) items = [{ title: '🌃 Steal Internet', body: 'Il se passe quelque chose dans ta ville. Reviens vite !' }];
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
