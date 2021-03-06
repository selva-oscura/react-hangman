const VERSION = "1.1";

const filesToCache = [
	'./',
	'./index.html',
	'./favicon.ico',
	'./fonts/Artifika-Regular.eot',
	'./fonts/Artifika-Regular.ttf',
	'./fonts/Artifika-Regular.woff',
	'./fonts/Artifika-Regular.woff2'
];

var dataCacheName = 'hangman-appData-v' + VERSION;
var cacheName = 'hangman-v' + VERSION;

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
	e.waitUntil(
		caches.keys().then(function(keyList){
			return Promise.all(keyList.map(function(key){
				if(key !== cacheName && key !== dataCacheName){
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});
