import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { DrinkPage } from './pages/DrinkPage'
import { AboutPage } from './pages/AboutPage'
import { LocationsPage } from './pages/LocationsPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { JournalPage } from './pages/JournalPage'
import { ArticlePage } from './pages/ArticlePage'
import { ContactsPage } from './pages/ContactsPage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="menu/:drink" element={<DrinkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="journal/:article" element={<ArticlePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
