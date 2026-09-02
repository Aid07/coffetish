import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { useOrder } from '../hooks/useOrder'
import { useLockBody } from '../hooks/useLockBody'
import { duration, ease } from '../animations/variants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './MobileNav.css'

type MobileNavProps = {
  open: boolean
  onClose: () => void
  onSearch: () => void
}

const links = [
  { to: '/menu', key: 'menu' as const },
  { to: '/about', key: 'about' as const },
  { to: '/locations', key: 'locations' as const },
  { to: '/journal', key: 'journal' as const },
  { to: '/reviews', key: 'reviews' as const },
  { to: '/contacts', key: 'contacts' as const },
]

export function MobileNav({ open, onClose, onSearch }: MobileNavProps) {
  const { copy } = useLanguage()
  const { openOrder } = useOrder()
  const reduced = useReducedMotion()
  useLockBody(open)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-nav"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : duration.slow, ease }}
        >
          <nav aria-label="Mobile">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={reduced ? false : { y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.06, duration: duration.slow, ease }}
              >
                <NavLink to={link.to} className="mobile-link" onClick={onClose}>
                  {copy.nav[link.key]}
                </NavLink>
              </motion.div>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onClose()
                onSearch()
              }}
            >
              {copy.nav.search}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose()
                openOrder()
              }}
            >
              {copy.nav.order}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
