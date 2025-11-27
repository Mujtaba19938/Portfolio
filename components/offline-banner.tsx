"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WifiOff } from "lucide-react"

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    // Check initial online status
    setIsOffline(!navigator.onLine)

    // Add event listeners for online/offline events
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#c9a86a] text-[#1a1a1a] py-2 px-4 flex items-center justify-center"
        >
          <WifiOff size={18} className="mr-2" />
          <span className="font-medium">You are currently offline. Some content may be unavailable.</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
