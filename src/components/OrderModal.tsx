import { useMemo, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOrder } from '../hooks/useOrder'
import { useLanguage } from '../hooks/useLanguage'
import { useLockBody } from '../hooks/useLockBody'
import { locations } from '../data/locations'
import { drinks } from '../data/drinks'
import { menuItems } from '../data/menu'
import { formatPrice, t } from '../data/brand'
import { duration, ease } from '../animations/variants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ItemVisual } from './ItemVisual'
import './OrderModal.css'

export function OrderModal() {
  const { order, closeOrder, setStep, setLocationId, setItemId, setQuantity, setGuestName, confirm, reset } =
    useOrder()
  const { lang, copy } = useLanguage()
  const reduced = useReducedMotion()
  useLockBody(order.open)

  const location = locations.find((item) => item.id === order.locationId)
  const item = menuItems.find((entry) => entry.id === order.itemId)
  const total = item ? item.price * order.quantity : 0

  const canNext = useMemo(() => {
    if (order.step === 'location') return Boolean(order.locationId)
    if (order.step === 'item') return Boolean(order.itemId)
    if (order.step === 'summary') return order.guestName.trim().length > 1
    return false
  }, [order])

  const goNext = () => {
    if (order.step === 'location') setStep('item')
    else if (order.step === 'item') setStep('summary')
    else if (order.step === 'summary') confirm()
  }

  const goBack = () => {
    if (order.step === 'item') setStep('location')
    else if (order.step === 'summary') setStep('item')
  }

  return (
    <AnimatePresence>
      {order.open && (
        <motion.div
          className="order-overlay"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : duration.medium, ease }}
        >
          <button type="button" className="order-backdrop" aria-label={copy.cta.close} onClick={closeOrder} />
          <motion.div
            className="order-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-title"
            initial={reduced ? false : { y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : duration.slow, ease }}
          >
            <div className="order-head">
              <h2 id="order-title">{copy.order.title}</h2>
              <button type="button" className="icon-btn" onClick={closeOrder}>
                {copy.cta.close}
              </button>
            </div>

            {order.step !== 'done' && (
              <ol className="order-steps">
                <li className={order.step === 'location' ? 'is-current' : ''}>{copy.order.chooseLocation}</li>
                <li className={order.step === 'item' ? 'is-current' : ''}>{copy.order.chooseDrink}</li>
                <li className={order.step === 'summary' ? 'is-current' : ''}>{copy.order.summary}</li>
              </ol>
            )}

            {order.step === 'location' && (
              <div className="order-grid">
                {locations.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    className={`order-choice ${order.locationId === spot.id ? 'is-selected' : ''}`}
                    onClick={() => setLocationId(spot.id)}
                    style={{ '--spot': spot.accent } as CSSProperties}
                  >
                    <strong>{t(spot.name, lang)}</strong>
                    <em>{t(spot.hours, lang)}</em>
                    <span>{t(spot.address, lang)}</span>
                  </button>
                ))}
              </div>
            )}

            {order.step === 'item' && (
              <div className="order-drinks">
                {drinks.map((drink) => (
                  <button
                    key={drink.id}
                    type="button"
                    className={`order-drink ${order.itemId === drink.id ? 'is-selected' : ''}`}
                    onClick={() => setItemId(drink.id)}
                  >
                    <ItemVisual item={drink} className="mini-cup" />
                    <span>
                      <strong>{t(drink.name, lang)}</strong>
                      <em>{formatPrice(drink.price, lang)}</em>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {order.step === 'summary' && item && location && (
              <div className="order-summary">
                <div className="summary-visual" style={{ background: item.palette.wash }}>
                  <ItemVisual item={item} />
                </div>
                <div>
                  <p className="kicker">{copy.order.pickup}</p>
                  <h3>{t(item.name, lang)}</h3>
                  <p>
                    {t(location.name, lang)} · {t(location.address, lang)}
                  </p>
                  <label className="qty">
                    {copy.order.quantity}
                    <span>
                      <button type="button" onClick={() => setQuantity(order.quantity - 1)} aria-label="-">
                        −
                      </button>
                      <strong>{order.quantity}</strong>
                      <button type="button" onClick={() => setQuantity(order.quantity + 1)} aria-label="+">
                        +
                      </button>
                    </span>
                  </label>
                  <label>
                    {copy.order.nameLabel}
                    <input
                      value={order.guestName}
                      onChange={(event) => setGuestName(event.target.value)}
                      placeholder={copy.order.namePlaceholder}
                    />
                  </label>
                  <p className="summary-total">
                    {copy.order.total}: {formatPrice(total, lang)}
                  </p>
                </div>
              </div>
            )}

            {order.step === 'done' && (
              <div className="order-done">
                <h3>{copy.order.doneTitle}</h3>
                <p>{copy.order.doneText}</p>
                {item && location && (
                  <p className="muted">
                    {order.guestName} · {t(item.name, lang)} × {order.quantity} · {t(location.name, lang)} ·{' '}
                    {formatPrice(total, lang)}
                  </p>
                )}
              </div>
            )}

            <div className="order-actions">
              {order.step !== 'location' && order.step !== 'done' && (
                <button type="button" className="btn btn-secondary" onClick={goBack}>
                  {copy.cta.back}
                </button>
              )}
              {order.step !== 'done' ? (
                <button type="button" className="btn btn-primary" disabled={!canNext} onClick={goNext}>
                  {order.step === 'summary' ? copy.cta.confirm : copy.cta.next}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    reset()
                  }}
                >
                  {copy.cta.newOrder}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
