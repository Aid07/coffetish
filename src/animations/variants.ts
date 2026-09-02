export const ease = [0.16, 1, 0.3, 1] as const
export const easeOut = [0.16, 1, 0.3, 1] as const

export const duration = {
  fast: 0.38,
  medium: 0.68,
  slow: 0.95,
  cinematic: 1.4,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: duration.medium, ease },
  },
}

export const stagger = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: duration.medium, ease },
  },
}

export const reducedPage = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
}
