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
    <div className={`relative overflow-hidden ${className}`} style={{ minHeight: '2.8em', width: '100%' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 right-0 md:whitespace-nowrap block"
          style={{
            lineHeight: '1.4',
            wordBreak: 'break-word',
            maxHeight: '2.8em',
            overflow: 'hidden'
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
