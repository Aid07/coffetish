import type { SearchHit } from '../types'
import { menuItems } from './menu'
import { articles } from './articles'
import { locations } from './locations'

function matches(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle)
}

export function searchAll(query: string): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 1) return []

  const drinkHits: SearchHit[] = menuItems
    .filter(
      (item) =>
        matches(item.name.ru, q) ||
        matches(item.name.en, q) ||
        matches(item.description.ru, q) ||
        matches(item.description.en, q) ||
        matches(item.slug, q) ||
        item.ingredients.some((ing) => matches(ing.ru, q) || matches(ing.en, q)),
    )
    .map((item) => ({
      id: item.id,
      kind: item.category === 'coffee' || item.category === 'signature' || item.category === 'matcha' || item.category === 'cold' ? 'drink' : 'food',
      title: item.name,
      subtitle: item.description,
      to: `/menu/${item.slug}`,
    }))

  const articleHits: SearchHit[] = articles
    .filter(
      (item) =>
        matches(item.title.ru, q) ||
        matches(item.title.en, q) ||
        matches(item.excerpt.ru, q) ||
        matches(item.excerpt.en, q) ||
        matches(item.slug, q),
    )
    .map((item) => ({
      id: item.id,
      kind: 'article',
      title: item.title,
      subtitle: item.excerpt,
      to: `/journal/${item.slug}`,
    }))

  const locationHits: SearchHit[] = locations
    .filter(
      (item) =>
        matches(item.name.ru, q) ||
        matches(item.name.en, q) ||
        matches(item.address.ru, q) ||
        matches(item.address.en, q) ||
        matches(item.neighborhood.ru, q) ||
        matches(item.neighborhood.en, q) ||
        matches(item.slug, q),
    )
    .map((item) => ({
      id: item.id,
      kind: 'location',
      title: item.name,
      subtitle: item.address,
      to: '/locations',
    }))

  return [...drinkHits, ...articleHits, ...locationHits]
}
