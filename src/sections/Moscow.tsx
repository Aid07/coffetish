import { Link } from 'react-router-dom'
import { Reveal } from '../animations/Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { MoscowMap } from '../components/MoscowMap'

export function Moscow() {
  const { copy } = useLanguage()

  return (
    <section className="moscow-band">
      <Reveal className="wrap moscow-inner">
        <div>
          <p className="kicker">{copy.home.moscowKicker}</p>
          <h2 className="display">{copy.home.moscowTitle}</h2>
          <Link to="/locations" className="btn btn-secondary moscow-btn">
            {copy.cta.findUs}
          </Link>
        </div>
        <MoscowMap />
      </Reveal>
    </section>
  )
}
