"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Preloader from "./preloader"

interface PreloaderWrapperProps {
  children: React.ReactNode
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
  const [loading, setLoading] = useState(true)

  // Disable scrolling when preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [loading])

  const handlePreloaderFinished = () => {
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader onFinished={handlePreloaderFinished} />}</AnimatePresence>
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  )
}
