import type { LocationItem } from '../types'

export const locations: LocationItem[] = [
  {
    id: 'patriarshiye',
    slug: 'patriarshiye',
    name: { ru: 'Патриаршие', en: 'Patriarch’s Ponds' },
    neighborhood: { ru: 'Пресненский', en: 'Presnensky' },
    address: { ru: 'Малый Козихинский пер., 8', en: 'Maly Kozikhinsky Lane, 8' },
    hours: { ru: 'Пн–Пт 08:00–22:00 · Сб–Вс 09:00–22:00', en: 'Mon–Fri 08:00–22:00 · Sat–Sun 09:00–22:00' },
    hoursWeekday: '08:00–22:00',
    hoursWeekend: '09:00–22:00',
    phone: '+7 (495) 120-44-18',
    email: 'patriarshiye@tish.coffee',
    description: {
      ru: 'Первое пространство ТИШЬ. Тихий двор, низкий свет, восемь столов и стойка, с которой видно, как варится каждый эспрессо. Здесь родился лавандовый латте.',
      en: 'The first TISH space. A quiet courtyard, low light, eight tables and a bar from which you can see every espresso being made. The lavender latte was born here.',
    },
    note: {
      ru: 'Самое камерное пространство. Бронируем два стола на вечер.',
      en: 'Our most intimate space. Two tables can be reserved in the evening.',
    },
    mapX: 38,
    mapY: 34,
    accent: '#ddd4ec',
  },
  {
    id: 'khamovniki',
    slug: 'khamovniki',
    name: { ru: 'Хамовники', en: 'Khamovniki' },
    neighborhood: { ru: 'Хамовники', en: 'Khamovniki' },
    address: { ru: 'ул. Льва Толстого, 16', en: 'Leo Tolstoy Street, 16' },
    hours: { ru: 'Пн–Вс 08:00–21:00', en: 'Mon–Sun 08:00–21:00' },
    hoursWeekday: '08:00–21:00',
    hoursWeekend: '08:00–21:00',
    phone: '+7 (495) 120-44-19',
    email: 'khamovniki@tish.coffee',
    description: {
      ru: 'Обжарочная и дневное кафе. Здесь зерно встречается с огнём, а соседи заходят за флэт уайтом по пути в парк. Пахнет хлебом и свежей обжаркой.',
      en: 'Roastery and daytime café. This is where the bean meets the fire, and neighbours stop for a flat white on the way to the park. It smells of bread and fresh roast.',
    },
    note: {
      ru: 'Можно посмотреть обжарку по субботам в 11:00.',
      en: 'Roast viewings on Saturdays at 11:00.',
    },
    mapX: 28,
    mapY: 58,
    accent: '#c9d7b8',
  },
  {
    id: 'arbat',
    slug: 'arbat',
    name: { ru: 'Арбат', en: 'Arbat' },
    neighborhood: { ru: 'Арбат', en: 'Arbat' },
    address: { ru: 'ул. Арбат, 31', en: 'Arbat Street, 31' },
    hours: { ru: 'Пн–Вс 09:00–23:00', en: 'Mon–Sun 09:00–23:00' },
    hoursWeekday: '09:00–23:00',
    hoursWeekend: '09:00–23:00',
    phone: '+7 (495) 120-44-20',
    email: 'arbat@tish.coffee',
    description: {
      ru: 'Витрина на пешеходной улице и тихий зал во дворе. С улицы — город, внутри — пауза. Здесь чаще всего заказывают Honey Cloud.',
      en: 'A window on the pedestrian street and a quiet room in the courtyard. Outside — the city; inside — a pause. Honey Cloud is ordered here more than anywhere else.',
    },
    note: {
      ru: 'Летняя веранда с мая по сентябрь.',
      en: 'Summer terrace from May to September.',
    },
    mapX: 42,
    mapY: 48,
    accent: '#f3e6a6',
  },
  {
    id: 'centre',
    slug: 'centre',
    name: { ru: 'Центр', en: 'Centre' },
    neighborhood: { ru: 'Тверской', en: 'Tverskoy' },
    address: { ru: 'Никольская ул., 10', en: 'Nikolskaya Street, 10' },
    hours: { ru: 'Пн–Пт 07:30–22:00 · Сб–Вс 09:00–22:00', en: 'Mon–Fri 07:30–22:00 · Sat–Sun 09:00–22:00' },
    hoursWeekday: '07:30–22:00',
    hoursWeekend: '09:00–22:00',
    phone: '+7 (495) 120-44-21',
    email: 'centre@tish.coffee',
    description: {
      ru: 'Флагман между Китай-городом и Лубянкой. Высокий зал, длинная стойка, утренний поток и вечерняя тишина после семи. Полное меню и сезонная витрина.',
      en: 'The flagship between Kitay-gorod and Lubyanka. A tall room, a long bar, a morning rush and evening quiet after seven. Full menu and a seasonal pastry counter.',
    },
    note: {
      ru: 'Есть зал для небольшой встречи — до восьми гостей.',
      en: 'A small gathering room for up to eight guests.',
    },
    mapX: 58,
    mapY: 42,
    accent: '#e8a87a',
  },
]

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locations.find((item) => item.slug === slug)
}
