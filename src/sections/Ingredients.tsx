import { Reveal } from '../animations/Reveal'
import { useLanguage } from '../hooks/useLanguage'

const keys = [
  'coffee',
  'lavender',
  'pistachio',
  'honey',
  'milk',
  'matcha',
  'peach',
  'vanilla',
] as const

export function Ingredients() {
  const { copy } = useLanguage()

  return (
    <section className="ingredients wrap">
      <div className="ingredients-sticky">
        <p className="kicker">{copy.home.ingredientsKicker}</p>
        <h2 className="display">{copy.home.ingredientsTitle}</h2>
      </div>
      <div className="ingredient-cloud">
        {keys.map((key, index) => (
          <Reveal key={key} className="chip" delay={index * 0.04}>
            {copy.ingredientsHome[key]}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
