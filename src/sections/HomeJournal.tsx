import { Link } from 'react-router-dom'
import { Reveal } from '../animations/Reveal'
import { articles } from '../data/articles'
import { t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'

export function HomeJournal() {
  const { lang, copy } = useLanguage()
  const [featured, ...rest] = articles

  return (
    <section className="home-journal wrap">
      <p className="kicker">{copy.home.journalKicker}</p>
      <h2 className="display">{copy.home.journalTitle}</h2>
      <div className="journal-split">
        <Reveal className="journal-featured">
          <article style={{ background: featured.cover.wash }}>
            <p>{featured.date}</p>
            <h3 className="display">{t(featured.title, lang)}</h3>
            <p>{t(featured.excerpt, lang)}</p>
            <Link to={`/journal/${featured.slug}`} className="btn btn-primary">
              {copy.cta.read}
            </Link>
          </article>
        </Reveal>
        <ul className="journal-index">
          {rest.map((article) => (
            <li key={article.id}>
              <Link to={`/journal/${article.slug}`}>
                <span>{article.date}</span>
                <strong>{t(article.title, lang)}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
