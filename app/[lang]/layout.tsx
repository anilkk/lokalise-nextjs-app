import { i18n } from '../../i18n-config'
import '../css/styles.css'
import { Inter } from 'next/font/google'


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
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
