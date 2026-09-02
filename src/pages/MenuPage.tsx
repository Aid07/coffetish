import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { PageMeta } from '../components/PageMeta'
import { ItemVisual } from '../components/ItemVisual'
import { useLanguage } from '../hooks/useLanguage'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { categoryLabel, categoryOrder, menuItems } from '../data/menu'
import { formatPrice, t } from '../data/brand'
import { pageTransition, reducedPage } from '../animations/variants'
import type { MenuCategory } from '../types'
import './MenuPage.css'

export function MenuPage() {
  const { lang, copy } = useLanguage()
  const reduced = useReducedMotion()
  const [filter, setFilter] = useState<MenuCategory | 'all'>('all')
  const variants = reduced ? reducedPage : pageTransition

  const visible = useMemo(
    () => (filter === 'all' ? menuItems : menuItems.filter((item) => item.category === filter)),
    [filter],
  )

  const groups = categoryOrder
    .map((category) => ({
      category,
      items: visible.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <article className="page-shell menu-page">
      <PageMeta
        title={lang === 'ru' ? 'Меню — ТИШЬ' : 'Menu — TISH'}
        description={
          lang === 'ru'
            ? 'Полное меню ТИШЬ: кофе, авторские напитки, матча, холодное, выпечка и завтраки в Москве.'
            : 'The full TISH menu: coffee, signature drinks, matcha, cold drinks, pastry and breakfast in Moscow.'
        }
      />
      <header className="wrap page-head">
        <p className="kicker">ТИШЬ</p>
        <h1 className="display">{copy.menu.title}</h1>
        <p className="lead">{copy.menu.lead}</p>
        <div className="filters" role="tablist" aria-label={copy.menu.title}>
          <button
            type="button"
            className={filter === 'all' ? 'is-on' : ''}
            onClick={() => setFilter('all')}
          >
            {copy.menu.filterAll}
          </button>
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? 'is-on' : ''}
              onClick={() => setFilter(category)}
            >
              {t(categoryLabel[category], lang)}
            </button>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="menu-flow"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
        >
          {groups.map((group) => (
            <section key={group.category} className="wrap menu-group">
              <h2>{t(categoryLabel[group.category], lang)}</h2>
              <div className="menu-grid">
                {group.items.map((item) => (
                  <Link key={item.id} to={`/menu/${item.slug}`} className="menu-item">
                    <div className="menu-thumb" style={{ background: item.palette.wash }}>
                      <ItemVisual item={item} />
                    </div>
                    <div className="menu-item-copy">
                      <h3>{t(item.name, lang)}</h3>
                      <p>{t(item.description, lang)}</p>
                      <p className="meta">
                        {t(item.volume, lang)} · {item.calories} {copy.menu.kcal}
                      </p>
                      <p className="price">{formatPrice(item.price, lang)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </article>
  )
}
