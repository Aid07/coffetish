import { Link } from 'react-router-dom'
import { Reveal } from '../animations/Reveal'
import { locations } from '../data/locations'
import { t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'

export function HomeLocations() {
  const { lang, copy } = useLanguage()

  return (
    <section className="home-locations wrap">
      <div className="signatures-head">
        <p className="kicker">{copy.home.locationsKicker}</p>
        <h2 className="display">{copy.nav.locations}</h2>
      </div>
      <div className="loc-mosaic">
        {locations.map((spot, index) => (
          <Reveal key={spot.id} className={`loc-tile tile-${index}`} delay={index * 0.05}>
            <article style={{ background: spot.accent }}>
              <h3>{t(spot.name, lang)}</h3>
              <p className="loc-hours">{t(spot.hours, lang)}</p>
              <p className="loc-addr">{t(spot.address, lang)}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Link to="/locations" className="btn btn-secondary">
        {copy.cta.allLocations}
      </Link>
    </section>
  )
}
