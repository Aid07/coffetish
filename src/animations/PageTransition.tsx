import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import { pageTransition, reducedPage } from './variants'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduced = useReducedMotion()
  const variants = reduced ? reducedPage : pageTransition

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}
