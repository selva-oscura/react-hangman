var cacheName = 'hangman-v1';
var filesToCache = [
	'/',
	'/public/index.html',
	'/public/favicon.ico',
	'/public/hangman-128x128.png',
	'/public/hangman-144x144.png',
	'/public/hangman-152x152.png',
	'/public/hangman-192x192.png',
	'/public/hangman-256x256.png',
	'/public/words.json'
];

self.addEventListener('install', function(e){
	console.log('[ServiceWorker] install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	)
});

self.addEventListener('activate', function(e){
	console.log('[ServiceWorker] Activate');
});
	