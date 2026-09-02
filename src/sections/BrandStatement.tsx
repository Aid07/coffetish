import { Reveal } from '../animations/Reveal'
import { useLanguage } from '../hooks/useLanguage'
import { brand, t } from '../data/brand'

export function BrandStatement() {
  const { lang, copy } = useLanguage()

  return (
    <section className="brand-statement wrap">
      <Reveal>
        <p className="kicker">{copy.home.brandKicker}</p>
        <blockquote className="display">{t(brand.statement, lang)}</blockquote>
        <p>{t(brand.story, lang)}</p>
      </Reveal>
    </section>
  )
}
