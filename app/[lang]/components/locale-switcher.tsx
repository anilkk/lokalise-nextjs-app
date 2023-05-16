'use client'
import React, { Fragment } from 'react';
import { usePathname } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'

export default function LocaleSwitcher() {
  const [selected, setSelected] = React.useState(0);
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
      {/* <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Options
          </Menu.Button>
        </div>
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"> 
            {i18n.locales.map((locale, index) => {
              return (<Menu.Item key={redirectedPathName(locale)}>
                  <Link href={redirectedPathName(locale)} className={`text-gray-900 block px-4 py-2 text-sm fixed top-0 ${index? 'right-8' :'right-0'}`}>{locale}</Link>
              </Menu.Item>)
              })}
          </Menu.Items>
        </Transition>
        </>
      )}
      </Menu> */}
    </div>
  )
}
