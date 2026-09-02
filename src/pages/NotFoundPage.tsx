import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { useLanguage } from '../hooks/useLanguage'

export function NotFoundPage() {
  const { lang, copy } = useLanguage()

  return (
    <article className="page-shell wrap empty-state">
      <PageMeta
        title={lang === 'ru' ? '404 — ТИШЬ' : '404 — TISH'}
        description={copy.notFound.text}
      />
      <p className="kicker">404</p>
      <h1 className="display">{copy.notFound.title}</h1>
      <p className="lead">{copy.notFound.text}</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          {copy.notFound.home}
        </Link>
        <Link to="/menu" className="btn btn-secondary">
          {copy.cta.viewMenu}
        </Link>
      </div>
    </article>
  )
}
