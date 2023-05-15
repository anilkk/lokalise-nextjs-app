import { getDictionary } from '../../get-locales'
import { Locale } from '../../i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'
import Hero from './components/hero'
import Features from './components/features'
import FeaturesBlocks from './components/features-blocks'
import Testimonials from './components/testimonials'
import Newsletter from './components/newsletter'
import Footer from './components/footer'
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
      {/*
      // @ts-ignore */}
      <Hero  lang={lang} />
      <p>Current locale: {lang}</p>
      {/*
      // @ts-ignore */}
      <Features lang={lang}/>
      {/*
      // @ts-ignore */}
      <FeaturesBlocks lang={lang}/>
      <LocaleSwitcher />
      {/*
      // @ts-ignore */}
      <Testimonials lang={lang}/>
      {/*
      // @ts-ignore */}
      <Newsletter lang={lang}/>
      {/*
      // @ts-ignore */}
      <Footer lang={lang}/>
    </div>
  )
}
