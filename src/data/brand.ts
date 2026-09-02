import type { Localized } from '../types'

export const brand = {
  name: 'ТИШЬ',
  nameLatin: 'TISH',
  city: { ru: 'Москва', en: 'Moscow' } satisfies Localized,
  slogan: {
    ru: 'Кофе, который оставляет городу немного тишины.',
    en: 'Coffee that leaves the city a little quieter.',
  } satisfies Localized,
  statement: {
    ru: 'Мы обжариваем тихо, подаём медленно и оставляем Москве воздух между глотками.',
    en: 'We roast quietly, serve slowly, and leave Moscow a little air between sips.',
  } satisfies Localized,
  philosophy: {
    ru: 'Тишина — не отсутствие звука. Это пространство, в котором вкус успевает случиться. Specialty coffee для нас — ритуал замедления в городе, который почти никогда не останавливается.',
    en: 'Silence is not the absence of sound. It is the space in which flavour has time to happen. For us, specialty coffee is a ritual of slowing down in a city that almost never stops.',
  } satisfies Localized,
  story: {
    ru: 'ТИШЬ началась в 2021 году в тихом дворе у Патриарших прудов. Обжарщица Софья Левина и бариста-шеф Артём Волков искали место, где кофе не кричит о себе, а говорит шёпотом. Сегодня у нас четыре пространства в Москве и своя обжарочная в Хамовниках.',
    en: 'TISH began in 2021 in a quiet courtyard by Patriarch’s Ponds. Roaster Sofya Levina and barista-chef Artyom Volkov wanted a place where coffee does not shout, but speaks in a whisper. Today we have four spaces in Moscow and our own roastery in Khamovniki.',
  } satisfies Localized,
  email: 'hello@tish.coffee',
  phone: '+7 (495) 120-44-18',
  instagram: 'https://instagram.com/tish.coffee',
  telegram: 'https://t.me/tishcoffee',
  vk: 'https://vk.com/tishcoffee',
}

export function t(value: Localized, lang: 'ru' | 'en'): string {
  return value[lang]
}

export function formatPrice(value: number, lang: 'ru' | 'en'): string {
  const formatted = new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US').format(value)
  return lang === 'ru' ? `${formatted} ₽` : `${formatted} RUB`
}

export function formatDate(value: string, lang: 'ru' | 'en'): string {
  return new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}
