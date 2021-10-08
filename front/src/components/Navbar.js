import '../App';
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as OpLogo} from '../logo.svg';
import { Disclosure } from '@headlessui/react';
import { MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline';


const navigation = [
  { name: 'Expériences', href: '/experiences', current: false },
  { name: 'Skills', href: '/skills', current: false },
  { name: 'Parcours', href: '/parcours', current: false },
  { name: 'Hobbies', href: '/hobbies', current: false },
  // { name: 'Projets', href: '/projet', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {


  return (
    <Disclosure as="nav" className="bg-black">

      {({ open }) => (
        <>
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">

            <div className="relative flex items-center justify-center justify-between h-32">
              
              <div className="flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex p-2 rounded-md text-white hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center"> 
              <Link to="/">    
                <OpLogo className="block h-8 w-auto fill-current stroke-current text-white "/>
               </Link>
              </div>
              <div className="hidden md:block sm:ml-6 sm:mr-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
              
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white hover:text-black',
                          'px-3 py-2 rounded-md text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
            </div>
              
              <div className="flex items-center">
                <button
                        type="button"
                        className="bg-white hover:bg-gray-100 text-gray-800 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center shadow">
                        <MailIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                        Contact
                </button>
              </div>

            </div>

          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white hover:text-black',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



