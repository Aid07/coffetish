import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollCompact } from '../hooks/useScrollCompact'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useOrder } from '../hooks/useOrder'
import './Header.css'

type HeaderProps = {
  onSearch: () => void
  onMenu: () => void
  menuOpen: boolean
}

const desktopLinks = [
  { to: '/menu', key: 'menu' as const },
  { to: '/about', key: 'about' as const },
  { to: '/locations', key: 'locations' as const },
  { to: '/journal', key: 'journal' as const },
]

export function Header({ onSearch, onMenu, menuOpen }: HeaderProps) {
  const { lang, setLang, copy } = useLanguage()
  const compact = useScrollCompact()
  const isMobile = useMediaQuery('(max-width: 860px)')
  const { openOrder } = useOrder()

  return (
    <header
      className={`site-header ${compact ? 'is-compact' : ''} ${isMobile ? 'is-mobile' : ''}`}
    >
      <div className="site-header-inner">
        <NavLink to="/" className="brand-link" aria-label={copy.a11y.logo}>
          <Logo variant={isMobile || compact ? 'mark' : 'primary'} />
          {(isMobile || compact) && <span className="brand-word">ТИШЬ</span>}
        </NavLink>

        {!isMobile && (
          <nav className="desktop-nav" aria-label="Primary">
            {desktopLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                {copy.nav[link.key]}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="header-actions">
          <button type="button" className="icon-btn" onClick={onSearch} aria-label={copy.nav.search}>
            <SearchIcon />
            {!isMobile && <span>{copy.nav.search}</span>}
          </button>
          <button type="button" className="btn btn-primary header-order" onClick={() => openOrder()}>
            {copy.nav.order}
          </button>
          <div className="lang-toggle" role="group" aria-label={copy.a11y.lang}>
            <button
              type="button"
              className={lang === 'ru' ? 'is-active' : ''}
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
            >
              RU
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          {isMobile && (
            <button
              type="button"
              className="icon-btn menu-toggle"
              onClick={onMenu}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            >
              <span className={`burger ${menuOpen ? 'is-open' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
