import { Reveal } from '../animations/Reveal'
import { useLanguage } from '../hooks/useLanguage'

export function CoffeeRitual() {
  const { copy } = useLanguage()
  const steps = [
    { title: copy.ritual.oneTitle, text: copy.ritual.oneText, tone: 'lavender' },
    { title: copy.ritual.twoTitle, text: copy.ritual.twoText, tone: 'pistachio' },
    { title: copy.ritual.threeTitle, text: copy.ritual.threeText, tone: 'sun' },
  ]

  return (
    <section className="ritual wrap">
      <p className="kicker">{copy.home.ritualKicker}</p>
      <h2 className="display">{copy.home.ritualTitle}</h2>
      <ol className="ritual-grid">
        {steps.map((step, index) => (
          <Reveal key={step.title} className={`ritual-step tone-${step.tone}`} delay={index * 0.08}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
