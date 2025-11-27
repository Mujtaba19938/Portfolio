"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion"
import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Twitter, ArrowRight, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TechStack from "@/components/tech-stack"
import OfflineBanner from "@/components/offline-banner"

export default function Home() {
  const [text] = useTypewriter({
    words: ["Mujtaba Khanani"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 50,
  })

  // Animation variants for the button
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  }

  // Animation variants for the arrow
  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <OfflineBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 tracking-widest text-sm text-[#c9a86a]"
            >
              WEB DEV
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span>{text}</span>
              <Cursor cursorColor="#c9a86a" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg mb-8 max-w-2xl"
            >
              Full-stack developer specializing in creating exceptional digital experiences. Focused on building
              responsive web applications with modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <motion.button
                  className="relative overflow-hidden bg-transparent text-[#c9a86a] border border-[#c9a86a] font-semibold py-3 px-8 rounded-md group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-[#1a1a1a]">
                    Get in touch <Mail size={18} className="ml-2" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#c9a86a]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -inset-1 rounded-md opacity-0 group-hover:opacity-20 bg-[#c9a86a]"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(201, 168, 106, 0)",
                        "0 0 20px rgba(201, 168, 106, 0.5)",
                        "0 0 0px rgba(201, 168, 106, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.div
                  className="relative"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <motion.button className="bg-card hover:bg-opacity-80 border-card border font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center">
                    <span>View Projects</span>
                    <motion.div className="ml-2" variants={arrowVariants}>
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-md bg-[#c9a86a] opacity-0 filter blur-md"
                    animate={{
                      opacity: [0, 0.15, 0],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86a] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-[#c9a86a] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#c9a86a]">Who I Am</h3>
              <p className="mb-4">In short: Web Dev, College Student.</p>
              <p className="mb-4">
                I am a college freshman that taught myself how to code in my spare time as a highschooler. web coding
                and anything tech-related. I'm persuing in UX and UI development and design and work hard to pursue
                excellence in all my projects and are accessible. I also do the "techy" jobs for my friends, like
                plugging in or restarting a computer.
              </p>
              <p className="mb-4">
                I build AI agents, AI voice assistants, workflow automations, and smart tools that actually solve real
                problems — not the generic “AI toys” everyone else builds. My focus is clean UI, fast execution, and
                systems that don’t break under pressure. — I’m still the guy my friends call when something “techy”
                stops working, whether it’s plugging a cable back in or debugging their laptop.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#c9a86a]">Tech Stack</h3>
              <TechStack />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
