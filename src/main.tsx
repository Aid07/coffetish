import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { OrderProvider } from './context/OrderContext'
import App from './App.tsx'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <LanguageProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </LanguageProvider>
    </HashRouter>
  </StrictMode>,
)
