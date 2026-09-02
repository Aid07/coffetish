import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { searchAll } from '../data/search'
import { t } from '../data/brand'
import { useLanguage } from '../hooks/useLanguage'
import { useLockBody } from '../hooks/useLockBody'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { duration, ease } from '../animations/variants'
import './SearchOverlay.css'

type SearchOverlayProps = {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const { lang, copy } = useLanguage()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  useLockBody(open)

  const results = useMemo(() => searchAll(query), [query])

  useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const grouped = {
    drink: results.filter((item) => item.kind === 'drink' || item.kind === 'food'),
    article: results.filter((item) => item.kind === 'article'),
    location: results.filter((item) => item.kind === 'location'),
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : duration.medium, ease }}
        >
          <button type="button" className="search-backdrop" onClick={onClose} aria-label={copy.nav.close} />
          <motion.div
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            initial={reduced ? false : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : duration.slow, ease }}
          >
            <div className="search-head">
              <h2 id="search-title">{copy.search.title}</h2>
              <button type="button" className="icon-btn" onClick={onClose}>
                {copy.nav.close}
              </button>
            </div>
            <label className="search-field">
              <span className="sr-only">{copy.search.placeholder}</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.search.placeholder}
              />
            </label>
            <p className="search-hint">{copy.search.hint}</p>

            {query && results.length === 0 && (
              <div className="empty-state">
                <h3>{copy.search.empty}</h3>
              </div>
            )}

            {grouped.drink.length > 0 && (
              <section>
                <h3>{copy.search.drinks}</h3>
                {grouped.drink.map((hit) => (
                  <button
                    key={hit.id}
                    type="button"
                    className="search-hit"
                    onClick={() => {
                      navigate(hit.to)
                      onClose()
                    }}
                  >
                    <strong>{t(hit.title, lang)}</strong>
                    <span>{t(hit.subtitle, lang)}</span>
                  </button>
                ))}
              </section>
            )}
            {grouped.article.length > 0 && (
              <section>
                <h3>{copy.search.articles}</h3>
                {grouped.article.map((hit) => (
                  <button
                    key={hit.id}
                    type="button"
                    className="search-hit"
                    onClick={() => {
                      navigate(hit.to)
                      onClose()
                    }}
                  >
                    <strong>{t(hit.title, lang)}</strong>
                    <span>{t(hit.subtitle, lang)}</span>
                  </button>
                ))}
              </section>
            )}
            {grouped.location.length > 0 && (
              <section>
                <h3>{copy.search.locations}</h3>
                {grouped.location.map((hit) => (
                  <button
                    key={hit.id}
                    type="button"
                    className="search-hit"
                    onClick={() => {
                      navigate(hit.to)
                      onClose()
                    }}
                  >
                    <strong>{t(hit.title, lang)}</strong>
                    <span>{t(hit.subtitle, lang)}</span>
                  </button>
                ))}
              </section>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
