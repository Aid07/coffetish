import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getArticleBySlug, getRelatedArticles } from '../data/articles'
import { formatDate, t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'
import type { ArticleBlock } from '../types'
import './ArticlePage.css'

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'quote') {
    return (
      <blockquote>
        <p>{block.text}</p>
        {block.caption ? <cite>{block.caption}</cite> : null}
      </blockquote>
    )
  }
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p>{block.text}</p>
}

export function ArticlePage() {
  const { article } = useParams()
  const { lang, copy } = useLanguage()
  const story = article ? getArticleBySlug(article) : undefined

  if (!story) {
    return (
      <article className="page-shell wrap empty-state">
        <PageMeta
          title={lang === 'ru' ? 'Статья не найдена — ТИШЬ' : 'Article not found — TISH'}
          description={copy.journal.missingText}
        />
        <h1 className="display">{copy.journal.missingTitle}</h1>
        <p>{copy.journal.missingText}</p>
        <Link to="/journal" className="btn btn-primary">
          {copy.cta.backToJournal}
        </Link>
      </article>
    )
  }

  const related = getRelatedArticles(story.slug)

  return (
    <article className="page-shell article-page">
      <PageMeta title={`${t(story.title, lang)} — ТИШЬ`} description={t(story.excerpt, lang)} />
      <header className="article-cover" style={{ background: story.cover.wash }}>
        <div className="wrap">
          <p className="kicker">
            {formatDate(story.date, lang)} · {story.readMinutes} {copy.journal.minutes}
          </p>
          <h1 className="display">{t(story.title, lang)}</h1>
          <p className="lead">{t(story.excerpt, lang)}</p>
          <p className="byline">{t(story.author, lang)}</p>
        </div>
      </header>
      <div className="wrap article-body">
        {story.content[lang].map((block, index) => (
          <Block key={`${block.type}-${index}`} block={block} />
        ))}
        <Link to="/journal" className="back-link">
          {copy.cta.backToJournal}
        </Link>
        <aside className="related">
          {related.map((item) => (
            <Link key={item.id} to={`/journal/${item.slug}`}>
              {t(item.title, lang)}
            </Link>
          ))}
        </aside>
      </div>
    </article>
  )
}
