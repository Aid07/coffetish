import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { DrinkPrep } from '../components/DrinkPrep'
import { ItemVisual } from '../components/ItemVisual'
import { useLanguage } from '../hooks/useLanguage'
import { useOrder } from '../hooks/useOrder'
import { getMenuItemBySlug } from '../data/menu'
import { getRecommended } from '../data/drinks'
import { formatPrice, t } from '../data/brand'
import { categoryLabel } from '../data/menu'
import './DrinkPage.css'

export function DrinkPage() {
  const { drink } = useParams()
  const { lang, copy } = useLanguage()
  const { openOrder } = useOrder()
  const item = drink ? getMenuItemBySlug(drink) : undefined

  if (!item) {
    return (
      <article className="page-shell wrap empty-state">
        <PageMeta
          title={lang === 'ru' ? 'Напиток не найден — ТИШЬ' : 'Drink not found — TISH'}
          description={copy.drink.missingText}
        />
        <h1 className="display">{copy.drink.missingTitle}</h1>
        <p>{copy.drink.missingText}</p>
        <Link to="/menu" className="btn btn-primary">
          {copy.cta.backToMenu}
        </Link>
      </article>
    )
  }

  const recommended = getRecommended(item.slug)

  return (
    <article className="page-shell drink-page">
      <PageMeta
        title={`${t(item.name, lang)} — ТИШЬ`}
        description={t(item.description, lang)}
      />
      <div className="wrap drink-layout">
        <p className="kicker">{t(categoryLabel[item.category], lang)}</p>
        <h1 className="display">{t(item.name, lang)}</h1>
        <p className="lead">{t(item.description, lang)}</p>
        <p className="price drink-price">{formatPrice(item.price, lang)}</p>
        <DrinkPrep item={item} onOrder={() => openOrder(item.id)} />
        <Link to="/menu" className="back-link">
          {copy.cta.backToMenu}
        </Link>
        {recommended.length > 0 && (
          <section className="recommended">
            <h2>{copy.cta.recommended}</h2>
            <div className="rec-grid">
              {recommended.map((rec) => (
                <Link key={rec.id} to={`/menu/${rec.slug}`} className="rec-card">
                  <div style={{ background: rec.palette.wash }}>
                    <ItemVisual item={rec} />
                  </div>
                  <h3>{t(rec.name, lang)}</h3>
                  <p className="price">{formatPrice(rec.price, lang)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
