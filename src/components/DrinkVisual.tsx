import { useId } from 'react'
import type { DrinkPalette } from '../types'

type DrinkVisualProps = {
  palette: DrinkPalette
  className?: string
  layers?: {
    espresso?: number
    milk?: number
    syrup?: number
    foam?: number
  }
  steam?: boolean
}

export function DrinkVisual({
  palette,
  className,
  layers = { espresso: 1, milk: 1, syrup: 1, foam: 1 },
  steam = true,
}: DrinkVisualProps) {
  const uid = useId().replace(/:/g, '')
  const clip = `cup-clip-${uid}`
  const glass = `glass-${uid}`
  const espresso = layers.espresso ?? 1
  const milk = layers.milk ?? 1
  const syrup = layers.syrup ?? 1
  const foam = layers.foam ?? 1

  return (
    <svg viewBox="0 0 280 340" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <path d="M78 92h124c6 0 12 6 12 14v96c0 48-32 78-74 78s-74-30-74-78V106c0-8 6-14 12-14z" />
        </clipPath>
        <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <ellipse cx="140" cy="292" rx="70" ry="12" fill={palette.espresso} opacity="0.12" />
      <path
        d="M70 88h140c10 0 18 8 18 18v100c0 58-38 92-88 92s-88-34-88-92V106c0-10 8-18 18-18z"
        fill={palette.cup}
        stroke="#3a2418"
        strokeWidth="2"
      />
      <g clipPath={`url(#${clip})`}>
        <g className="drink-layer" style={{ opacity: espresso }}>
          <rect x="70" y="210" width="150" height="90" fill={palette.espresso} />
        </g>
        <g className="drink-layer" style={{ opacity: milk }}>
          <rect x="70" y="150" width="150" height="90" fill={palette.milk} />
        </g>
        <g className="drink-layer" style={{ opacity: syrup }}>
          <path
            d="M70 148c30 18 50-10 80 8 28 16 40-6 70 10v80H70z"
            fill={palette.syrup}
            opacity="0.45"
          />
        </g>
        <g className="drink-layer" style={{ opacity: foam }}>
          <path
            d="M70 118c20-16 40 10 70-4 32-16 44 8 80-6v50H70z"
            fill={palette.foam}
          />
        </g>
      </g>
      <path
        d="M214 120c28 8 42 28 38 54-4 24-24 38-50 40"
        fill="none"
        stroke="#3a2418"
        strokeWidth="2"
      />
      <ellipse cx="140" cy="90" rx="72" ry="16" fill={palette.foam} stroke="#3a2418" strokeWidth="2" />
      <ellipse cx="140" cy="86" rx="48" ry="8" fill={palette.accent} opacity="0.35" />
      <path d={`M92 100l8 150M188 102l-6 148`} stroke={`url(#${glass})`} strokeWidth="6" opacity="0.4" />
      {steam ? (
        <g fill="none" stroke={palette.accent} strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
          <path d="M118 52c6-14 2-22-2-32" />
          <path d="M140 46c4-12 8-20 2-34" />
          <path d="M162 52c-2-12 6-22 4-34" />
        </g>
      ) : null}
    </svg>
  )
}
