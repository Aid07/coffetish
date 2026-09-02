import { PageMeta } from '../components/PageMeta'
import { ReviewSlider } from '../components/ReviewSlider'
import { useLanguage } from '../hooks/useLanguage'
import './ReviewsPage.css'

export function ReviewsPage() {
  const { lang, copy } = useLanguage()

  return (
    <article className="page-shell">
      <PageMeta
        title={lang === 'ru' ? 'Отзывы — ТИШЬ' : 'Reviews — TISH'}
        description={copy.reviewsPage.lead}
      />
      <header className="wrap page-head">
        <p className="kicker">ТИШЬ</p>
        <h1 className="display">{copy.reviewsPage.title}</h1>
        <p className="lead">{copy.reviewsPage.lead}</p>
      </header>
      <div className="wrap">
        <ReviewSlider />
      </div>
    </article>
  )
}
