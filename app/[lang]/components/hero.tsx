'use client'
import { Trans } from 'react-i18next'
import { useTranslation } from '../../i18n/client'

// @ts-ignore
export default async function Hero({lang}) {  
  const {t} = useTranslation(lang);

  return (
    <section className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h3>
              {/*
                // @ts-ignore */}
              {t('title')}
            </h3>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
               {/*
                // @ts-ignore */}
              {/* <Trans
                  i18nKey="hero_header_title" // optional -> fallbacks to defaults if not provided
                  defaults="Make your website <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>{{wonderful}}</span>" // optional defaultValue
                  values={{ wonderful: 'beautiful'}}
                  // components={{ italic: <i />, bold: <strong /> }}
                /> */}
                <Trans i18nKey="hero_header_title" >
                  Make your website <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>wonderful</span>
                </Trans>
            </h1>
            <div className="max-w-3xl mx-auto">
                <Trans i18nKey="hero_header_title_description" >
                </Trans>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}