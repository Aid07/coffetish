import type { KeyboardEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useDragScroll } from '../hooks/useDragScroll'
import { reviews } from '../data/reviews'
import { formatDate, t } from '../data/brand'
import './ReviewSlider.css'

export function ReviewSlider() {
  const { lang, copy } = useLanguage()
  const scroller = useDragScroll<HTMLDivElement>()

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollBy(1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollBy(-1)
    }
  }

  return (
    <div className="review-slider">
      <div className="review-toolbar">
        <p className="muted">{copy.reviewsPage.sliderHint}</p>
        <div>
          <button type="button" className="icon-btn" onClick={() => scrollBy(-1)} aria-label={copy.a11y.prev}>
            ←
          </button>
          <button type="button" className="icon-btn" onClick={() => scrollBy(1)} aria-label={copy.a11y.next}>
            →
          </button>
        </div>
      </div>
      <div
        className="review-track"
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label={copy.reviewsPage.title}
        onKeyDown={onKey}
      >
        {reviews.map((review) => (
          <article key={review.id} className="review-card" style={{ background: review.accent }}>
            <div className="review-top">
              <span className="avatar" aria-hidden="true">
                {review.initials}
              </span>
              <div>
                <strong>{t(review.name, lang)}</strong>
                <p>
                  {t(review.location, lang)} · {formatDate(review.date, lang)}
                </p>
              </div>
            </div>
            <p className="stars" aria-label={`${copy.a11y.rating}: ${review.rating} / 5`}>
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </p>
            <p>{t(review.text, lang)}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
