import type { MenuItem } from '../types'
import { ProductPhoto } from './ProductPhoto'

type ItemVisualProps = {
  item: MenuItem
  className?: string
  priority?: boolean
}

export function ItemVisual({ item, className, priority }: ItemVisualProps) {
  return <ProductPhoto item={item} className={className} priority={priority} />
}
