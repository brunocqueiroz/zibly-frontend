"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ParallaxImageProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxImage({ children, offset = 50, className = "" }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
