import { Disclosure } from '@headlessui/react'
import {  PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Dinamómetro",
    answer:
      "Pruebas para cualquier marca, capacidad, hidráulicos o eléctricos. Evaluamos la funcionalidad de su equipo. Podemos realizar la recertificación en nuestras instalaciones. Contamos con el certificado API, garantía de calidad bajo los estándares de la industria petrolera.",
    img: "http://riser.com.mx/wp-content/uploads/2020/03/dinamometro-768x982.jpg",
    
  },
  {
    question: "Suministros de refacciones de partes críticas",
    answer:
      "Para garantizar la permanencia de la eficiencia de sus equipos, tenemos la capacidad de conseguir piezas o refacciones de partes críticas en algunos casos de difícil disponibilidad, descontinuadas o importadas.",
    img: "http://riser.com.mx/wp-content/uploads/2020/01/productos1-1.png",

  },
  {
    question: "Sistema de administración de mantenimiento a equipos y componentes críticos",
    answer:
      "Para garantizar la permanencia de la eficiencia de sus equipos, tenemos la capacidad de conseguir piezas o refacciones de partes críticas en algunos casos de difícil disponibilidad, descontinuadas o importadas.",
    img: "http://riser.com.mx/wp-content/uploads/2020/01/productos2.png",
    item: ["Supervisión (de operación) permanente de programas y mantenimiento a equipos.", 
    "Seguimiento y registros de programas de mantenimiento de equipos y componentes críticos.", 
    "Elaboración de programas de mantenimiento de acuerdo a la operación.", 
    "Administración de historial de mantenimiento de componentes de equipos y componentes críticos."]

  },
  {
    question: "Equipos y herramientas especiales",
    img: "http://riser.com.mx/wp-content/uploads/2020/01/hacemos01.png",
    item: [
      "Sistemas Top Drives eléctricos/hidráulicos",
      "Sistemas anticolisión",
      "Llaves hidráulicas",
      "Pipe Racking Systems",
      "Offline Activities Cranes",
      "Izadoras",
      "Generadores",
      "Motores de combustión interna",
      "Malacates",
      "Bombas de lodo",
      "Sistemas electrónicos",
      "Sistemas de PLC",
      "VFD’s & SCR’s",
      "Instrumentación",
      "Maquinas de torque",
      "Grúas de pedestal",
    ]
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-[#98784A]">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sección servicios Ejemplo 2
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-[#98784A] hover:border-transparent ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className=" hover:shadow-xl">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium py-6 text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 my-auto items-center ">
                          <PlusIcon
                            className={classNames(open ? '  -rotate-180  ' : 'rotate-0', 'h-8  w-12 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <div className='flex'>
                            <div className='basis-1/2 text-justify'>
                            <p className=" text-lg text-gray-500">{faq.answer}</p>
                                <ol className='mt-2 ml-5 list-disc text-lg text-gray-500'>
                                    
                                  {console.log(faq.item)}
                                  {faq.item && faq.item.map((el) => (
                                      <li key={el}>{el}</li>
                                    ))}  
                                </ol>
                            </div>
                            <div className='basis-1/2'>
                                <img className=' m-auto w-1/2' src={faq.img} alt="" />
                            </div>
                        </div>      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
