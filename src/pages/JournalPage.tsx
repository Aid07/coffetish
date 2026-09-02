import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { articles } from '../data/articles'
import { t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'
import './JournalPage.css'

export function JournalPage() {
  const { lang, copy } = useLanguage()

  return (
    <article className="page-shell">
      <PageMeta
        title={lang === 'ru' ? 'Журнал — ТИШЬ' : 'Journal — TISH'}
        description={copy.journal.lead}
      />
      <header className="wrap page-head">
        <p className="kicker">Journal</p>
        <h1 className="display">{copy.journal.title}</h1>
        <p className="lead">{copy.journal.lead}</p>
      </header>
      <div className="wrap journal-list">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            to={`/journal/${article.slug}`}
            className={`journal-row ${index === 0 ? 'is-lead' : ''}`}
            style={{ background: article.cover.wash }}
          >
            <span>
              {article.date} · {article.readMinutes} {copy.journal.minutes}
            </span>
            <h2 className="display">{t(article.title, lang)}</h2>
            <p>{t(article.excerpt, lang)}</p>
          </Link>
        ))}
      </div>
    </article>
  )
}
