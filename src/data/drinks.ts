import type { DrinkPalette, MenuItem } from '../types'

const espresso: DrinkPalette = {
  cup: '#f4eee4',
  espresso: '#3a2418',
  milk: '#f3ead7',
  syrup: '#6a4630',
  foam: '#f7f1e4',
  accent: '#c9a227',
  wash: '#efe6d4',
}

const milk: DrinkPalette = {
  cup: '#f7f2e8',
  espresso: '#4a2e1c',
  milk: '#f6efe0',
  syrup: '#d8c4a4',
  foam: '#fffaf0',
  accent: '#a07a5c',
  wash: '#f3eadc',
}

const lavender: DrinkPalette = {
  cup: '#f6f1fb',
  espresso: '#3a2418',
  milk: '#eee6f6',
  syrup: '#b8a5d0',
  foam: '#f4eefb',
  accent: '#8d74b0',
  wash: '#ebe4f4',
}

const pistachio: DrinkPalette = {
  cup: '#f4f7ee',
  espresso: '#3a2418',
  milk: '#e7f0dc',
  syrup: '#8fa87a',
  foam: '#f3f8eb',
  accent: '#6f8a55',
  wash: '#e4eed8',
}

const honey: DrinkPalette = {
  cup: '#fbf6e8',
  espresso: '#3a2418',
  milk: '#f7ebc8',
  syrup: '#e8c96a',
  foam: '#fff6d8',
  accent: '#c9a227',
  wash: '#f6ebc4',
}

const vanilla: DrinkPalette = {
  cup: '#fbf7ee',
  espresso: '#4a2e1c',
  milk: '#f5ead2',
  syrup: '#e6d2a8',
  foam: '#fff8e8',
  accent: '#c4a574',
  wash: '#f4ead6',
}

const peach: DrinkPalette = {
  cup: '#fbf3ea',
  espresso: '#3a2418',
  milk: '#f8e1c8',
  syrup: '#e8a87a',
  foam: '#ffe9d4',
  accent: '#d4895c',
  wash: '#f6e0cc',
}

const matcha: DrinkPalette = {
  cup: '#f3f7ee',
  espresso: '#5d7a3a',
  milk: '#e5f0d6',
  syrup: '#8fbf5a',
  foam: '#f2f8e8',
  accent: '#6f8a55',
  wash: '#e4f0d6',
}

const cold: DrinkPalette = {
  cup: '#eef4f6',
  espresso: '#3a2418',
  milk: '#e7eef2',
  syrup: '#7aa0b0',
  foam: '#f4f8fa',
  accent: '#5f8494',
  wash: '#e4eef2',
}

