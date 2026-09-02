import { type FormEvent, useState } from 'react'
import { PageMeta } from '../components/PageMeta'
import { MoscowMap } from '../components/MoscowMap'
import { useLanguage } from '../hooks/useLanguage'
import { useOrder } from '../hooks/useOrder'
import { brand, t } from '../data/brand'
import { locations } from '../data/locations'
import './ContactsPage.css'

export function ContactsPage() {
  const { lang, copy } = useLanguage()
  const { openOrder } = useOrder()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <article className="page-shell">
      <PageMeta
        title={lang === 'ru' ? 'Контакты — ТИШЬ' : 'Contacts — TISH'}
        description={copy.contacts.lead}
      />
      <header className="wrap page-head">
        <p className="kicker">ТИШЬ</p>
        <h1 className="display">{copy.contacts.title}</h1>
        <p className="lead">{copy.contacts.lead}</p>
      </header>

      <div className="wrap contacts-grid">
        <section>
          <h2>{copy.nav.locations}</h2>
          {locations.map((spot) => (
            <address key={spot.id} className="contact-spot">
              <strong>{t(spot.name, lang)}</strong>
              <p className="loc-hours">{t(spot.hours, lang)}</p>
              <p className="loc-addr">{t(spot.address, lang)}</p>
              <p>
                <a href={`tel:${spot.phone.replace(/[^\d+]/g, '')}`}>{spot.phone}</a>
              </p>
            </address>
          ))}
          <p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
          <p>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}>{brand.phone}</a>
          </p>
        </section>

        <section>
          <h2>{copy.contacts.write}</h2>
          {sent ? (
            <p>{copy.contacts.sent}</p>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                {copy.contacts.name}
                <input name="name" required />
              </label>
              <label>
                {copy.contacts.email}
                <input type="email" name="email" required />
              </label>
              <label>
                {copy.contacts.message}
                <textarea name="message" rows={5} required />
              </label>
              <button type="submit" className="btn btn-primary">
                {copy.cta.send}
              </button>
            </form>
          )}
          <div className="contact-social">
            <h2>{copy.contacts.social}</h2>
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={brand.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={brand.vk} target="_blank" rel="noreferrer">
              VK
            </a>
          </div>
        </section>
      </div>

      <div className="wrap loc-map">
        <MoscowMap />
      </div>

      <section className="wrap final-cta">
        <h2 className="display">{copy.home.finalTitle}</h2>
        <p>{copy.home.finalText}</p>
        <button type="button" className="btn btn-primary" onClick={() => openOrder()}>
          {copy.cta.orderDrink}
        </button>
      </section>
    </article>
  )
}
