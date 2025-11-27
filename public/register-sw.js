// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope)

        // Check for updates to the Service Worker
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing
          console.log("Service Worker update found!")

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("New Service Worker installed, but waiting to activate")

              // Optional: Notify user about update
              if (window.confirm("New version available! Reload to update?")) {
                window.location.reload()
              }
            }
          })
        })
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
  })

  // Handle Service Worker updates
  let refreshing = false
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      refreshing = true
      window.location.reload()
    }
  })
}