export const drinks: MenuItem[] = [
  {
    id: 'espresso',
    slug: 'espresso',
    category: 'coffee',
    name: { ru: 'Эспрессо', en: 'Espresso' },
    description: {
      ru: 'Короткий, плотный, с тёплой сладостью какао и спелой сливы. Наша ежедневная обжарка под эспрессо.',
      en: 'Short, dense, with warm cocoa sweetness and ripe plum. Our daily espresso roast.',
    },
    price: 220,
    ingredients: [
      { ru: 'Эспрессо ТИШЬ', en: 'TISH espresso' },
    ],
    volume: { ru: '30 мл', en: '30 ml' },
    calories: 3,
    palette: espresso,
  },
  {
    id: 'americano',
    slug: 'americano',
    category: 'coffee',
    name: { ru: 'Американо', en: 'Americano' },
    description: {
      ru: 'Эспрессо, раскрытый горячей водой. Чистый вкус зерна без молока — для тех, кто любит тишину в чашке.',
      en: 'Espresso opened with hot water. A clean bean flavour without milk — for those who like quiet in the cup.',
    },
    price: 250,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Горячая вода', en: 'Hot water' },
    ],
    volume: { ru: '250 мл', en: '250 ml' },
    calories: 5,
    palette: espresso,
  },
  {
    id: 'cappuccino',
    slug: 'cappuccino',
    category: 'coffee',
    name: { ru: 'Капучино', en: 'Cappuccino' },
    description: {
      ru: 'Классическая римская пропорция: эспрессо, молоко и плотная бархатная пена. Баланс, а не десерт.',
      en: 'A classic Roman ratio: espresso, milk and dense velvet foam. Balance, not dessert.',
    },
    price: 380,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Молоко 3,2%', en: 'Whole milk 3.2%' },
      { ru: 'Молочная пена', en: 'Milk foam' },
    ],
    volume: { ru: '180 мл', en: '180 ml' },
    calories: 120,
    palette: milk,
  },
  {
    id: 'flat-white',
    slug: 'flat-white',
    category: 'coffee',
    name: { ru: 'Флэт уайт', en: 'Flat White' },
    description: {
      ru: 'Двойной эспрессо и тонкая микропена. Больше кофе, меньше воздуха — наш любимый утренний формат.',
      en: 'Double espresso and a thin microfoam. More coffee, less air — our favourite morning format.',
    },
    price: 400,
    ingredients: [
      { ru: 'Двойной эспрессо', en: 'Double espresso' },
      { ru: 'Микропена из молока', en: 'Milk microfoam' },
    ],
    volume: { ru: '160 мл', en: '160 ml' },
    calories: 110,
    palette: milk,
  },
  {
    id: 'latte',
    slug: 'latte',
    category: 'coffee',
    name: { ru: 'Латте', en: 'Latte' },
    description: {
      ru: 'Мягкий, длинный, с шелковистым молоком. Для медленного утра и разговора, который никуда не спешит.',
      en: 'Soft, long, with silky milk. For a slow morning and a conversation that is in no hurry.',
    },
    price: 390,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Топлёное молоко', en: 'Steamed milk' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 150,
    palette: milk,
  },
  {
    id: 'lavender-latte',
    slug: 'lavender-latte',
    category: 'signature',
    featured: true,
    name: { ru: 'Лавандовый латте', en: 'Lavender Latte' },
    description: {
      ru: 'Эспрессо, цветочный сироп из прованской лаванды и молоко. Аромат, который звучит тише города.',
      en: 'Espresso, a floral Provençal lavender syrup and milk. An aroma that sounds quieter than the city.',
    },
    price: 490,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Лавандовый сироп на цветочном мёде', en: 'Lavender syrup with blossom honey' },
      { ru: 'Молоко', en: 'Milk' },
      { ru: 'Лавандовая пена', en: 'Lavender foam' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 210,
    tags: [{ ru: 'подпись', en: 'signature' }],
    palette: lavender,
  },
  {
    id: 'pistachio-latte',
    slug: 'pistachio-latte',
    category: 'signature',
    featured: true,
    name: { ru: 'Фисташковый латте', en: 'Pistachio Latte' },
    description: {
      ru: 'Паста из сицилийских фисташек, эспрессо и молоко. Ореховая сладость без искусственной зелени.',
      en: 'Sicilian pistachio paste, espresso and milk. Nutty sweetness without artificial green.',
    },
    price: 520,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Фисташковая паста', en: 'Pistachio paste' },
      { ru: 'Молоко', en: 'Milk' },
      { ru: 'Фисташковый краем', en: 'Pistachio cream' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 240,
    tags: [{ ru: 'подпись', en: 'signature' }],
    palette: pistachio,
  },
  {
    id: 'honey-cloud',
    slug: 'honey-cloud',
    category: 'signature',
    featured: true,
    name: { ru: 'Honey Cloud', en: 'Honey Cloud' },
    description: {
      ru: 'Эспрессо, липовый мёд и облако из взбитого молока. Сладкий, но не липкий — как августовский свет.',
      en: 'Espresso, linden honey and a cloud of whipped milk. Sweet, but never sticky — like August light.',
    },
    price: 510,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Липовый мёд', en: 'Linden honey' },
      { ru: 'Молоко', en: 'Milk' },
      { ru: 'Воздушная молочная шапка', en: 'Whipped milk cloud' },
    ],
    volume: { ru: '280 мл', en: '280 ml' },
    calories: 230,
    tags: [{ ru: 'подпись', en: 'signature' }],
    palette: honey,
  },
  {
    id: 'vanilla-cream-coffee',
    slug: 'vanilla-cream-coffee',
    category: 'signature',
    featured: true,
    name: { ru: 'Vanilla Cream Coffee', en: 'Vanilla Cream Coffee' },
    description: {
      ru: 'Кофе с ванильным кремом на настоящих стручках. Десертный, но собранный: сливки не прячут зерно.',
      en: 'Coffee with vanilla cream from real pods. Dessert-like, yet composed: the cream never hides the bean.',
    },
    price: 480,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Ванильный крем', en: 'Vanilla cream' },
      { ru: 'Молоко', en: 'Milk' },
      { ru: 'Стручковая ваниль', en: 'Vanilla bean' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 250,
    tags: [{ ru: 'подпись', en: 'signature' }],
    palette: vanilla,
  },
  {
    id: 'seasonal-signature',
    slug: 'seasonal-signature',
    category: 'signature',
    featured: true,
    name: { ru: 'Поздний август', en: 'Late August' },
    description: {
      ru: 'Сезонный напиток: эспрессо, белый персик, цветочный мёд и овсяная пена. Вкус последнего тёплого вечера.',
      en: 'Seasonal drink: espresso, white peach, blossom honey and oat foam. The taste of the last warm evening.',
    },
    price: 540,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Пюре белого персика', en: 'White peach puree' },
      { ru: 'Цветочный мёд', en: 'Blossom honey' },
      { ru: 'Овсяная пена', en: 'Oat foam' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 220,
    tags: [
      { ru: 'сезон', en: 'seasonal' },
      { ru: 'подпись', en: 'signature' },
    ],
    palette: peach,
  },
  {
    id: 'classic-matcha',
    slug: 'classic-matcha',
    category: 'matcha',
    name: { ru: 'Классическая матча', en: 'Classic Matcha' },
    description: {
      ru: 'Церемониальная матча из Удзи, взбитая вручную. Травянистая, сладкая, без горечи из пакетика.',
      en: 'Ceremonial Uji matcha, whisked by hand. Grassy and sweet, without the bitterness of a sachet.',
    },
    price: 450,
    ingredients: [
      { ru: 'Матча ceremonial grade', en: 'Ceremonial grade matcha' },
      { ru: 'Вода 80 °C', en: 'Water at 80°C' },
    ],
    volume: { ru: '200 мл', en: '200 ml' },
    calories: 25,
    palette: matcha,
  },
  {
    id: 'pistachio-matcha',
    slug: 'pistachio-matcha',
    category: 'matcha',
    name: { ru: 'Фисташковая матча', en: 'Pistachio Matcha' },
    description: {
      ru: 'Матча и фисташковая паста на молоке. Два зелёных вкуса, которые неожиданно находят общий язык.',
      en: 'Matcha and pistachio paste on milk. Two green flavours that unexpectedly share a language.',
    },
    price: 520,
    ingredients: [
      { ru: 'Матча', en: 'Matcha' },
      { ru: 'Фисташковая паста', en: 'Pistachio paste' },
      { ru: 'Молоко', en: 'Milk' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 210,
    palette: pistachio,
  },
  {
    id: 'lavender-matcha',
    slug: 'lavender-matcha',
    category: 'matcha',
    name: { ru: 'Лавандовая матча', en: 'Lavender Matcha' },
    description: {
      ru: 'Матча с лавандовым сиропом. Сад и чайная комната в одной чашке — наш вечерний безалкогольный ритуал.',
      en: 'Matcha with lavender syrup. A garden and a tea room in one cup — our evening alcohol-free ritual.',
    },
    price: 500,
    ingredients: [
      { ru: 'Матча', en: 'Matcha' },
      { ru: 'Лавандовый сироп', en: 'Lavender syrup' },
      { ru: 'Молоко', en: 'Milk' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 180,
    palette: lavender,
  },
  {
    id: 'iced-latte',
    slug: 'iced-latte',
    category: 'cold',
    name: { ru: 'Айс-латте', en: 'Iced Latte' },
    description: {
      ru: 'Эспрессо на льду и холодное молоко. Прозрачный, бодрящий, без лишней сладости.',
      en: 'Espresso over ice and cold milk. Clear, bright, without extra sweetness.',
    },
    price: 390,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Холодное молоко', en: 'Cold milk' },
      { ru: 'Лёд', en: 'Ice' },
    ],
    volume: { ru: '350 мл', en: '350 ml' },
    calories: 140,
    palette: cold,
  },
  {
    id: 'cold-brew',
    slug: 'cold-brew',
    category: 'cold',
    name: { ru: 'Колд брю', en: 'Cold Brew' },
    description: {
      ru: 'Шестнадцать часов холодной экстракции. Шоколад, красные ягоды, почти нет кислоты.',
      en: 'Sixteen hours of cold extraction. Chocolate, red berries, almost no acidity.',
    },
    price: 420,
    ingredients: [
      { ru: 'Холодный экстракт ТИШЬ', en: 'TISH cold extract' },
      { ru: 'Лёд', en: 'Ice' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 8,
    palette: cold,
  },
  {
    id: 'espresso-tonic',
    slug: 'espresso-tonic',
    category: 'cold',
    name: { ru: 'Эспрессо-тоник', en: 'Espresso Tonic' },
    description: {
      ru: 'Эспрессо, индийский тоник и цедра апельсина. Игристое, горько-цитрусовое, очень московское лето.',
      en: 'Espresso, Indian tonic and orange zest. Sparkling, bitter-citrus, very Moscow summer.',
    },
    price: 450,
    ingredients: [
      { ru: 'Эспрессо', en: 'Espresso' },
      { ru: 'Тоник', en: 'Tonic' },
      { ru: 'Апельсиновая цедра', en: 'Orange zest' },
      { ru: 'Лёд', en: 'Ice' },
    ],
    volume: { ru: '300 мл', en: '300 ml' },
    calories: 45,
    palette: cold,
  },
]

export const signatureDrinks = drinks.filter((item) => item.category === 'signature')

export function getDrinkBySlug(slug: string): MenuItem | undefined {
  return drinks.find((item) => item.slug === slug)
}

export function getRecommended(slug: string, count = 3): MenuItem[] {
  const current = getDrinkBySlug(slug)
  if (!current) return signatureDrinks.slice(0, count)
  return drinks
    .filter((item) => item.slug !== slug && (item.category === current.category || item.featured))
    .slice(0, count)
}
