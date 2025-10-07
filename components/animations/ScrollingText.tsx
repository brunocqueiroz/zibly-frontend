"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export default function ScrollingText({ texts, interval = 3000, className = "" }: ScrollingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative ${className}`} style={{ minHeight: '2.8em' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-start"
        >
          <span
            className="md:whitespace-nowrap"
            style={{
              lineHeight: '1.4',
              wordBreak: 'break-word',
              overflow: 'hidden',
              display: 'block',
              width: '100%'
            }}
          >
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
