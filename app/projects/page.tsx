"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  categories: string[]
  demoLink: string
  githubLink: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [filterType, setFilterType] = useState<"technology" | "category">("technology")
  const router = useRouter()

  // Define the fixed technologies from the image
  const technologies = ["HTML&CSS", "Javascript", "UI/UX", "Word Press", "React-JS", ".Net", "Vite-JS", "Flutter"]

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Omnifood",
        description: "A premium food delivery service website with subscription plans for healthy meals.",
        image: "/omnifood-website.png",
        tags: ["HTML&CSS"],
        categories: ["Website", "Food & Beverage"],
        demoLink: "https://mujtaba19938.github.io/Omnifood/",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Skeleton Loader",
        description:
          "A clean, animated skeleton loading component for improved user experience during content loading.",
        image: "/skeleton-loader.png",
        tags: ["HTML&CSS"],
        categories: ["Component", "UI"],
        demoLink: "https://mujtaba19938.github.io/skeleton-loader/",
        githubLink: "#",
      },
      {
        id: 3,
        title: "Parallax Scrolling",
        description:
          "An interactive parallax scrolling website showcasing smooth scrolling effects and depth perception.",
        image: "/parallax-scrolling.png",
        tags: ["HTML&CSS"],
        categories: ["Website", "Animation"],
        demoLink: "https://mujtaba19938.github.io/Parallax-Scrolling/",
        githubLink: "#",
      },
      {
        id: 4,
        title: "Calculator",
        description:
          "A sleek, interactive calculator application with standard and scientific modes, featuring a clean UI.",
        image: "/Calculator.png",
        tags: ["Javascript"],
        categories: ["Web App", "Utility"],
        demoLink: "https://mujtaba19938.github.io/Calculator/",
        githubLink: "#",
      },
      {
        id: 5,
        title: "Pig Game",
        description:
          "An engaging two-player dice game where players compete to reach 100 points first while managing risk.",
        image: "/Pig-Game.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Pig-game/",
        githubLink: "#",
      },
      {
        id: 6,
        title: "Guess My Number",
        description:
          "A fun number guessing game with a retro interface where players try to guess a number between 1 and 50.",
        image: "/Guess-My-Number.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Guess-My-Number/",
        githubLink: "#",
      },
      {
        id: 7,
        title: "JS Quiz",
        description:
          "An interactive quiz application testing JavaScript knowledge with multiple-choice questions and score tracking.",
        image: "/JS-Quiz.png",
        tags: ["Javascript"],
        categories: ["Web App", "Education"],
        demoLink: "https://mujtaba19938.github.io/Js-Quiz/",
        githubLink: "#",
      },
      {
        id: 8,
        title: "JS Modal",
        description:
          "A lightweight, customizable modal component implementation with multiple modal types and smooth animations.",
        image: "/JS-Modal.png",
        tags: ["Javascript"],
        categories: ["Component", "UI"],
        demoLink: "https://mujtaba19938.github.io/Js-Modal/",
        githubLink: "#",
      },
      {
        id: 9,
        title: "Weather App",
        description:
          "A sleek weather application that provides current conditions and 5-day forecasts for any location.",
        image: "/weather-app.png",
        tags: ["Javascript"],
        categories: ["Web App", "Utility"],
        demoLink: "https://mujtaba19938.github.io/Weather-App/",
        githubLink: "#",
      },
      {
        id: 13,
        title: "Al Bayan Academy",
        description:
          "An educational website for an Islamic academy offering Quran memorization and Islamic studies courses.",
        image: "/Al-Bayan-Academy.png",
        tags: ["Word Press", "HTML&CSS", "UI/UX"],
        categories: ["Website", "Education"],
        demoLink: "https://albayanacademy.ae/",
        githubLink: "#",
      },
      {
        id: 16,
        title: "Face Analyzer",
        description: "An AI-powered application that analyzes face shape and recommends suitable eyeglass styles.",
        image: "/face-analyzer.png",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://v0-next-js-face-analyzer.vercel.app/",
        githubLink: "#",
      },
      {
        id: 17,
        title: "TTS System",
        description: "An advanced text-to-speech system with multiple voices, languages, and customization options.",
        image: "/TTS-System.png",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://v0-advanced-ai-tts-system.vercel.app/",
        githubLink: "#",
      },
      {
        id: 22,
        title: "AI Agents",
        description: "A cinematic AI agency landing page highlighting always-on agents, feature showcases, and tiered pricing.",
        image: "/ai-agents.png",
        tags: ["React-JS"],
        categories: ["Website", "Marketing"],
        demoLink: "https://ai-agent-git-master-mujtabas-projects-5f43cf3d.vercel.app",
        githubLink: "https://ai-agent-git-master-mujtabas-projects-5f43cf3d.vercel.app",
      },
      {
        id: 23,
        title: "Purple.design",
        description: "A minimal hero landing page with a neural canvas — crisp, elegant, and quietly expressive. Built with React, Three.js, and a custom CPPN shader.",
        image: "/Screenshot 2025-12-07 174705.png",
        tags: ["React-JS"],
        categories: ["Website", "Design"],
        demoLink: "https://purple-web-xi.vercel.app",
        githubLink: "#",
      },
      {
        id: 24,
        title: "Watchhub",
        description: "A premium luxury watch e-commerce mobile app with elegant dark theme, featuring timepiece browsing, wishlist, and shopping cart functionality.",
        image: "/Screenshot 2025-12-14 120823.png",
        tags: ["Flutter"],
        categories: ["Mobile App", "E-commerce"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 18,
        title: "Reboost Social Media Agency",
        description: "A modern social media management and creative agency website with dark theme design and interactive elements.",
        image: "/reboost-social-media-agency.png",
        tags: ["Word Press"],
        categories: ["Website", "Business"],
        demoLink: "https://blueviolet-crocodile-614786.hostingersite.com/",
        githubLink: "#",
      },
      {
        id: 19,
        title: "Fotixa AI Image Enhancer",
        description: "An AI-powered photo editing platform with instant enhancement capabilities, background removal, and smart editing tools.",
        image: "/Fotixa-AI-Image-Enhancer.png",
        tags: ["Word Press"],
        categories: ["Website", "AI"],
        demoLink: "https://slategrey-ibis-702142.hostingersite.com/",
        githubLink: "#",
      },
      {
        id: 20,
        title: "Secure Internet Banking",
        description: "A comprehensive online banking platform with multi-layer security, fund transfers, and account management features.",
        image: "/Screenshot 2025-11-27 115500.png",
        tags: [".Net"],
        categories: ["Web App", "Finance"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 21,
        title: "Tech101.pk",
        description: "An online learning platform for tech education in Pakistan with industry-relevant courses and career pathways.",
        image: "/Tech101.pk.png",
        tags: ["Vite-JS"],
        categories: ["Website", "Education"],
        demoLink: "#",
        githubLink: "#",
      },
    ]

    setProjects(projectsData)
    setFilteredProjects(projectsData)
  }, [])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    console.log("Filter selected:", filter)

    if (filter === "All") {
      setFilteredProjects(projects)
      return
    }

    const filtered = projects.filter((project) => {
      const hasTag = project.tags.some((tag) => tag === filter)
      console.log(`Project ${project.title} has tag ${filter}:`, hasTag)
      return hasTag
    })

    console.log("Filtered projects:", filtered.length)
    setFilteredProjects(filtered)
  }

  const navigateToProject = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  const openProjectDemo = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))] font-poppins transition-colors duration-300">
      <Navbar />

      {/* Projects Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#c9a86a] mb-4">Projects</h1>
            <div className="w-20 h-1 bg-[#c9a86a] mx-auto mb-6"></div>
            <p className="text-[rgb(var(--foreground-rgb))] opacity-70 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is built with a focus on performance, user experience,
              and clean code.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === "All"
                  ? "bg-[#c9a86a] text-[rgb(var(--background-rgb))]"
                  : "bg-card border border-[rgb(var(--card-border))] text-[rgb(var(--foreground-rgb))] hover:opacity-80"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </motion.button>

            {technologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === tech
                    ? "bg-[#c9a86a] text-[rgb(var(--background-rgb))]"
                    : "bg-card border border-[rgb(var(--card-border))] text-[rgb(var(--foreground-rgb))] hover:opacity-80"
                }`}
                onClick={() => handleFilterChange(tech)}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-[rgb(var(--card-border))] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigateToProject(project.id)}
                  >
                    <div className="overflow-hidden">
                      {project.id === 1 ||
                      project.id === 2 ||
                      project.id === 3 ||
                      project.id === 4 ||
                      project.id === 5 ||
                      project.id === 6 ||
                      project.id === 7 ||
                      project.id === 8 ||
                      project.id === 9 ||
                      project.id === 10 ||
                      project.id === 13 ||
                      project.id === 16 ||
                      project.id === 17 ||
                      project.id === 18 ||
                      project.id === 19 ||
                      project.id === 22 ||
                      project.id === 23 ? (
                        // Special handling for projects with live demos
                        <div
                          className="relative w-full h-64 cursor-pointer"
                          onClick={(e) => openProjectDemo(e, project.demoLink)}
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                            <span className="bg-[#c9a86a] text-[rgb(var(--background-rgb))] px-4 py-2 rounded-md font-semibold">
                              View Live Site
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Regular image for other projects
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[#c9a86a]">{project.title}</h3>
                      <p className="text-[rgb(var(--foreground-rgb))] opacity-70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-[rgb(var(--card-border))] text-[#c9a86a] px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          className="text-[rgb(var(--foreground-rgb))] hover:text-[#c9a86a] transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubLink, "_blank", "noopener,noreferrer")
                          }}
                        >
                          GitHub
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <h3 className="text-xl text-[rgb(var(--foreground-rgb))] opacity-70">No projects found matching the selected filter.</h3>
                  <button onClick={() => handleFilterChange("All")} className="mt-4 text-[#c9a86a] hover:underline">
                    Show all projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
