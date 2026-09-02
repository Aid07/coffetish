export type Lang = 'ru' | 'en'

export type Localized = {
  ru: string
  en: string
}

export type MenuCategory =
  | 'coffee'
  | 'signature'
  | 'matcha'
  | 'cold'
  | 'pastry'
  | 'dessert'
  | 'sandwich'
  | 'breakfast'

export type DrinkPalette = {
  cup: string
  espresso: string
  milk: string
  syrup: string
  foam: string
  accent: string
  wash: string
}

export type MenuItem = {
  id: string
  slug: string
  category: MenuCategory
  name: Localized
  description: Localized
  price: number
  ingredients: Localized[]
  volume: Localized
  calories: number
  featured?: boolean
  palette: DrinkPalette
  tags?: Localized[]
}

export type LocationItem = {
  id: string
  slug: string
  name: Localized
  neighborhood: Localized
  address: Localized
  hours: Localized
  hoursWeekday: string
  hoursWeekend: string
  phone: string
  email: string
  description: Localized
  note: Localized
  mapX: number
  mapY: number
  accent: string
}

export type Review = {
  id: string
  name: Localized
  initials: string
  rating: number
  date: string
  text: Localized
  location: Localized
  accent: string
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; caption?: string }
  | { type: 'list'; items: string[] }

export type Article = {
  id: string
  slug: string
  title: Localized
  excerpt: Localized
  date: string
  readMinutes: number
  author: Localized
  cover: {
    wash: string
    accent: string
    motif: 'bean' | 'cup' | 'leaf' | 'steam' | 'city' | 'season'
  }
  content: {
    ru: ArticleBlock[]
    en: ArticleBlock[]
  }
}

export type SearchKind = 'drink' | 'food' | 'article' | 'location'

export type SearchHit = {
  id: string
  kind: SearchKind
  title: Localized
  subtitle: Localized
  to: string
}

export type OrderStep = 'location' | 'item' | 'summary' | 'done'
