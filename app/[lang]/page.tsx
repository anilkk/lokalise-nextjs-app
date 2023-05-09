import { getDictionary } from '../../get-locales'
import { Locale } from '../../i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'
import Hero from './components/hero'
import { useTranslation } from '../i18n'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { t } = await useTranslation(lang)
  const dictionary = await getDictionary(lang)

  return (
    <div>
       <h1>
       {/*
      // @ts-ignore */}
        {t('title')}
        </h1>
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
