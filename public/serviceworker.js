/* eslint-disable no-console */
const CACHE_NAME = 'TASK-MANAGER'
const urlsToCache = ['index.html']

const self = this

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')

        return cache.addAll(urlsToCache)
      }),
  )
})

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => fetch(event.request)
        .catch(() => caches.match('index.html'))),
  )
})

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName)
        }
        return null
      }),
    )),

  )
})
