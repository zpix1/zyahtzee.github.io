"use strict";var precacheConfig=[["index.html","9760c1567d4183545bd2e174a1c37c9d"],["service-worker.js","88d73ab1522f39347d203e55bf295654"],["static/css/app.4ceb58a8b0919f6d89b71a2e12ec6b66.css","ec49c400e4cc67c98538dfba1de81254"],["static/js/app.4d3b4cd93acac2014e07.js","bdf3aec6d0b743737d02188a5aa47f9a"],["static/js/manifest.450d68788d977ad8a4c0.js","bcd0c82534a27e4358fe5f61137fe67f"],["static/js/vendor.2403ed79e8ddb31c3635.js","1050b7bfb65b0273783e3aea50d41533"],["yahtzee/dist/index.html","3f8d5fdeac80d003248f62fdcf5bf61a"],["yahtzee/dist/service-worker.js","176c1cfbddc0ebbed7353644c4a2d6fb"],["yahtzee/dist/static/css/app.e8babadf623a76948a0ede999ba929d3.css","df3aefbcb75f34e7707525ae48f1b9fb"],["yahtzee/dist/static/js/app.c0c9adcd33ea8f591f02.js","83514a0752334bb6c7b9982d62ae7687"],["yahtzee/dist/static/js/manifest.450d68788d977ad8a4c0.js","bcd0c82534a27e4358fe5f61137fe67f"],["yahtzee/dist/static/js/vendor.2403ed79e8ddb31c3635.js","1050b7bfb65b0273783e3aea50d41533"],["yahtzee/index.html","662c08282afdb27e1822d86a99e2fd6d"],["yahtzee/service-worker.js","c456f1034c5c1f6f54c2be2144da1439"],["yahtzee/static/css/app.b1747ca5c68d6b305669fbdad7913073.css","cb4246c0874aec214d15c59eb4c85c84"],["yahtzee/static/css/app.e8babadf623a76948a0ede999ba929d3.css","df3aefbcb75f34e7707525ae48f1b9fb"],["yahtzee/static/js/app.9e06eeb6bb64312d5f3c.js","0c201fc1d58aa6a87cc4eb2765555993"],["yahtzee/static/js/app.c0c9adcd33ea8f591f02.js","83514a0752334bb6c7b9982d62ae7687"],["yahtzee/static/js/manifest.450d68788d977ad8a4c0.js","bcd0c82534a27e4358fe5f61137fe67f"],["yahtzee/static/js/vendor.2403ed79e8ddb31c3635.js","1050b7bfb65b0273783e3aea50d41533"]],cacheName="sw-precache-v3-yahtzee-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});