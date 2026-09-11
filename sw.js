const CACHE='elimane-card-github-v1';
const ASSETS=['./','styles.css','app.js','Elimane-Sall.vcf','assets/elimane.webp','assets/clee.png','assets/poly-white.png','assets/qr-code.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
