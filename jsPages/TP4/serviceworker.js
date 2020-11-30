var staticCacheName = "pwa"; 
  
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var url = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/VOnEjzWr.shu'

var filesToCache = [
	'/',
	cors_api_url+url
]

this.addEventListener("install", function (e) { 
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) { 
      return cache.addAll(filesToCache); 
    }) 
  ); 
}); 
  
this.addEventListener("fetch", function (event) { 
  console.log("fetch event fired and catch : " + event.request.url); 
  
  event.respondWith( 
    caches.match(event.request).then(function (response) { 
      return response || fetch(event.request); 
    }) 
  );
}); 