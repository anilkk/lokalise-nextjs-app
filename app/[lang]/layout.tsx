'use client'

import { useEffect } from 'react'
import LocaleSwitcher from './components/locale-switcher'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { i18n } from '../../i18n-config'
import '../css/styles.css'



// import Header from '@/components/ui/header'
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })


  return (
    <html lang={params.lang}>
      <body>
        <header className='flex justify-end'>
          <LocaleSwitcher />
        </header>
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  )
}
