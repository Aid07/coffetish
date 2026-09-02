import { useEffect } from 'react'

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.classList.add('is-locked')
    return () => {
      document.body.classList.remove('is-locked')
      document.body.style.overflow = previous
    }
  }, [locked])
}
