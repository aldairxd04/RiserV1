import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <div className="w-full ">
      {/** <div> */}

      <Disclosure as="nav" className="bg-white fixed z-40 w-full py-2">
        {/* <Disclosure as="nav" className="bg-slate-500"> */}
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl h-20 px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* ESTE ES EL DIN DEL LOGO */}
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                        className="block h-12 w-auto lg:hidden"
                        // src="http://riser.com.mx/wp-content/uploads/2020/01/riserlogo.png"
                        src="http://riser.com.mx/wp-content/uploads/2020/01/riserlogo.png"
                        alt="Your Company"
                      />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden h-24 pt-3 w-auto lg:block"
                      // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      src="http://riser.com.mx/wp-content/uploads/2020/01/riserlogo.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                {/* DIV DEL MENU */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 pt-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="/"
                      className="rounded-2xl lg:p-3 lg:px-6 px-3 py-2 text-md font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-500"
                    >
                      Inicio
                    </a>
                    <a
                      href="/servicios"
                      className="rounded-2xl lg:p-3 lg:px-6 px-3 py-2 text-md font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-500"
                    >
                      Servicios
                    </a>
                    <a
                      href="/contacto"
                      className="rounded-2xl lg:p-3 lg:px-6 px-3 py-2 text-md font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-500"
                    >
                      Contacto
                    </a>
                    
                  </div>
                  
                </div>

                
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* PANEL MOVIL */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Inicio
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/servicios"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Servicios
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/contacto"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contacto
                </Disclosure.Button>
                
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};