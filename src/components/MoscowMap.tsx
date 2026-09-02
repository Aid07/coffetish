import { useLanguage } from '../hooks/useLanguage'
import { locations } from '../data/locations'
import { t } from '../data/brand'
import './MoscowMap.css'

export function MoscowMap() {
  const { lang, copy } = useLanguage()

  return (
    <figure className="moscow-map">
      <svg viewBox="0 0 640 420" role="img" aria-label={copy.locationsPage.mapTitle}>
        <rect width="640" height="420" rx="36" fill="#f3eadc" />
        <path
          d="M80 90c70-40 160-30 230-10 90 24 150-20 250 20 40 16 50 70 30 120-30 74-10 120-80 160-90 52-180 20-270 8-70-10-140 30-190-20-40-40-30-90 8-140 20-28 8-80 22-138z"
          fill="#efe4d2"
          stroke="#3a2418"
          strokeWidth="1.2"
          strokeOpacity="0.25"
        />
        <path d="M120 180c80 20 90-40 180-20 70 16 120 10 200 40" fill="none" stroke="#c9b8de" strokeWidth="6" strokeLinecap="round" />
        <path d="M90 260c70-10 140 30 220 10 90-24 140 18 230-10" fill="none" stroke="#c9d7b8" strokeWidth="5" strokeLinecap="round" />
        <path d="M200 80c10 70 40 90 20 180  -10 50 40 80 90 110" fill="none" stroke="#f3e6a6" strokeWidth="4" strokeLinecap="round" />
        <circle cx="320" cy="210" r="18" fill="none" stroke="#3a2418" strokeWidth="1" strokeDasharray="3 4" />
        <text x="40" y="48" fill="#3a2418" fontFamily="Cormorant Garamond, serif" fontSize="28">
          {copy.locationsPage.mapTitle}
        </text>
        {locations.map((spot) => (
          <g key={spot.id} transform={`translate(${spot.mapX * 6.2} ${spot.mapY * 4.1})`}>
            <circle r="16" fill={spot.accent} stroke="#3a2418" strokeWidth="1.2" />
            <circle r="4" fill="#3a2418" />
            <text x="22" y="5" fill="#3a2418" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
              {t(spot.name, lang)}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
