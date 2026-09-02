import { useEffect, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { MenuItem } from '../types'
import { ItemVisual } from './ItemVisual'
import { useLanguage } from '../hooks/useLanguage'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { t } from '../data/brand'
import { ease } from '../animations/variants'
import './DrinkPrep.css'

type DrinkPrepProps = {
  item: MenuItem
  onOrder: () => void
}

export function DrinkPrep({ item, onOrder }: DrinkPrepProps) {
  const { lang, copy } = useLanguage()
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!open) {
      setPhase(0)
      return
    }
    if (reduced) {
      setPhase(5)
      return
    }
    setPhase(1)
    const timer = window.setTimeout(() => setPhase(5), 320)
    return () => window.clearTimeout(timer)
  }, [open, reduced])

  return (
    <div className={`drink-prep ${open ? 'is-open' : ''}`} style={{ '--wash': item.palette.wash } as CSSProperties}>
      <div className="prep-visual">
        <span className="prep-blob" />
        <motion.div
          animate={reduced ? undefined : { y: open ? -8 : 0, scale: open ? 1.04 : 1 }}
          transition={{ duration: 0.58, ease }}
        >
          <ItemVisual item={item} className="prep-cup" priority />
        </motion.div>

        <AnimatePresence>
          {open && phase >= 5 &&
            item.ingredients.map((ingredient, index) => (
              <motion.span
                key={t(ingredient, lang)}
                className={`prep-label prep-label-${index}`}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease }}
              >
                {t(ingredient, lang)}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>

      <div className="prep-copy">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? copy.cta.hideIngredients : copy.cta.viewIngredients}
        </button>

        <AnimatePresence>
          {open && phase >= 5 && (
            <motion.dl
              className="prep-nutrition"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.52, ease }}
            >
              <div>
                <dt>{copy.drink.volume}</dt>
                <dd>{t(item.volume, lang)}</dd>
              </div>
              <div>
                <dt>{copy.drink.calories}</dt>
                <dd>
                  {item.calories} {copy.menu.kcal}
                </dd>
              </div>
              <div>
                <dt>{copy.drink.composition}</dt>
                <dd>{item.ingredients.map((ingredient) => t(ingredient, lang)).join(' · ')}</dd>
              </div>
            </motion.dl>
          )}
        </AnimatePresence>

        <button type="button" className="btn btn-primary" onClick={onOrder}>
          {copy.cta.orderDrink}
        </button>
      </div>
    </div>
  )
}
