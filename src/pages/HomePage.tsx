import { PageMeta } from '../components/PageMeta'
import { useLanguage } from '../hooks/useLanguage'
import { Hero } from '../sections/Hero'
import { BrandStatement } from '../sections/BrandStatement'
import { SignatureDrinks } from '../sections/SignatureDrinks'
import { CoffeeRitual } from '../sections/CoffeeRitual'
import { Ingredients } from '../sections/Ingredients'
import { Moscow } from '../sections/Moscow'
import { HomeLocations } from '../sections/HomeLocations'
import { HomeJournal } from '../sections/HomeJournal'
import { FinalCta } from '../sections/FinalCta'
import '../sections/home.css'

export function HomePage() {
  const { lang } = useLanguage()

  return (
    <>
      <PageMeta
        title={lang === 'ru' ? 'ТИШЬ — specialty coffee, Москва' : 'TISH — specialty coffee, Moscow'}
        description={
          lang === 'ru'
            ? 'ТИШЬ — specialty coffee в Москве. Кофе, который оставляет городу немного тишины. Патриаршие, Хамовники, Арбат и Центр.'
            : 'TISH is specialty coffee in Moscow. Coffee that leaves the city a little quieter. Patriarch’s, Khamovniki, Arbat and the Centre.'
        }
      />
      <Hero />
      <BrandStatement />
      <SignatureDrinks />
      <CoffeeRitual />
      <Ingredients />
      <Moscow />
      <HomeLocations />
      <HomeJournal />
      <FinalCta />
    </>
  )
}
