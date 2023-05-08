import { useEffect } from 'react'
import AOS from 'aos'

import '../css/styles.css'
import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  return <Component {...pageProps} />
}