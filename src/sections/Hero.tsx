import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useOrder } from '../hooks/useOrder'
import { brand, t } from '../data/brand'
import { getDrinkBySlug } from '../data/drinks'
import { ItemVisual } from '../components/ItemVisual'
import { duration, ease } from '../animations/variants'
import './home.css'

export function Hero() {
  const { lang, copy } = useLanguage()
  const reduced = useReducedMotion()
  const { openOrder } = useOrder()
  const drink = getDrinkBySlug('lavender-latte')
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 70])

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="kicker">{copy.home.kicker}</p>
        <motion.h1
          className="display hero-title"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.cinematic, ease }}
        >
          {t(brand.slogan, lang)}
        </motion.h1>
        <p className="hero-lead">{t(brand.philosophy, lang)}</p>
        <div className="hero-actions">
          <Link to="/menu" className="btn btn-primary hero-cta">
            {copy.cta.viewMenu}
          </Link>
          <button type="button" className="btn btn-sun hero-cta" onClick={() => openOrder('lavender-latte')}>
            {copy.cta.orderDrink}
          </button>
        </div>
      </div>
      <motion.div className="hero-visual" style={{ y }}>
        <span className="blob hero-blob-a" />
        <span className="blob hero-blob-b" />
        {drink && (
          <ItemVisual item={drink} className="hero-cup" priority />
        )}
        <p className="hero-drink-name">{copy.home.heroDrink}</p>
      </motion.div>
    </section>
  )
}
