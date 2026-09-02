import { Link } from 'react-router-dom'
import { Reveal } from '../animations/Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { useOrder } from '../hooks/useOrder'

export function FinalCta() {
  const { copy } = useLanguage()
  const { openOrder } = useOrder()

  return (
    <section className="final-cta wrap">
      <Reveal>
        <h2 className="display">{copy.home.finalTitle}</h2>
        <p>{copy.home.finalText}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => openOrder()}>
            {copy.cta.orderDrink}
          </button>
          <Link to="/contacts" className="btn btn-secondary">
            {copy.nav.contacts}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
