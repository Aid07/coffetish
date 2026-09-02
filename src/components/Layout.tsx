import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'
import { SearchOverlay } from './SearchOverlay'
import { OrderModal } from './OrderModal'
import { PageTransition } from '../animations/PageTransition'
import { useLanguage } from '../hooks/useLanguage'
import { useOrder } from '../hooks/useOrder'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './Layout.css'

export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { copy } = useLanguage()
  const { openOrder } = useOrder()
  const isMobile = useMediaQuery('(max-width: 860px)')
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#content">
        {copy.skip}
      </a>
      <Header
        onSearch={() => {
          setMenuOpen(false)
          setSearchOpen(true)
        }}
        onMenu={() => setMenuOpen((open) => !open)}
        menuOpen={menuOpen}
      />
      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSearch={() => setSearchOpen(true)}
      />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <OrderModal />
      <main id="content">
        <PageTransition />
      </main>
      <Footer />
      {isMobile && (
        <div className="mobile-cta">
          <button type="button" className="btn btn-primary" onClick={() => openOrder()}>
            {copy.nav.order}
          </button>
        </div>
      )}
    </>
  )
}
