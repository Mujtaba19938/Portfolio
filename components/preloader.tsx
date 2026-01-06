"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"

interface PreloaderProps {
  onFinished: () => void
}

export default function Preloader({ onFinished }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; scale: number }>>([])

  // Typing animation for the name
  const [text] = useTypewriter({
    words: ["Mujtaba Khanani"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
  })

  // Initialize particles after component mounts (client-side only)
  useEffect(() => {
    // Create particles only on the client side
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
      scale: Math.random() * 0.5 + 0.5,
    }))
    setParticles(newParticles)
  }, [])

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 400)

    return () => clearInterval(interval)
  }, [])

  // Trigger the onFinished callback when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onFinished()
      }, 800) // Wait a bit after reaching 100% before finishing
      return () => clearTimeout(timeout)
    }
  }, [progress, onFinished])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1a1a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Ambient background effect - subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#c9a86a]/20"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-[#c9a86a]/10"
          animate={{
            boxShadow: [
              "0 0 20px 2px rgba(201, 168, 106, 0.1)",
              "0 0 30px 5px rgba(201, 168, 106, 0.2)",
              "0 0 20px 2px rgba(201, 168, 106, 0.1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Main content */}
        <div className="flex flex-col items-center justify-center px-8 py-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 text-sm tracking-widest text-[#c9a86a]/80 uppercase"
          >
            Web Developer
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 min-h-[60px] md:min-h-[80px]">
            <span className="text-[#c9a86a]">{text}</span>
            <Cursor cursorColor="#c9a86a" />
          </h1>

          {/* Pulsing line animation */}
          <motion.div
            className="w-24 h-[2px] bg-[#c9a86a]/60 rounded-full mb-8"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Loading text */}
          <motion.div
            className="text-xs tracking-[0.3em] uppercase text-[#c9a86a]/70 mb-6"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Loading portfolio...
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 md:w-64 h-1 bg-[#333333] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#c9a86a]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            className="mt-2 text-xs text-[#c9a86a]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
