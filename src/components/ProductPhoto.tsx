import { useState } from 'react'
import type { MenuItem } from '../types'
import { productImageSrc } from '../data/media'
import { t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'
import { DrinkVisual } from './DrinkVisual'
import './ProductPhoto.css'

type ProductPhotoProps = {
  item: MenuItem
  className?: string
  priority?: boolean
}

export function ProductPhoto({ item, className = '', priority = false }: ProductPhotoProps) {
  const { lang } = useLanguage()
  const [failed, setFailed] = useState(false)
  const src = productImageSrc(item.slug)
  const label = t(item.name, lang)

  if (failed) {
    return (
      <div className={`product-photo is-fallback ${className}`} style={{ background: item.palette.wash }}>
        <DrinkVisual palette={item.palette} steam={false} />
      </div>
    )
  }

  return (
    <figure className={`product-photo ${className}`}>
      <img
        src={src}
        alt={label}
        width={900}
        height={1200}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </figure>
  )
}
