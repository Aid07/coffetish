import { Link } from 'react-router-dom'
import { Reveal } from '../animations/Reveal'
import { ItemVisual } from '../components/ItemVisual'
import { signatureDrinks } from '../data/drinks'
import { formatPrice, t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'

export function SignatureDrinks() {
  const { lang, copy } = useLanguage()

  return (
    <section className="signatures">
      <div className="wrap signatures-head">
        <p className="kicker">{copy.home.signatureKicker}</p>
        <h2 className="display">{copy.home.signatureTitle}</h2>
      </div>
      <div className="signature-list">
        {signatureDrinks.map((drink, index) => (
          <Reveal key={drink.id} className={`signature-row ${index % 2 ? 'is-flip' : ''}`}>
            <div className="signature-visual" style={{ background: drink.palette.wash }}>
              <ItemVisual item={drink} />
            </div>
            <div className="signature-copy">
              <h3 className="display">{t(drink.name, lang)}</h3>
              <p>{t(drink.description, lang)}</p>
              <p className="price">{formatPrice(drink.price, lang)}</p>
              <Link to={`/menu/${drink.slug}`} className="btn btn-secondary">
                {copy.cta.viewIngredients}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
