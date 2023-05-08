// import '../css/styles.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'

export default function IndexPage() {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-slate-500" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              </div>
              <div>
                <h1>Index page</h1>
                <p>Current locale: {locale}</p>
                <p>Default locale: {defaultLocale}</p>
                <p>Configured locales: {JSON.stringify(locales)}</p>

                <LocaleSwitcher />

                <Link href="/gsp">To getStaticProps page</Link>
                <br />

                <Link href="/gsp/first">To dynamic getStaticProps page</Link>
                <br />

                <Link href="/gssp">To getServerSideProps page</Link>
                <br />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
