import NumericPromoSlider from "./NumericPromoSlider";
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <div className="bg-white   ">
      {/* Header */}
      <div className="relative bg-[#2D3034] ">
        <div className="relative mx-auto max-w-7xl py-28  lg:px-8"></div>
      </div>

      {/* Overlapping cards */}
      <section
        className="  relative z-10 mx-auto  -mt-32 max-w-7xl  lg:px-12 "
        aria-labelledby="contact-heading"
        id="somos"
      >
        <div className=" grid grid-rows-1  gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 ">
          <div className="md:pl-14  flex md:flex-row flex-col rounded-lg bg-white ">
            <div className="   md:grid md:grid-cols-2 sm:flex sm:flex-col">
              <div className="  relative px-10 pt-10 pb-8 md:px-8">
                <div className="border-l-4 pb-4 border-sky-500 mb-8 ">
                  <p className="pl-4 pt-8 pb-0 mt-4 text-base font-normal uppercase tracking-widest text-black">
                    ¿Quienes somos?
                  </p>
                </div>
                <h2 className="text-4xl font-medium mb-5  text-gray-900">
                  Líder en manteinimento de Top Drive en México
                </h2>
                <ul className="text-lg pb-5 pl-5 list-disc md:pl-5 text-justify ">
                  <li>
                    Una empresa mexicana que ofrece servicios técnicos
                    especializados a la industria petrolera.
                  </li>
                  <li>
                    Un equipo dedicado al mantenimiento predictivo, preventivo y
                    correctivo de los componentes que integran un equipo de
                    perforación.
                  </li>
                  <li>
                    Personal confiable con la capacidad de brindarle asistencia
                    y respuesta.
                  </li>
                </ul>
                <div className="md:block hidden ">
                  <Link
                    to="contacto"
                    className="transition duration-500 xs:flex inline-flex items-center -ml-1 m-5 px-11 py-3 border border-transparent text-sm font-medium rounded-full 
                          shadow-sm text-slate-900 bg-[#FF6900] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-[#2DCCD3]  xs:w-full xs:justify-center "
                  >
                    <p className="xs:text-center sm:text-center">Contacto</p>
                  </Link>

                  <a href="#comunidad">
                    <button
                      className="transition duration-500 inline-flex items-center px-11 py-3 border  text-sm font-medium rounded-full 
                shadow-sm text-slate-900 border-[#FF6900] bg-white hover:border-[#2DCCD3] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#2DCCD3] xs:flex xs:w-full xs:justify-center"
                    >
                      Únete a la comunidad
                    </button>
                  </a>
                </div>
              </div>

              <div className="md:my-auto  lg:px-6 lg:pt-14 md:px-8 md:block hidden">
                <NumericPromoSlider />
              </div>

              <div className="block  m-auto md:hidden pb-5 pl-5 w-96">
                <NumericPromoSlider />
              </div>

              <div className=" px-10 relative md:hidden pb-5 ">
                <Link
                  to="contacto"
                  className="transition duration-500 flex items-center -ml-1 m-5 px-11 py-3 border border-transparent text-sm font-medium rounded-full 
                          shadow-sm text-slate-900 bg-[#FF6900] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-[#2DCCD3]  w-full justify-center"
                >
                  <p className="xs:text-center sm:text-center">Contacto</p>
                </Link>

                <button
                  className="transition duration-500 items-center px-11 py-3 border  text-sm font-medium rounded-full 
                shadow-sm text-slate-900 border-[#FF6900] bg-white hover:border-[#2DCCD3] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#2DCCD3] flex w-full justify-center"
                >
                  <a href="#comunidad">Únete a la comunidad</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
