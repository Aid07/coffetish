import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { duration, ease, fadeUp } from './variants'
import { useReducedMotion } from '../hooks/useReducedMotion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: '-4%' }}
      transition={{ delay, duration: duration.slow, ease }}
    >
      {children}
    </motion.div>
  )
}
