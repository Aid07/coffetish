import { PageMeta } from '../components/PageMeta'
import { useLanguage } from '../hooks/useLanguage'
import { brand, t } from '../data/brand'
import './AboutPage.css'

export function AboutPage() {
  const { lang, copy } = useLanguage()

  return (
    <article className="page-shell about-page">
      <PageMeta
        title={lang === 'ru' ? 'О нас — ТИШЬ' : 'About — TISH'}
        description={t(brand.philosophy, lang)}
      />
      <header className="wrap page-head">
        <p className="kicker">ТИШЬ</p>
        <h1 className="display">{copy.about.title}</h1>
        <p className="lead">{copy.about.lead}</p>
      </header>

      <section className="about-hero-band">
        <div className="wrap">
          <blockquote className="display">{t(brand.slogan, lang)}</blockquote>
        </div>
      </section>

      <div className="wrap about-editorial">
        <section>
          <h2>{lang === 'ru' ? 'История' : 'Story'}</h2>
          <p>{t(brand.story, lang)}</p>
          <p>
            {lang === 'ru'
              ? 'Мы не открывали «ещё одну кофейню с растениями». Мы искали комнату, в которой можно услышать зерно. Патриаршие стали первой такой комнатой: восемь столов, двор без вывески на проспект и стойка, с которой видно экстракцию. Потом появилась обжарка в Хамовниках — потому что возить чужой профиль из другого города значило потерять характер. Арбат и Центр пришли позже, когда стало ясно: тишина масштабируется не сетью, а ритуалом.'
              : 'We did not open “another café with plants”. We were looking for a room in which you could hear the bean. Patriarch’s became the first such room: eight tables, a courtyard without a sign on the avenue, and a bar from which you can see the shot. Then came the roastery in Khamovniki — because shipping someone else’s profile from another city meant losing character. Arbat and the Centre arrived later, when it was clear: quiet does not scale as a chain, it scales as a ritual.'}
          </p>
        </section>
        <section>
          <h2>{lang === 'ru' ? 'Зерно и обжарка' : 'Beans and roast'}</h2>
          <p>
            {lang === 'ru'
              ? 'Каждый понедельник Софья Левина каппит вслепую. Лот проходит, если в нём есть сладость, если фермеру заплатили честно, и если профиль держится хотя бы сезон. Эспрессо и фильтр живут на разных кривых: молоку нужен каркас, воронке — воздух. Дату обжарки мы пишем крупно. Пачка без даты — не наш разговор.'
              : 'Every Monday Sofya Levina cups blind. A lot passes if it has sweetness, if the farmer was paid honestly, and if the profile holds for at least a season. Espresso and filter live on different curves: milk needs a frame, a pour-over needs air. We print the roast date large. A bag without a date is not our conversation.'}
          </p>
        </section>
        <aside className="about-note">
          <p>
            {lang === 'ru'
              ? 'Философия проста: тишина — это пространство, в котором вкус успевает случиться.'
              : 'The philosophy is simple: silence is the space in which flavour has time to happen.'}
          </p>
        </aside>
        <section>
          <h2>{lang === 'ru' ? 'Бариста' : 'Baristas'}</h2>
          <p>
            {lang === 'ru'
              ? 'Артём Волков собирает смены так, чтобы на стойке не было спектакля. Калибровка эспрессо — в начале дня, молоко — до 65 °C, разговор с гостем — если гость его хочет. Мы не учим улыбаться «на камеру». Учим слышать заказ и не перебивать паузу. Новички месяц работают только на фильтре и кассе, пока рука не перестаёт дрожать на питчере.'
              : 'Artyom Volkov builds shifts so there is no theatre at the bar. Espresso calibration at the start of the day, milk to 65°C, conversation if the guest wants it. We do not train smiles “for the camera”. We train hearing an order and not interrupting a pause. Newcomers spend a month on filter and till until the hand stops shaking on the pitcher.'}
          </p>
        </section>
        <section>
          <h2>{lang === 'ru' ? 'Детали и атмосфера' : 'Details and atmosphere'}</h2>
          <p>
            {lang === 'ru'
              ? 'Свет тёплый, но не «янтарный Instagram». Столы — дуб и линолеум, не мрамор ради мрамора. Музыка есть, но она не спорит с разговором. На Патриарших нет розеток в каждом углу: если нужно поработать, лучше Центр. Если нужно выдохнуть — Хамовники после обжарки, когда в зале ещё пахнет хлебом.'
              : 'The light is warm, but not “amber Instagram”. Tables are oak and linoleum, not marble for marble’s sake. There is music, but it does not argue with conversation. Patriarch’s does not have a socket in every corner: if you need to work, the Centre is better. If you need to exhale — Khamovniki after roast, when the room still smells of bread.'}
          </p>
        </section>
        <section>
          <h2>{lang === 'ru' ? 'Москва' : 'Moscow'}</h2>
          <p>
            {lang === 'ru'
              ? 'Город умеет быть громким на Тверской и нежным во дворе. ТИШЬ стоит во втором. Мы любим Патриаршие не за открытки, а за то, как пруд держит небо. Хамовники — за жилые лестницы. Арбат — за то, что за туристической улицей всё ещё есть тихий двор. Центр — за утро, когда Никольская ещё не стала коридором.'
              : 'The city knows how to be loud on Tverskaya and tender in a courtyard. TISH stands in the second. We love Patriarch’s not for postcards, but for how the pond holds the sky. Khamovniki for residential staircases. The Arbat for the quiet courtyard still behind the tourist street. The Centre for the morning when Nikolskaya has not yet become a corridor.'}
          </p>
        </section>
      </div>
    </article>
  )
}
