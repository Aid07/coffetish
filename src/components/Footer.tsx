import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useLanguage } from '../hooks/useLanguage'
import { brand, t } from '../data/brand'
import { locations } from '../data/locations'
import './Footer.css'

export function Footer() {
  const { lang, copy } = useLanguage()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [legal, setLegal] = useState<'privacy' | 'offer' | null>(null)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{t(brand.statement, lang)}</p>
          <p className="muted">{copy.footer.statement}</p>
        </div>

        <nav aria-label="Footer">
          <h2>ТИШЬ</h2>
          <Link to="/menu">{copy.nav.menu}</Link>
          <Link to="/about">{copy.nav.about}</Link>
          <Link to="/journal">{copy.nav.journal}</Link>
          <Link to="/reviews">{copy.nav.reviews}</Link>
          <Link to="/contacts">{copy.nav.contacts}</Link>
        </nav>

        <div>
          <h2>{copy.nav.locations}</h2>
          {locations.map((item) => (
            <Link key={item.id} to="/locations">
              {t(item.name, lang)}
              <span>{t(item.address, lang)}</span>
            </Link>
          ))}
        </div>

        <div>
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
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}>{brand.phone}</a>
        </div>

        <form className="footer-news" onSubmit={onSubmit}>
          <h2>{copy.footer.newsletter}</h2>
          {done ? (
            <p className="news-done">{copy.footer.subscribed}</p>
          ) : (
            <div className="news-row">
              <label className="sr-only" htmlFor="news-email">
                {copy.footer.emailPlaceholder}
              </label>
              <input
                id="news-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.footer.emailPlaceholder}
              />
              <button type="submit" className="btn btn-primary">
                {copy.cta.subscribe}
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="wrap footer-bottom">
        <p>{copy.footer.legal}</p>
        <div>
          <button type="button" onClick={() => setLegal('privacy')}>
            {copy.footer.privacy}
          </button>
          <button type="button" onClick={() => setLegal('offer')}>
            {copy.footer.offer}
          </button>
        </div>
      </div>

      {legal && (
        <div className="legal-overlay" role="dialog" aria-modal="true">
          <div className="legal-card">
            <h2>{legal === 'privacy' ? copy.footer.privacy : copy.footer.offer}</h2>
            {legal === 'privacy' ? (
              <p>
                {lang === 'ru'
                  ? 'ТИШЬ собирает только то, что вы сами присылаете: имя, почту и текст письма. Мы не продаём данные и не следим за вами по городу. Заказы живут на смене бара и не уходят в рекламные сети.'
                  : 'TISH collects only what you send: a name, an email, a message. We do not sell data and we do not follow you around the city. Orders live on the bar shift and do not leave for ad networks.'}
              </p>
            ) : (
              <p>
                {lang === 'ru'
                  ? 'Заказ на сайте — заявка на самовывоз. Оплата на стойке. Напиток готовим после подтверждения бариста. Если лот закончился, предложим соседний вкус или вернём предоплату, если вы уже заплатили в кафе.'
                  : 'An order on the site is a pickup request. Pay at the bar. We brew after the barista confirms. If a lot has run out, we will offer a neighbour flavour or refund a café prepayment if you already paid.'}
              </p>
            )}
            <button type="button" className="btn btn-secondary" onClick={() => setLegal(null)}>
              {copy.cta.close}
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
