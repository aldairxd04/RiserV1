import { BoltIcon, PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const supportLinks = [
  {
    name: 'WhatsApp',
    to: 'https://wa.me/5219932070292?text',
    description:
      'La forma más fácil de ponerte en contacto con nosotros.',
    icon: PhoneIcon,
  },
  {
    name: 'Correo Electronico',
    to: '/contacto/formulario',
    description:
      'Escribenos y te enviaremos la información que tu compañía necesita.',
    icon: AtSymbolIcon,
  },
  {
    name: 'Media Inquiries',
    to: '#',
    description:
      '¿Problemas con la plataforma? Comunicate con soporte para dar seguimiento al problema y obtener una solución oportuna.',
    icon: BoltIcon,
  },
]

export default function Contact() {
  return (
    <div className="bg-gray-100  py-20 sm:py-24 lg:py-32">
      {/* Cards */}
      <section
            className="relative z-10 mx-auto   max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
          >
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                  <div className="relative  flex-1 px-6 pt-16 md:px-8">
                    <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#FF6900] p-5 shadow-lg">
                      <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-blue-gray-900">{link.name}</h3>
                    <p className="mt-4 text-base text-blue-gray-500">{link.description}</p>
                  </div>
                  <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
                    <Link to={link.to}  className="text-base font-medium text-[#001E57] hover:text-[#DC9800]">
                      Comunicate
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}
