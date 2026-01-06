"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, GitlabIcon as GitHub } from "lucide-react"
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
  longDescription?: string
  features?: string[]
  technologies?: string[]
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const projects: Project[] = [
      {
        id: 1,
        title: "Omnifood",
        description: "A premium food delivery service website with subscription plans for healthy meals.",
        image: "/omnifood-website.png",
        tags: ["HTML&CSS"],
        categories: ["Website", "Food & Beverage"],
        demoLink: "https://mujtaba19938.github.io/Omnifood/",
        githubLink: "#",
        longDescription:
          "Omnifood is a premium food delivery service website that offers subscription plans for healthy meals delivered to your door every day. The website features a clean, modern design with a focus on showcasing the healthy meal options and subscription benefits. Built with HTML, CSS, and JavaScript, this responsive website provides an excellent user experience across all devices.",
        features: [
          "Responsive design for all devices",
          "Interactive meal selection interface",
          "Subscription plan comparison",
          "Testimonials section with customer reviews",
          "Location-based delivery information",
          "Newsletter signup with form validation",
          "Smooth scrolling and navigation",
          "Call-to-action buttons throughout the site",
        ],
        technologies: [
          "HTML5 for structure",
          "CSS3 for styling and animations",
          "CSS Grid and Flexbox for layouts",
          "Media queries for responsiveness",
          "CSS animations for enhanced UX",
          "Form validation",
          "Optimized images for performance",
        ],
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
        longDescription:
          "Skeleton Loader is a lightweight, customizable component that provides a better user experience during content loading. Instead of showing a traditional spinner or loading icon, it displays a placeholder that mimics the layout of the content that will eventually appear. This creates a smoother, more engaging loading experience that reduces perceived wait time.",
        features: [
          "Animated loading effect with subtle pulse",
          "Customizable colors and dimensions",
          "Responsive design that adapts to different screen sizes",
          "Lightweight implementation with minimal dependencies",
          "Smooth transitions between loading and content states",
          "Dark mode support",
          "Easy integration into existing projects",
          "Improved perceived performance for users",
        ],
        technologies: [
          "HTML5 for structure",
          "CSS3 for styling and animations",
          "CSS keyframe animations for the loading effect",
          "CSS variables for easy customization",
          "Responsive design principles",
          "Dark mode implementation",
          "Performance optimization techniques",
        ],
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
        longDescription:
          "Parallax Scrolling is a modern web design technique that creates an illusion of depth by moving background elements at a different speed than foreground content during scrolling. This project demonstrates the implementation of parallax effects to create an engaging, immersive user experience that adds visual interest and interactivity to a website.",
        features: [
          "Multi-layer parallax scrolling effects",
          "Smooth scrolling animations",
          "Responsive design that works across devices",
          "Optimized performance for smooth animations",
          "Interactive elements that respond to scroll position",
          "Clean, minimalist design aesthetic",
          "Cross-browser compatibility",
          "Accessible implementation of visual effects",
        ],
        technologies: [
          "HTML5 for structure",
          "CSS3 for styling and visual effects",
          "CSS transforms for parallax effects",
          "Responsive design principles",
          "Performance optimization for smooth scrolling",
          "Browser compatibility techniques",
        ],
      },
      {
        id: 4,
        title: "Calculator",
        description:
          "A sleek, interactive calculator application with standard and scientific modes, featuring a clean UI.",
        image: "/calculator-app.png",
        tags: ["Javascript"],
        categories: ["Web App", "Utility"],
        demoLink: "https://mujtaba19938.github.io/Calculator/",
        githubLink: "#",
        longDescription:
          "This calculator application provides a clean, intuitive interface for performing mathematical operations. It features both standard and scientific calculation modes, allowing users to perform basic arithmetic as well as more complex calculations. The minimalist design focuses on usability while providing a modern aesthetic with light and dark mode options.",
        features: [
          "Standard and scientific calculation modes",
          "Basic arithmetic operations (addition, subtraction, multiplication, division)",
          "Light and dark theme options",
          "Responsive design that works on all devices",
          "Clean, intuitive user interface",
          "Real-time calculation display",
          "Keyboard support for desktop users",
          "Error handling for invalid operations",
        ],
        technologies: [
          "JavaScript for core functionality and calculations",
          "Event handling for button interactions",
          "DOM manipulation for updating the display",
          "Math object for complex calculations",
          "Event listeners for keyboard support",
          "State management for calculator memory",
          "Theme switching functionality",
          "Error handling and input validation",
        ],
      },
      {
        id: 5,
        title: "Pig Game",
        description:
          "An engaging two-player dice game where players compete to reach 100 points first while managing risk.",
        image: "/pig-game.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Pig-game/",
        githubLink: "#",
        longDescription:
          "Pig Game is a fun, interactive dice game for two players built with JavaScript. Players take turns rolling a die to accumulate points, with the risk of losing their turn score if they roll a 1. The game features a clean, modern UI with a gradient background and clear visual feedback for player turns and scores. This project demonstrates DOM manipulation, event handling, and game state management in JavaScript.",
        features: [
          "Two-player turn-based gameplay",
          "Interactive dice rolling animation",
          "Current turn score tracking",
          "Total score accumulation",
          "Risk management mechanics (roll a 1 and lose turn points)",
          "New game reset functionality",
          "Visual indication of active player",
          "Responsive design for all devices",
        ],
        technologies: [
          "JavaScript for game logic and interactivity",
          "DOM manipulation for updating the UI",
          "Event listeners for button interactions",
          "CSS3 for styling and visual effects",
          "CSS Grid for layout structure",
          "State management for game progress",
          "Random number generation for dice rolls",
          "Conditional logic for game rules",
        ],
      },
      {
        id: 6,
        title: "Guess My Number",
        description:
          "A fun number guessing game with a retro interface where players try to guess a number between 1 and 50.",
        image: "/guess-my-number.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Guess-My-Number/",
        githubLink: "#",
        longDescription:
          "Guess My Number is an interactive game where players attempt to guess a randomly generated number between 1 and 50. The game features a retro-style interface with pixel-like typography and a minimalist design. Players receive feedback after each guess, telling them if their guess is too high or too low, and the game keeps track of the number of attempts and the high score. This project demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and game state management.",
        features: [
          "Random number generation between 1 and 50",
          "Guess validation and feedback system",
          "Score tracking based on number of attempts",
          "High score persistence during session",
          "Retro-style user interface with pixel typography",
          "Game reset functionality",
          "Visual feedback for correct and incorrect guesses",
          "Responsive design for all devices",
        ],
        technologies: [
          "JavaScript for game logic and interactivity",
          "DOM manipulation for updating the UI",
          "Event listeners for button interactions",
          "Math.random() for number generation",
          "Conditional logic for game rules",
          "CSS for retro styling and visual effects",
          "State management for game progress",
          "Input validation and error handling",
        ],
      },
      {
        id: 7,
        title: "JS Quiz",
        description:
          "An interactive quiz application testing JavaScript knowledge with multiple-choice questions and score tracking.",
        image: "/js-quiz.png",
        tags: ["Javascript"],
        categories: ["Web App", "Education"],
        demoLink: "https://mujtaba19938.github.io/Js-Quiz/",
        githubLink: "#",
        longDescription:
          "JS Quiz is an interactive application designed to test and improve JavaScript knowledge through a series of multiple-choice questions. The quiz features a sleek, minimalist interface with a dark theme and subtle animations. Users progress through questions one by one, with immediate feedback on their answers and a final score at the end. The application demonstrates advanced JavaScript concepts including state management, timer functionality, and dynamic content rendering.",
        features: [
          "Curated collection of JavaScript knowledge questions",
          "Multiple-choice answer selection",
          "Timer for each question to add challenge",
          "Immediate feedback on answer correctness",
          "Score tracking and final results display",
          "Progress indicator showing quiz completion",
          "Ability to review correct answers",
          "Minimalist design with focus on content",
        ],
        technologies: [
          "JavaScript for quiz logic and interactivity",
          "Array methods for question management",
          "DOM manipulation for dynamic content updates",
          "Event delegation for efficient event handling",
          "Local storage for saving high scores",
          "CSS transitions for smooth animations",
          "Responsive design for all devices",
          "Object-oriented programming principles",
        ],
      },
      {
        id: 8,
        title: "JS Modal",
        description:
          "A lightweight, customizable modal component implementation with multiple modal types and smooth animations.",
        image: "/js-modal.png",
        tags: ["Javascript"],
        categories: ["Component", "UI"],
        demoLink: "https://mujtaba19938.github.io/Js-Modal/",
        githubLink: "#",
        longDescription:
          "JS Modal is a clean, reusable modal component built with vanilla JavaScript. This project demonstrates how to create accessible, customizable modal dialogs without relying on external libraries. The implementation features smooth animations, keyboard navigation support, and multiple modal types that can be triggered from different buttons. The clean, minimalist design focuses on usability and performance.",
        features: [
          "Multiple modal types with different content",
          "Smooth open and close animations",
          "Keyboard accessibility (Escape to close, Tab navigation)",
          "Click outside to dismiss functionality",
          "Backdrop overlay with blur effect",
          "Focus trap within the modal for accessibility",
          "Customizable styling and content",
          "Responsive design for all screen sizes",
        ],
        technologies: [
          "Vanilla JavaScript for core functionality",
          "DOM manipulation for creating and removing modals",
          "Event delegation for efficient event handling",
          "CSS transitions for smooth animations",
          "Accessibility features (ARIA attributes, keyboard navigation)",
          "Event listeners for user interactions",
          "CSS Flexbox for centering and layout",
          "CSS variables for theming and customization",
        ],
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
        longDescription:
          "Weather App is a beautifully designed web application that provides real-time weather information and forecasts. With a clean, minimalist interface, users can quickly search for any location and get current weather conditions along with a 5-day forecast. The app features a warm, neutral color palette that creates a pleasant user experience while delivering essential weather data in an easy-to-read format.",
        features: [
          "Location-based weather data",
          "Current weather conditions display",
          "5-day weather forecast",
          "Search functionality for any location",
          "Temperature, humidity, and wind information",
          "UV index indicator",
          "Clean, intuitive user interface",
          "Responsive design for all devices",
        ],
        technologies: [
          "JavaScript for dynamic content and API integration",
          "Weather API integration",
          "Fetch API for data retrieval",
          "DOM manipulation",
          "Event handling",
          "Local storage for saving recent searches",
          "Asynchronous programming with Promises",
          "Error handling for API requests",
        ],
      },
      {
        id: 13,
        title: "Al Bayan Academy",
        description:
          "An educational website for an Islamic academy offering Quran memorization and Islamic studies courses.",
        image: "/al-bayan-academy.png",
        tags: ["Word Press", "HTML&CSS", "UI/UX"],
        categories: ["Website", "Education"],
        demoLink: "https://albayanacademy.ae/",
        githubLink: "#",
        longDescription:
          "Al Bayan Academy is a comprehensive educational website for an Islamic institution that offers Quran memorization and Islamic studies courses. The website features a beautiful, culturally appropriate design with Arabic typography and Islamic geometric patterns. Built on WordPress, the site provides course information, enrollment options, and resources for students seeking to deepen their understanding of Islamic teachings.",
        features: [
          "Course catalog with detailed descriptions",
          "Online enrollment system",
          "Student portal for accessing course materials",
          "Events calendar for classes and special programs",
          "Faculty profiles and credentials",
          "Testimonials from current and former students",
          "Blog with Islamic educational content",
          "Multilingual support (English and Arabic)",
          "Mobile-responsive design for all devices",
        ],
        technologies: [
          "WordPress CMS for content management",
          "Custom WordPress theme development",
          "Advanced Custom Fields for flexible content",
          "WooCommerce for course enrollment and payments",
          "Elementor page builder for layout design",
          "WPML for multilingual functionality",
          "Custom PHP for specialized features",
          "Responsive design principles",
          "SEO optimization for better visibility",
        ],
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
        longDescription:
          "Face Analyzer is an innovative AI-powered web application built with Next.js and React that helps users find the perfect eyewear match for their face shape. The application uses advanced facial recognition technology to analyze facial features and provide personalized eyeglass style recommendations. With a sleek, user-friendly interface and strong privacy focus, this tool enhances the online eyewear shopping experience.",
        features: [
          "AI-powered face shape analysis",
          "Personalized eyeglass style recommendations",
          "Privacy-focused design (no data storage)",
          "Responsive interface with dark theme",
          "Interactive user experience",
          "Real-time analysis feedback",
          "Comprehensive eyewear catalog",
          "Mobile-friendly design",
          "Secure image processing",
        ],
        technologies: [
          "Next.js for server-side rendering and routing",
          "React for component-based UI development",
          "TensorFlow.js for facial recognition",
          "Tailwind CSS for styling",
          "Framer Motion for animations",
          "React Context API for state management",
          "Vercel for deployment and hosting",
          "WebRTC for camera access",
          "TypeScript for type safety",
        ],
      },
      {
        id: 17,
        title: "TTS System",
        description: "An advanced text-to-speech system with multiple voices, languages, and customization options.",
        image: "/tts-system.jpeg",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://v0-advanced-ai-tts-system.vercel.app/",
        githubLink: "#",
        longDescription:
          "TTS System is a sophisticated text-to-speech application built with Next.js and React that converts written text into natural-sounding speech. The system offers a wide range of voices across multiple languages and dialects, along with extensive customization options for speech parameters. With its intuitive interface and powerful features, this tool is perfect for content creators, accessibility needs, and language learning applications.",
        features: [
          "Multiple voice options across different languages and accents",
          "Customizable speech parameters (rate, pitch, volume)",
          "Emotional tone selection for more natural speech",
          "Support for plain text, SSML, and markdown formats",
          "Batch processing capability for multiple text entries",
          "AI enhancement option for more natural-sounding speech",
          "Real-time preview of generated speech",
          "Downloadable audio files in multiple formats",
          "Responsive design for all devices",
        ],
        technologies: [
          "Next.js for server-side rendering and routing",
          "React for component-based UI development",
          "Web Speech API integration",
          "AI speech synthesis models",
          "Tailwind CSS for styling",
          "React Context API for state management",
          "Audio processing libraries",
          "TypeScript for type safety",
          "Vercel for deployment and hosting",
        ],
      },
      {
        id: 22,
        title: "AI Agents",
        description: "A futuristic landing page advertising autonomous AI agents with feature highlights, pricing, and contact form.",
        image: "/ai-agents.png",
        tags: ["React-JS"],
        categories: ["Website", "Marketing"],
        demoLink: "https://ai-agent-git-master-mujtabas-projects-5f43cf3d.vercel.app",
        githubLink: "https://ai-agent-git-master-mujtabas-projects-5f43cf3d.vercel.app",
        longDescription:
          "AI Agents is a high-impact marketing site for an autonomous agent platform. The hero section combines bold typography with a cinematic red-on-black backdrop to communicate speed and reliability. Visitors can scan marquee client logos, dive into value-driven feature cards, compare clear pricing tiers, and submit questions through a polished contact form.",
        features: [
          "Hero banner with bold typography, CTA, and ambient video background",
          "Animated marquee of trusted enterprise brands",
          "Four-part feature grid describing speed, security, AI tooling, and analytics",
          "Transparent pricing cards with Basic, Pro, and Ultra plans",
          "Persistent CTAs that direct users to get started or contact sales",
          "Responsive layout optimized for both desktop and mobile breakpoints",
        ],
        technologies: [
          "Next.js and React for the frontend architecture",
          "Tailwind CSS for rapid, responsive styling",
          "Framer Motion for subtle entrance animations",
          "Next/Image optimization for the cinematic hero artwork",
          "Vercel for hosting and edge delivery",
        ],
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
        longDescription:
          "Purple.design is a stunning, minimal hero landing page that transforms website design into art. The page features a mesmerizing neural canvas background created with Three.js and a custom CPPN (Compositional Pattern-Producing Network) shader, producing organic, flowing visual effects. The design showcases crisp typography, elegant layouts, and a quietly expressive aesthetic that demonstrates the intersection of creative coding and modern web design.",
        features: [
          "Neural canvas background with custom CPPN shader",
          "Elegant dark theme with purple gradient accents",
          "Minimal and expressive hero section design",
          "Smooth navigation with pill-style active states",
          "Call-to-action buttons with modern styling",
          "Responsive layout for all devices",
          "Interactive 3D visual effects",
          "Showcase section for design portfolio",
        ],
        technologies: [
          "React for component-based UI development",
          "Three.js for 3D graphics and WebGL rendering",
          "Custom CPPN shader for neural canvas effects",
          "Tailwind CSS for styling",
          "Framer Motion for animations",
          "Next.js for server-side rendering",
          "TypeScript for type safety",
          "Modern CSS for gradients and effects",
        ],
      },
      {
        id: 25,
        title: "FinDash Landing Page",
        description: "A polished fintech landing page showcasing a one-click asset dashboard with CTA-led hero design.",
        image: "/Screenshot 2026-01-06 140302.png",
        tags: ["React-JS"],
        categories: ["Website", "Finance"],
        demoLink: "https://fin-dash-landing-page.vercel.app/",
        githubLink: "https://fin-dash-landing-page.vercel.app/",
        longDescription:
          "FinDash is a sleek fintech landing page and dashboard concept that emphasizes trust and clarity for digital asset management. It features a gradient-rich hero, strong typography, and immediate CTAs guiding users to explore protection, pricing, and app access. The layout balances marketing storytelling with product snapshots to quickly communicate value.",
        features: [
          "CTA-focused hero with layered gradients and animated accents",
          "Navigation with anchored sections for app, assets, features, pricing, and FAQ",
          "Dashboard-style badges highlighting key products and asset tickers",
          "Prominent protection/insurance callouts for user reassurance",
          "Responsive layout tuned for both desktop and mobile viewing",
        ],
        technologies: [
          "Next.js and React for the landing experience",
          "Tailwind CSS for rapid styling and theming",
          "Framer Motion for subtle motion cues",
          "Next/Image for optimized assets",
          "Vercel for hosting and deployment",
        ],
      },
      {
        id: 26,
        title: "Rovoxa AI-Chatbot",
        description: "An intelligent AI chatbot platform that engages, converts, and supports users 24/7 with smart conversational capabilities.",
        image: "/Screenshot 2026-01-06 142811.png",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://rovoxa-tau.vercel.app/",
        githubLink: "https://rovoxa-tau.vercel.app/",
        longDescription:
          "Rovoxa is a modern AI chatbot platform designed to provide intelligent, conversational experiences for users. The platform features a sleek dark-themed interface with vibrant green accents, offering 24/7 engagement, conversion optimization, and user support. Built with React and modern web technologies, Rovoxa delivers a seamless chatbot experience that helps businesses automate customer interactions and improve user engagement.",
        features: [
          "Intelligent AI-powered conversational interface",
          "24/7 automated user engagement and support",
          "Modern dark theme with vibrant green accents",
          "Responsive design for desktop and mobile devices",
          "Free trial and demo options for users",
          "Feature-rich navigation with blog and pricing sections",
          "Clean, minimalist UI with futuristic aesthetic",
          "Real-time chat interface with status indicators",
        ],
        technologies: [
          "React.js for component-based UI development",
          "Next.js for server-side rendering and routing",
          "Tailwind CSS for modern styling",
          "AI/ML integration for chatbot intelligence",
          "Vercel for hosting and deployment",
          "Modern JavaScript (ES6+) for enhanced functionality",
          "Responsive design principles",
          "Real-time communication capabilities",
        ],
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
        longDescription:
          "Watchhub is a sophisticated luxury watch e-commerce mobile application built with Flutter. The app features an elegant dark theme with gold accents, providing a premium shopping experience for luxury timepiece enthusiasts. Users can browse featured watches from prestigious brands like Rolex, Omega, and TAG Heuer, explore categories, manage wishlists, and complete purchases through an intuitive interface designed for watch connoisseurs.",
        features: [
          "Elegant dark theme with gold accent colors",
          "Featured timepieces showcase with pricing",
          "Watch categories (Dress, Diver, Pilot, Chrono)",
          "Search functionality for finding specific watches",
          "Wishlist management for saving favorites",
          "Shopping cart for seamless checkout",
          "User profile and personalized greeting",
          "Bottom navigation for easy app navigation",
          "High-quality watch imagery and details",
          "Notification system for deals and updates",
        ],
        technologies: [
          "Flutter for cross-platform mobile development",
          "Dart programming language",
          "Material Design components",
          "Custom UI widgets for watch cards",
          "State management for cart and wishlist",
          "Responsive layout for various screen sizes",
          "Custom animations and transitions",
          "Local storage for user preferences",
        ],
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
        longDescription:
          "Reboost Social Media Agency is a modern, professional website for a social media management and creative agency. The website features a sleek dark theme design with vibrant accent colors, showcasing the agency's services including social media management, content creation, influencer collaborations, and brand strategy. Built on WordPress with custom styling, the site demonstrates modern web design principles and effective business presentation.",
        features: [
          "Modern dark theme with vibrant accent colors",
          "Service showcase with detailed descriptions",
          "Portfolio section with client success stories",
          "Pricing plans with flexible packages",
          "Client testimonials and reviews",
          "Contact forms and consultation booking",
          "Blog section for industry insights",
          "Responsive design for all devices",
          "Social media integration",
          "Performance analytics and reporting",
        ],
        technologies: [
          "WordPress CMS for content management",
          "Custom WordPress theme development",
          "HTML5 and CSS3 for structure and styling",
          "JavaScript for interactive elements",
          "Responsive design principles",
          "SEO optimization for better visibility",
          "Contact form integration",
          "Social media API integration",
          "Performance optimization techniques",
          "Cross-browser compatibility",
        ],
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
        longDescription:
          "Fotixa AI Image Enhancer is a cutting-edge AI-powered photo editing platform that revolutionizes the way users enhance their images. Built on WordPress, this platform offers instant photo enhancement with AI precision, background removal, smart editing tools, and cloud-based convenience. The website features a modern dark theme with purple gradients and showcases the platform's capabilities through interactive demonstrations and before/after comparisons.",
        features: [
          "AI-powered instant photo enhancement",
          "Background removal and replacement",
          "Smart editing tools and automation",
          "Cloud-based processing and storage",
          "User-friendly interface design",
          "Pricing plans with different tiers",
          "Mobile app integration",
          "Real-time editing preview",
          "High-quality output generation",
          "Multi-step editing workflow",
        ],
        technologies: [
          "WordPress CMS for content management",
          "Custom WordPress theme development",
          "AI integration for image processing",
          "Cloud-based image processing",
          "Responsive design for all devices",
          "Mobile app development integration",
          "Payment gateway integration",
          "User authentication system",
          "Image upload and processing",
          "Real-time preview functionality",
        ],
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
        longDescription:
          "Secure Internet Banking is a comprehensive online banking platform built with .NET technology that provides secure and reliable banking services. The platform features multi-layer security systems, secure fund transfers, account management capabilities, and a user-friendly interface. Built with enterprise-grade security standards, this application demonstrates advanced .NET development practices and secure web application architecture.",
        features: [
          "Multi-layer security system with account lockout protection",
          "Secure fund transfers with transaction password verification",
          "Comprehensive account management and balance inquiry",
          "Transaction history and account statements",
          "Session timeout protection for enhanced security",
          "Encrypted data transmission",
          "User authentication and authorization",
          "Service request management",
          "Real-time transaction processing",
          "Mobile-responsive design",
        ],
        technologies: [
          ".NET Framework for backend development",
          "ASP.NET Core for web application",
          "Entity Framework for data access",
          "SQL Server for database management",
          "Identity framework for authentication",
          "Razor Pages for dynamic content",
          "Bootstrap for responsive design",
          "JavaScript for client-side functionality",
          "SSL/TLS encryption for security",
          "Session management and security",
        ],
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
        longDescription:
          "Tech101.pk is a modern online learning platform designed specifically for tech education in Pakistan. Built with Vite.js for fast development and optimal performance, this platform offers industry-relevant courses, career pathways, and comprehensive training for the digital economy. The website features a clean, professional design with a focus on user experience and accessibility for students across Pakistan.",
        features: [
          "Industry-relevant tech courses and training programs",
          "Career pathways and skill development tracks",
          "User authentication and course enrollment system",
          "Interactive learning modules and assessments",
          "Student progress tracking and certificates",
          "Mobile-responsive design for all devices",
          "Payment integration for course purchases",
          "Student community and discussion forums",
          "Instructor profiles and course management",
          "Real-time course updates and notifications",
        ],
        technologies: [
          "Vite.js for fast development and build optimization",
          "React.js for component-based UI development",
          "Modern JavaScript (ES6+) for enhanced functionality",
          "CSS3 and responsive design principles",
          "State management for user data and course progress",
          "API integration for backend services",
          "Payment gateway integration",
          "User authentication and authorization",
          "Progressive Web App (PWA) features",
          "Performance optimization and lazy loading",
        ],
      },
    ]

    const id = params?.id
    if (id) {
      const foundProject = projects.find((p) => p.id === Number.parseInt(id as string))
      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/projects")
      }
    }
    setLoading(false)
  }, [params, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c9a86a]"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#c9a86a] mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="inline-flex items-center text-white hover:text-[#c9a86a] transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins">
      <Navbar />

      <section className="py-32">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-white hover:text-[#c9a86a] transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-[#252525] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[300px] md:h-[400px]">
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
                project.id === 23 ||
                project.id === 25 ||
                project.id === 26 ? (
                  // Special handling for projects with live demos
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative group"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-[#c9a86a] text-[#1a1a1a] px-6 py-3 rounded-md font-semibold">
                        Visit Live Site
                      </span>
                    </div>
                  </a>
                ) : (
                  // Regular image for other projects
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                )}
              </div>
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#c9a86a] mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-[#333333] text-[#c9a86a] px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg">{project.longDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-[#c9a86a] mb-4">Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#c9a86a] mb-4">Technologies</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.technologies?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubLink}
                    className="bg-transparent hover:bg-[#c9a86a] text-[#c9a86a] hover:text-[#1a1a1a] border border-[#c9a86a] font-semibold py-2 px-6 rounded-md transition-all duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <GitHub size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
