import { getDictionary } from '../../get-locales'
import { Locale } from '../../i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'
import Hero from './components/hero'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <Hero />
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {dictionary['server-component'].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  )
}
