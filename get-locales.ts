import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all locales here for better linting and typescript support
// We also get the default import for cleaner types
const locales = {
  en: () => import('./locales/en.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {return locales[locale]}
