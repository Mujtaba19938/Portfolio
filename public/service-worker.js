// Service Worker for Mujtaba Khanani's Portfolio
const CACHE_NAME = "portfolio-cache-v1"

// Assets to cache immediately on service worker install
const PRECACHE_ASSETS = [
  "/",
  "/html5-logo.png",
  "/css3-logo.webp",
  "/javascript-logo.png",
  "/react-logo.png",
  "/tailwind-logo.png",
  "/vscode-logo.png",
  "/omnifood-website.png",
  "/skeleton-loader.png",
  "/parallax-scrolling.png",
  "/weather-app.png",
  "/task-management-app-interface.png",
  "/social-media-dashboard.png",
  "/fitness-app-mobile-ui.png",
  "/photography-portfolio.png",
  "/placeholder.svg",
]

// File extensions to cache when requested
const CACHE_EXTENSIONS = ["png", "jpg", "jpeg", "svg", "gif", "webp", "ico", "css", "js", "woff", "woff2", "ttf", "otf"]

// Install event - precache key assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...")

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Precaching assets")
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        console.log("Service Worker: Precaching complete")
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error("Service Worker: Precaching failed:", error)
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...")

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Service Worker: Clearing old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("Service Worker: Now ready to handle fetches!")
        return self.clients.claim()
      }),
  )
})

// Helper function to determine if a request should be cached
const shouldCache = (url) => {
  // Don't cache API requests or external resources
  if (url.includes("/api/") || url.includes("chrome-extension://") || url.includes("analytics")) {
    return false
  }

  // Cache files with specific extensions
  const extension = url.split(".").pop().toLowerCase()
  return CACHE_EXTENSIONS.includes(extension)
}

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && !event.request.url.includes("cdn.jsdelivr.net")) {
    return
  }

  // Handle image requests with cache-first strategy
  if (event.request.destination === "image" || shouldCache(event.request.url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
              return networkResponse
            }

            // Clone the response to cache it and return it
            const responseToCache = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })

            return networkResponse
          })
          .catch((error) => {
            console.error("Service Worker: Fetch failed:", error)
            // If both cache and network fail, return a fallback image for image requests
            if (event.request.destination === "image") {
              return caches.match("/placeholder.svg")
            }
            // For other resources, just propagate the error
            throw error
          })
      }),
    )
  } else {
    // For non-cacheable requests, use network-first strategy
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request)
      }),
    )
  }
})

// Listen for messages from the client
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
