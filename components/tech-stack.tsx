"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface TechItem {
  name: string
  icon: string
  fallbackIcon?: string
}

export default function TechStack() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const techStack: TechItem[] = [
    {
      name: "HTML",
      icon: "/html5-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "/css3-logo.webp",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "/javascript-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "/react-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/tailwind-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "VS Code",
      icon: "/vscode-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Flutter",
      icon: "/flutter-tech.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Next.js",
      icon: "/nextjs-logo.png",
      fallbackIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ]

  const handleImageError = (techName: string) => {
    setImageErrors((prev) => ({ ...prev, [techName]: true }))
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="w-16 h-16 mb-2 bg-card border border-card rounded-lg flex items-center justify-center p-2 overflow-hidden relative"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 8px rgba(201, 168, 106, 0.5)",
              borderColor: "#c9a86a",
            }}
          >
            {imageErrors[tech.name] && tech.fallbackIcon ? (
              // Use fallback CDN image if local image fails
              <img
                src={tech.fallbackIcon || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="w-10 h-10 object-contain"
                onError={() => console.error(`Failed to load fallback image for ${tech.name}`)}
              />
            ) : (
              // Try local image first
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                width={40}
                height={40}
                className="object-contain"
                priority
                onError={() => handleImageError(tech.name)}
              />
            )}

          </motion.div>
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
