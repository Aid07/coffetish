import { useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { LanguageContext } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

const STORAGE_KEY = 'tish-lang'

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ru') return stored
  } catch {
    /* ignore */
  }
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')

  useEffect(() => {
    setLangState(readLang())
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, copy: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
