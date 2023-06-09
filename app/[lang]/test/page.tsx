import { getDictionary } from '../../../get-locales'
import { Locale } from '../../../i18n-config'
import Counter from '../components/counter'
import LocaleSwitcher from '../components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
    </div>
  )
}
