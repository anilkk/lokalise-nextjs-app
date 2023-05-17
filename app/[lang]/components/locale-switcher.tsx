'use client'

import { usePathname } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
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
      <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
              Locale switcher
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition-opacity ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items static className="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {i18n.locales.map((locale, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({active}) => (
                        <Link 
                          href={redirectedPathName(locale)}
                          key={index}
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                        >
                          {locale}
                        </Link>
                      )}
                    </Menu.Item>
                  )})}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      </div>
    </div>
  )
}
