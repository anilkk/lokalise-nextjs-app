'use client'

import { usePathname } from 'next/navigation'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
      <Menu>
        <Menu.Button>Options</Menu.Button>
        <Menu.Items>
          {i18n.locales.map((locale) => {
            /* Use the `active` state to conditionally style the active item. */
            return (<Menu.Item key={redirectedPathName(locale)}>
                 <Link href={redirectedPathName(locale)}>{locale}</Link>
            </Menu.Item>)
            })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
