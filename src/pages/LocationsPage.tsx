import { PageMeta } from '../components/PageMeta'
import { MoscowMap } from '../components/MoscowMap'
import { useLanguage } from '../hooks/useLanguage'
import { locations } from '../data/locations'
import { t } from '../data/brand'
import './LocationsPage.css'

export function LocationsPage() {
  const { lang, copy } = useLanguage()

  return (
    <article className="page-shell">
      <PageMeta
        title={lang === 'ru' ? 'Адреса — ТИШЬ' : 'Locations — TISH'}
        description={copy.locationsPage.lead}
      />
      <header className="wrap page-head">
        <p className="kicker">Москва</p>
        <h1 className="display">{copy.locationsPage.title}</h1>
        <p className="lead">{copy.locationsPage.lead}</p>
      </header>
      <div className="wrap loc-map">
        <MoscowMap />
      </div>
      <div className="wrap loc-list">
        {locations.map((spot) => (
          <article key={spot.id} className="loc-full" style={{ background: spot.accent }}>
            <h2>{t(spot.name, lang)}</h2>
            <p className="loc-hours">
              <span>{copy.locationsPage.hours}</span>
              {t(spot.hours, lang)}
            </p>
            <p className="loc-addr">{t(spot.address, lang)}</p>
            <p className="loc-hood">{t(spot.neighborhood, lang)}</p>
            <p className="loc-desc">{t(spot.description, lang)}</p>
            <address>
              <p>
                {copy.locationsPage.phone}:{' '}
                <a href={`tel:${spot.phone.replace(/[^\d+]/g, '')}`}>{spot.phone}</a>
              </p>
              <p>
                <a href={`mailto:${spot.email}`}>{spot.email}</a>
              </p>
            </address>
            <p className="loc-note">{t(spot.note, lang)}</p>
          </article>
        ))}
      </div>
    </article>
  )
}
