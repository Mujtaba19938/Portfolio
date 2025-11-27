"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins">
      <Navbar />

      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-[#c9a86a] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-[#c9a86a] hover:bg-[#b89559] text-[#1a1a1a] font-semibold py-3 px-6 rounded-md transition-all duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
