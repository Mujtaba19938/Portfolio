"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, animate, type SpringOptions } from "framer-motion"

interface UserCursorProps {
  color?: string
  textColor?: string
  size?: number
  showLabel?: boolean
  labelTiltStrength?: number
  pressScale?: number
}

const HIDE_NATIVE_CURSOR_STYLE_ID = "user-cursor-hide-native"
const HOVER_TARGET_SELECTOR = '[data-cursor-text], a, button, [role="button"], .cursor-pointer'
const MAX_LABEL_LENGTH = 32

function truncate(text: string) {
  return text.length > MAX_LABEL_LENGTH ? `${text.slice(0, MAX_LABEL_LENGTH - 1)}…` : text
}

// Resolves what the label pill should say for a hovered clickable element:
// an explicit override, then accessible name, then (for semantic controls)
// their own text, then a nearby heading for card-style containers.
function getHoverLabel(el: HTMLElement): string | null {
  const explicit = el.getAttribute("data-cursor-text")
  if (explicit) return truncate(explicit.trim())

  const aria = el.getAttribute("aria-label")
  if (aria?.trim()) return truncate(aria.trim())

  const tag = el.tagName.toLowerCase()
  if (tag === "a" || tag === "button" || el.getAttribute("role") === "button") {
    const text = el.textContent?.trim()
    return text ? truncate(text) : null
  }

  const heading = el.querySelector("h1, h2, h3, h4, h5, h6")
  const headingText = heading?.textContent?.trim()
  return headingText ? truncate(headingText) : "View"
}

export default function UserCursor({
  color = "#c9a86a",
  textColor = "#1a1a1a",
  size = 32,
  showLabel = true,
  labelTiltStrength = 25,
  pressScale = 0.92,
}: UserCursorProps) {
  const labelOffsetX = size * 0.9
  const labelOffsetY = size * 0.2 + 6

  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [hoverLabel, setHoverLabel] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mql = window.matchMedia("(pointer: coarse)")
    const sync = () => setIsTouchDevice(mql.matches)
    sync()
    mql.addEventListener("change", sync)
    return () => mql.removeEventListener("change", sync)
  }, [])

  const arrowSpring = useMemo<SpringOptions>(() => ({ stiffness: 380, damping: 32, mass: 0.6 }), [])
  const labelSpring = useMemo<SpringOptions>(() => ({ stiffness: 220, damping: 26, mass: 0.7 }), [])

  // Raw pointer position, off-screen until the first real reading arrives.
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const arrowX = useSpring(mouseX, arrowSpring)
  const arrowY = useSpring(mouseY, arrowSpring)
  const labelX = useSpring(mouseX, labelSpring)
  const labelY = useSpring(mouseY, labelSpring)
  const labelTranslateX = useTransform(labelX, (v) => v + labelOffsetX)
  const labelTranslateY = useTransform(labelY, (v) => v + labelOffsetY)

  // Press scale (springy bounce on press/release).
  const scaleMV = useMotionValue(1)
  useEffect(() => {
    const controls = animate(scaleMV, pressed ? pressScale : 1, {
      type: "spring",
      stiffness: 500,
      damping: 28,
      mass: 0.5,
    })
    return () => controls.stop()
  }, [pressed, pressScale, scaleMV])

  // Label tilt is derived from velocity so the pill rocks as the cursor changes direction.
  const labelTiltTarget = useMotionValue(0)
  const labelRotation = useSpring(labelTiltTarget, { stiffness: 200, damping: 24, mass: 0.6 })

  const lastSampleRef = useRef<{ x: number; y: number; t: number } | null>(null)

  useEffect(() => {
    if (isTouchDevice || typeof window === "undefined") return

    // Hide the native cursor everywhere, overriding any per-element `cursor` styles.
    let styleTag = document.getElementById(HIDE_NATIVE_CURSOR_STYLE_ID) as HTMLStyleElement | null
    if (!styleTag) {
      styleTag = document.createElement("style")
      styleTag.id = HIDE_NATIVE_CURSOR_STYLE_ID
      styleTag.textContent = "*, *::before, *::after { cursor: none !important; }"
      document.head.appendChild(styleTag)
    }

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      const now = performance.now()
      const last = lastSampleRef.current
      let vx = 0
      let vy = 0
      if (last) {
        const dt = Math.max(1, now - last.t)
        vx = ((x - last.x) / dt) * 1000
        vy = ((y - last.y) / dt) * 1000
      }
      lastSampleRef.current = { x, y, t: now }

      mouseX.set(x)
      mouseY.set(y)

      const speed = Math.hypot(vx, vy)
      const norm = Math.min(1, speed / 1500)
      const sign = vx === 0 ? 0 : vx > 0 ? 1 : -1
      labelTiltTarget.set(sign * norm * labelTiltStrength)

      const target = (e.target as HTMLElement | null)?.closest?.(HOVER_TARGET_SELECTOR) as HTMLElement | null
      setHoverLabel(target ? getHoverLabel(target) : null)

      setVisible(true)
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => {
      setVisible(false)
      setHoverLabel(null)
      lastSampleRef.current = null
      labelTiltTarget.set(0)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.documentElement.addEventListener("mouseleave", onLeave)

    return () => {
      document.getElementById(HIDE_NATIVE_CURSOR_STYLE_ID)?.remove()
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      setPressed(false)
    }
  }, [isTouchDevice, labelTiltStrength, mouseX, mouseY, labelTiltTarget])

  if (isTouchDevice) return null

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      {showLabel && hoverLabel && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: labelTranslateX,
            y: labelTranslateY,
            rotate: labelRotation,
            scale: scaleMV,
            background: color,
            borderRadius: 999,
            padding: `${size * 0.18}px ${size * 0.36}px`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
            opacity: visible ? 1 : 0,
            transformOrigin: "0% 50%",
            transition: "opacity 140ms ease",
            willChange: "transform, opacity",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              color: textColor,
              fontSize: Math.max(7, size * 0.43),
              lineHeight: 1.1,
              fontWeight: 600,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              whiteSpace: "nowrap",
              letterSpacing: 0.1,
            }}
          >
            {hoverLabel}
          </div>
        </motion.div>
      )}

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: arrowX,
          y: arrowY,
          scale: scaleMV,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          transformOrigin: "0% 0%",
          transition: "opacity 140ms ease",
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", overflow: "visible" }}>
          <path d="M5 3 L23 14 L14 16 L11 24 Z" fill={color} stroke="rgba(0,0,0,0.18)" strokeWidth={0.6} strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  )
}
