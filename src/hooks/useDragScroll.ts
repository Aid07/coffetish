import { useEffect, useRef } from 'react'

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const down = (event: PointerEvent) => {
      isDown = true
      startX = event.pageX
      scrollLeft = node.scrollLeft
      node.setPointerCapture(event.pointerId)
    }
    const move = (event: PointerEvent) => {
      if (!isDown) return
      node.scrollLeft = scrollLeft - (event.pageX - startX)
    }
    const up = () => {
      isDown = false
    }

    node.addEventListener('pointerdown', down)
    node.addEventListener('pointermove', move)
    node.addEventListener('pointerup', up)
    node.addEventListener('pointercancel', up)
    return () => {
      node.removeEventListener('pointerdown', down)
      node.removeEventListener('pointermove', move)
      node.removeEventListener('pointerup', up)
      node.removeEventListener('pointercancel', up)
    }
  }, [])

  return ref
}
