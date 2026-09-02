import { createContext, useContext } from 'react'
import type { Lang } from '../types'
import { ui, type Ui } from '../i18n/ui'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  copy: Ui
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return value
}

export { ui }
