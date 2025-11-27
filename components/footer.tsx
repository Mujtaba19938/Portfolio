"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Facebook, Mail, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  const socialLinks = [
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/mujtaba-khanani",
      color: "#0077B5",
      label: "LinkedIn",
    },
    {
      id: "facebook",
      icon: <Facebook size={20} />,
      url: "https://facebook.com/mujtaba.khanani",
      color: "#1877F2",
      label: "Facebook",
    },
    {
      id: "whatsapp",
      icon: <Phone size={20} />,
      url: "https://wa.me/1234567890", // Replace with your WhatsApp number
      color: "#25D366",
      label: "WhatsApp",
    },
    {
      id: "gmail",
      icon: <Mail size={20} />,
      url: "mailto:contact@mujtabakhanani.com",
      color: "#EA4335",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-footer py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Social Icons and Theme Switcher */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              onMouseEnter={() => setHoveredIcon(social.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                style={{
                  backgroundColor: hoveredIcon === social.id ? social.color : "var(--icon-bg)",
                }}
              >
                {social.icon}
              </motion.div>
              {hoveredIcon === social.id && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-tooltip text-tooltip-text text-xs py-1 px-2 rounded whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {social.label}
                </motion.div>
              )}
            </motion.a>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            className="relative"
            onClick={toggleTheme}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setHoveredIcon("theme")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              style={{
                backgroundColor: hoveredIcon === "theme" ? "#f59e0b" : "var(--icon-bg)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.div>
            {hoveredIcon === "theme" && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-tooltip text-tooltip-text text-xs py-1 px-2 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-footer-text">&copy; {new Date().getFullYear()} Mujtaba Khanani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
