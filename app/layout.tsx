import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PreloaderWrapper from "@/components/preloader-wrapper"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Mujtaba Khanani | Web Developer",
  description: "Portfolio website of Mujtaba Khanani, a full-stack web developer",
  manifest: "/manifest.json",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider>
          <PreloaderWrapper>{children}</PreloaderWrapper>
        </ThemeProvider>
        <Script src="/register-sw.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
