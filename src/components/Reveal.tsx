import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export const EASE_CALM = [0.22, 1, 0.36, 1] as const

/** Fades and lifts its children into view once, on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE_CALM }}
    >
      {children}
    </motion.div>
  )
}
