import NumericPromoSlider from "./NumericPromoSlider";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <div className="  bg-[#F3F4F6] ">
      {/* Header */}
      <div className="relative bg-white ">
        <div className="relative mx-auto max-w-7xl lg:py-20  lg:px-8"></div>
      </div>

      {/* Overlapping cards */}
      <section
        className=" lg:bottom-40 md:bottom-20 relative z-10 mx-auto max-w-7xl  sm:px-6 lg:px-12 "
        aria-labelledby="contact-heading"
        id="servicios"
      >
        <div className="relative md:hidden h-28 ">
          <img src="/assets/risr1.jpg" alt="dinamometro" className="w-full" />
        </div>
        <div className=" grid grid-rows-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 ">
          <div className="flex md:mx-0 mx-8 lg:mt-20 md:flex-row  flex-col bg-cover lg:bg-[url('/assets/risr1.jpg')]">
            <div className="lg:mx-48 md:mx-auto lg:right-32 md:top-20 lg:mr-24 pb-5 bg-gray-100  relative flex-1 md:pl-20 md:pt-10 md:pb-8 md:px-8">
              <div className="border-l-4 pb-4 border-sky-500 mb-8 ">
                <p className="pl-4 pt-8 pb-0 mt-4 text-base font-normal uppercase tracking-widest text-black">
                  Servicios
                </p>
              </div>
              <h2 className="text-4xl font-medium mb-5  text-gray-900">
                El único sistema de pruebas de esfuerzos para sistemas Top Drive
                en América Latina.
              </h2>

              <ol className=" text-lg pb-5 pl-5 list-disc">
                <li>
                  {" "}
                  Sistema de administración de mantenimiento a equipos y
                  componentes críticos
                </li>
                <li>
                  Servicios de mantenimiento preventivo y correctivo a equipos y
                  componentes críticos
                </li>
                <li>
                  Capacitación para mantenimiento y operación de componentes
                  críticos
                </li>
              </ol>

              <Link
                type="button"
                className="transition duration-500 md:inline-flex items-center -ml-1 m-5 px-11 py-3 border border-transparent text-sm font-medium rounded-full 
                      shadow-sm text-slate-900 bg-[#FF6900] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-[#2DCCD3]  hidden"
              >
                Servicios
              </Link>
              <Link
                to="contacto"
                className="md:inline-flex items-center px-11 py-3 border  text-sm font-medium rounded-full 
                      shadow-sm text-slate-900 border-[#FF6900] bg-white hover:border-[#2DCCD3] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-[#2DCCD3] transition duration-500 hidden"
              >
                Contacto
              </Link>

              <Link
                type="button"
                className="transition duration-500 inline-flex items-center -ml-1 m-5 px-11 py-3 border border-transparent text-sm font-medium rounded-full 
                      shadow-sm text-slate-900 bg-[#FF6900] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-[#2DCCD3] w-full justify-center md:hidden"
              >
                Servicios
              </Link>
              <Link
                to="contacto"
                className="inline-flex items-center px-11 py-3 border  text-sm font-medium rounded-full 
                      shadow-sm text-slate-900 border-[#FF6900] bg-white hover:border-[#2DCCD3] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-[#2DCCD3] transition duration-500 w-full justify-center md:hidden"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
