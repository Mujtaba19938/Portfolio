"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check if about section is in view when on home page
      if (pathname === "/") {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect()
          const isInView = rect.top <= 100 && rect.bottom >= 100
          setActiveSection(isInView ? "about" : null)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      window.location.href = "/#about"
      return
    }

    // If we're already on the home page, just scroll to the section
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
      setActiveSection("about")
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const isActive = (href: string) => {
    if (href === "#about") {
      return activeSection === "about" || pathname === "/#about"
    }
    return pathname === href
  }

  const navItems = [
    { href: "/", label: "Home", action: null },
    { href: "/projects", label: "Projects", action: null },
    { href: "#about", label: "About", action: scrollToAbout },
    { href: "/contact", label: "Contact", action: null },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--navbar-bg)] backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#c9a86a] font-bold text-xl">
          MK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.action}
              className={`transition-colors duration-300 hover:text-[#c9a86a] ${
                isActive(item.href) ? "text-[#c9a86a]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Resume Download Button */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-[#c9a86a] text-[#1a1a1a] font-semibold py-2 px-4 rounded-md flex items-center group hover:shadow-lg transition-all duration-300"
            onClick={() => {
              // Analytics tracking could go here
              console.log("Resume viewed")
            }}
          >
            <span className="mr-2">Resume</span>
            <Download size={16} className="animate-bounce" />
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a1a1a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          {/* Mobile Resume Button */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 bg-[#c9a86a] text-[#1a1a1a] font-semibold py-1.5 px-3 rounded-md flex items-center"
            aria-label="View Resume"
          >
            <Download size={16} />
          </a>

          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--navbar-bg)] shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.action) {
                    item.action(e)
                  } else {
                    setIsMenuOpen(false)
                  }
                }}
                className={`transition-colors duration-300 hover:text-[#c9a86a] ${
                  isActive(item.href) ? "text-[#c9a86a]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Full Resume Button in Mobile Menu */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a86a] text-[#1a1a1a] font-semibold py-2 px-4 rounded-md flex items-center justify-center"
            >
              <span className="mr-2">View Resume</span>
              <Download size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
