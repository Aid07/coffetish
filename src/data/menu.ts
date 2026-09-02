import type { MenuCategory, MenuItem } from '../types'
import { drinks } from './drinks'

const pastry: MenuItem['palette'] = {
  cup: '#f7efe4',
  espresso: '#c4a574',
  milk: '#f3e6d0',
  syrup: '#e0b07a',
  foam: '#fff4e4',
  accent: '#c9a227',
  wash: '#f4e6d0',
}

const dessert: MenuItem['palette'] = {
  cup: '#f6eef6',
  espresso: '#8d74b0',
  milk: '#efe4f2',
  syrup: '#c9b8de',
  foam: '#f8f0f8',
  accent: '#8d74b0',
  wash: '#eee4f2',
}

const savoury: MenuItem['palette'] = {
  cup: '#eef3e6',
  espresso: '#6f8a55',
  milk: '#e4eed8',
  syrup: '#a8c08e',
  foam: '#f2f7ea',
  accent: '#6f8a55',
  wash: '#e4eed8',
}

export const food: MenuItem[] = [
  {
    id: 'croissant',
    slug: 'croissant',
    category: 'pastry',
    name: { ru: 'Круассан сливочный', en: 'Butter croissant' },
    description: {
      ru: 'Слоёное тесто на французском масле AOP. Хрустящий, с медовой сердцевиной. Печём каждые два часа.',
      en: 'Laminated dough with French AOP butter. Crisp, with a honeyed centre. Baked every two hours.',
    },
    price: 280,
    ingredients: [
      { ru: 'Пшеничная мука', en: 'Wheat flour' },
      { ru: 'Сливочное масло', en: 'Butter' },
      { ru: 'Закваска', en: 'Levain' },
    ],
    volume: { ru: '75 г', en: '75 g' },
    calories: 310,
    palette: pastry,
  },
  {
    id: 'almond-croissant',
    slug: 'almond-croissant',
    category: 'pastry',
    name: { ru: 'Миндальный круассан', en: 'Almond croissant' },
    description: {
      ru: 'Вчерашний круассан, которому дают вторую жизнь: миндальный крем, лепестки, сахарная пудра.',
      en: 'Yesterday’s croissant given a second life: almond cream, petals, icing sugar.',
    },
    price: 390,
    ingredients: [
      { ru: 'Круассан', en: 'Croissant' },
      { ru: 'Миндальный крем', en: 'Almond cream' },
      { ru: 'Лепестки миндаля', en: 'Flaked almonds' },
    ],
    volume: { ru: '110 г', en: '110 g' },
    calories: 420,
    palette: pastry,
  },
  {
    id: 'cinnamon-bun',
    slug: 'cinnamon-bun',
    category: 'pastry',
    name: { ru: 'Булочка с корицей', en: 'Cinnamon bun' },
    description: {
      ru: 'Мягкая сдобная спираль с цейлонской корицей и ванильной глазурью. Пахнет домом, даже если вы на Арбате.',
      en: 'A soft enriched spiral with Ceylon cinnamon and vanilla glaze. It smells like home, even on the Arbat.',
    },
    price: 320,
    ingredients: [
      { ru: 'Сдобное тесто', en: 'Enriched dough' },
      { ru: 'Корица', en: 'Cinnamon' },
      { ru: 'Ванильная глазурь', en: 'Vanilla glaze' },
    ],
    volume: { ru: '95 г', en: '95 g' },
    calories: 340,
    palette: pastry,
  },
  {
    id: 'vanilla-brioche',
    slug: 'vanilla-brioche',
    category: 'pastry',
    name: { ru: 'Бриошь с ванильным кремом', en: 'Vanilla cream brioche' },
    description: {
      ru: 'Тёплая бриошь и заварной крем на стручковой ванили. Завтрак, который можно есть руками.',
      en: 'Warm brioche and pastry cream with vanilla bean. A breakfast you can eat with your hands.',
    },
    price: 360,
    ingredients: [
      { ru: 'Бриошь', en: 'Brioche' },
      { ru: 'Ванильный заварной крем', en: 'Vanilla pastry cream' },
    ],
    volume: { ru: '120 г', en: '120 g' },
    calories: 380,
    palette: pastry,
  },
  {
    id: 'pistachio-tart',
    slug: 'pistachio-tart',
    category: 'dessert',
    name: { ru: 'Фисташковый тарт', en: 'Pistachio tart' },
    description: {
      ru: 'Песочная корзинка, фисташковый ганаш и тонкий слой малины. Наш самый зелёный десерт.',
      en: 'A shortcrust tart, pistachio ganache and a thin layer of raspberry. Our greenest dessert.',
    },
    price: 450,
    ingredients: [
      { ru: 'Песочное тесто', en: 'Shortcrust' },
      { ru: 'Фисташковый ганаш', en: 'Pistachio ganache' },
      { ru: 'Малина', en: 'Raspberry' },
    ],
    volume: { ru: '90 г', en: '90 g' },
    calories: 360,
    palette: dessert,
  },
  {
    id: 'lavender-cheesecake',
    slug: 'lavender-cheesecake',
    category: 'dessert',
    name: { ru: 'Лавандовый чизкейк', en: 'Lavender cheesecake' },
    description: {
      ru: 'Сливочный чизкейк с настоем лаванды и медовой корочкой. Не парфюм — именно вкус цветка.',
      en: 'A cream cheesecake with lavender infusion and a honey crust. Not perfume — the actual taste of the flower.',
    },
    price: 420,
    ingredients: [
      { ru: 'Сливочный сыр', en: 'Cream cheese' },
      { ru: 'Настой лаванды', en: 'Lavender infusion' },
      { ru: 'Медовая крошка', en: 'Honey crumb' },
    ],
    volume: { ru: '110 г', en: '110 g' },
    calories: 340,
    palette: dessert,
  },
  {
    id: 'honey-panna-cotta',
    slug: 'honey-panna-cotta',
    category: 'dessert',
    name: { ru: 'Медовая панна-котта', en: 'Honey panna cotta' },
    description: {
      ru: 'Нежный сливочный десерт с липовым мёдом и цедрой лимона. Дрожит в ложке, как следует.',
      en: 'A tender cream dessert with linden honey and lemon zest. It trembles on the spoon, as it should.',
    },
    price: 390,
    ingredients: [
      { ru: 'Сливки', en: 'Cream' },
      { ru: 'Липовый мёд', en: 'Linden honey' },
      { ru: 'Лимонная цедра', en: 'Lemon zest' },
    ],
    volume: { ru: '130 г', en: '130 g' },
    calories: 280,
    palette: pastry,
  },
  {
    id: 'chocolate-fondant',
    slug: 'chocolate-fondant',
    category: 'dessert',
    name: { ru: 'Шоколадный фондан', en: 'Chocolate fondant' },
    description: {
      ru: 'Тёплый фондан из какао 70% с жидкой сердцевиной. К нему — шарик ванильного пломбира.',
      en: 'A warm 70% cocoa fondant with a molten centre. Served with a scoop of vanilla ice cream.',
    },
    price: 470,
    ingredients: [
      { ru: 'Тёмный шоколад 70%', en: '70% dark chocolate' },
      { ru: 'Масло', en: 'Butter' },
      { ru: 'Ванильный пломбир', en: 'Vanilla ice cream' },
    ],
    volume: { ru: '140 г', en: '140 g' },
    calories: 430,
    palette: pastry,
  },
  {
    id: 'salmon-sandwich',
    slug: 'salmon-sandwich',
    category: 'sandwich',
    name: { ru: 'Сэндвич с лососем', en: 'Salmon sandwich' },
    description: {
      ru: 'Слабосолёный лосось, сливочный сыр, огурец и укроп на заквасочном тосте. Лёгкий, собранный, без майонеза.',
      en: 'Cured salmon, cream cheese, cucumber and dill on sourdough toast. Light, composed, no mayonnaise.',
    },
    price: 620,
    ingredients: [
      { ru: 'Заквасочный хлеб', en: 'Sourdough' },
      { ru: 'Лосось', en: 'Salmon' },
      { ru: 'Сливочный сыр', en: 'Cream cheese' },
      { ru: 'Огурец', en: 'Cucumber' },
    ],
    volume: { ru: '220 г', en: '220 g' },
    calories: 410,
    palette: savoury,
  },
  {
    id: 'chicken-pesto',
    slug: 'chicken-pesto',
    category: 'sandwich',
    name: { ru: 'Курица с песто', en: 'Chicken pesto sandwich' },
    description: {
      ru: 'Запечённая курица, базиликовый песто, руккола и моцарелла на чиабатте. Сытный обед без тяжести.',
      en: 'Roast chicken, basil pesto, rocket and mozzarella on ciabatta. A filling lunch without heaviness.',
    },
    price: 560,
    ingredients: [
      { ru: 'Чиабатта', en: 'Ciabatta' },
      { ru: 'Курица', en: 'Chicken' },
      { ru: 'Песто', en: 'Pesto' },
      { ru: 'Моцарелла', en: 'Mozzarella' },
    ],
    volume: { ru: '240 г', en: '240 g' },
    calories: 480,
    palette: savoury,
  },
  {
    id: 'avocado-brioche',
    slug: 'avocado-brioche',
    category: 'sandwich',
    name: { ru: 'Авокадо на бриоши', en: 'Avocado on brioche' },
    description: {
      ru: 'Спелый авокадо, лайм, чиа и микрозелень на тосте из бриоши. Можно добавить яйцо пашот.',
      en: 'Ripe avocado, lime, chia and microgreens on brioche toast. Add a poached egg if you like.',
    },
    price: 490,
    ingredients: [
      { ru: 'Бриошь', en: 'Brioche' },
      { ru: 'Авокадо', en: 'Avocado' },
      { ru: 'Лайм', en: 'Lime' },
      { ru: 'Микрозелень', en: 'Microgreens' },
    ],
    volume: { ru: '180 г', en: '180 g' },
    calories: 390,
    palette: savoury,
  },
  {
    id: 'khamovniki-club',
    slug: 'khamovniki-club',
    category: 'sandwich',
    name: { ru: 'Хамовнический клаб', en: 'Khamovniki club' },
    description: {
      ru: 'Тройной тост: индейка, томаты, лист салата, мягкий сыр и наш соус на йогурте. Именной сэндвич Хамовников.',
      en: 'Triple toast: turkey, tomato, lettuce, soft cheese and our yoghurt sauce. The namesake Khamovniki sandwich.',
    },
    price: 590,
    ingredients: [
      { ru: 'Тостовый хлеб', en: 'Toast bread' },
      { ru: 'Индейка', en: 'Turkey' },
      { ru: 'Томаты', en: 'Tomato' },
      { ru: 'Йогуртовый соус', en: 'Yoghurt sauce' },
    ],
    volume: { ru: '260 г', en: '260 g' },
    calories: 520,
    palette: savoury,
  },
  {
    id: 'oat-pear',
    slug: 'oat-pear',
    category: 'breakfast',
    name: { ru: 'Овсянка с грушей', en: 'Oats with pear' },
    description: {
      ru: 'Томлёная овсянка на овсяном молоке, карамелизированная груша и грецкий орех. Тихое утро в миске.',
      en: 'Slow oats on oat milk, caramelised pear and walnut. A quiet morning in a bowl.',
    },
    price: 420,
    ingredients: [
      { ru: 'Овсяные хлопья', en: 'Oats' },
      { ru: 'Овсяное молоко', en: 'Oat milk' },
      { ru: 'Груша', en: 'Pear' },
      { ru: 'Грецкий орех', en: 'Walnut' },
    ],
    volume: { ru: '280 г', en: '280 g' },
    calories: 340,
    palette: savoury,
  },
  {
    id: 'eggs-brioche',
    slug: 'eggs-brioche',
    category: 'breakfast',
    name: { ru: 'Яйца пашот на бриоши', en: 'Poached eggs on brioche' },
    description: {
      ru: 'Два пашота, голландский соус на сливочном масле и зелень. Подаём до 12:00.',
      en: 'Two poached eggs, butter hollandaise and greens. Served until noon.',
    },
    price: 590,
    ingredients: [
      { ru: 'Яйца', en: 'Eggs' },
      { ru: 'Бриошь', en: 'Brioche' },
      { ru: 'Голландский соус', en: 'Hollandaise' },
    ],
    volume: { ru: '240 г', en: '240 g' },
    calories: 470,
    palette: pastry,
  },
  {
    id: 'tish-granola',
    slug: 'tish-granola',
    category: 'breakfast',
    name: { ru: 'Гранола ТИШЬ', en: 'TISH granola' },
    description: {
      ru: 'Наша гранола на мёде и оливковом масле, греческий йогурт, сезонные ягоды и цедра апельсина.',
      en: 'Our honey and olive-oil granola, Greek yoghurt, seasonal berries and orange zest.',
    },
    price: 460,
    ingredients: [
      { ru: 'Гранола', en: 'Granola' },
      { ru: 'Греческий йогурт', en: 'Greek yoghurt' },
      { ru: 'Ягоды', en: 'Berries' },
    ],
    volume: { ru: '250 г', en: '250 g' },
    calories: 390,
    palette: pastry,
  },
  {
    id: 'syrniki',
    slug: 'syrniki',
    category: 'breakfast',
    name: { ru: 'Сырники с ванилью', en: 'Vanilla syrniki' },
    description: {
      ru: 'Домашние сырники из творога 9%, ваниль и сметана. Можно взять с ягодным соусом или мёдом.',
      en: 'House syrniki from 9% tvorog, vanilla and sour cream. Take them with berry sauce or honey.',
    },
    price: 480,
    ingredients: [
      { ru: 'Творог', en: 'Tvorog' },
      { ru: 'Ваниль', en: 'Vanilla' },
      { ru: 'Сметана', en: 'Sour cream' },
    ],
    volume: { ru: '220 г', en: '220 g' },
    calories: 410,
    palette: pastry,
  },
]

export const menuItems: MenuItem[] = [...drinks, ...food]

export const categoryOrder: MenuCategory[] = [
  'coffee',
  'signature',
  'matcha',
  'cold',
  'pastry',
  'dessert',
  'sandwich',
  'breakfast',
]

export const categoryLabel: Record<MenuCategory, { ru: string; en: string }> = {
  coffee: { ru: 'Кофе', en: 'Coffee' },
  signature: { ru: 'Авторские', en: 'Signature' },
  matcha: { ru: 'Матча', en: 'Matcha' },
  cold: { ru: 'Холодные', en: 'Cold' },
  pastry: { ru: 'Выпечка', en: 'Pastry' },
  dessert: { ru: 'Десерты', en: 'Desserts' },
  sandwich: { ru: 'Сэндвичи', en: 'Sandwiches' },
  breakfast: { ru: 'Завтраки', en: 'Breakfast' },
}

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find((item) => item.slug === slug)
}

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category)
}
