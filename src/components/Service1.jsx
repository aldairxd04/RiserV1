export default function Service1() {
  return (
    <div className="relative bg-white  ">
      <div className="flex mx-auto md:flex-row flex-col max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 ">
        <div className="basis-1/2 items-center justify-center md:flex hidden ">
          <img src="/assets/risrdina.jpg" alt="Dinamometro" 
          className="md:w-2/3 w-1/2 md:h-full"/>
        </div>
        <div className="basis-1/3 text-justify">
          <h3 className=" text-xl font-bold leading-8 tracking-tight text-gray-900 sm:text-xl">
            {" "}
            Dinamómetro
          </h3>
          <p className="mt-2 text-lg text-gray-500">
            Hemos realizado recertificaciones para:.
          </p>
          <ul className="mt-2 ml-5 list-disc text-md text-gray-500">
            <li>Top Drive TDS-8SA</li>
            <li>Top Drive TD1000-AC</li>
            <li>Overhaul Top Drive TDS-4S</li>
            <li>Overhaul Top Drive Tesco HC</li>
            <li>Overhaul Top Drive Tesco ECI-900</li>
          </ul>
          <p className="text-gray-500 mt-2">
            Pruebas para cualquier marca, capacidad, hidráulicos o eléctricos.
            Evaluamos la funcionalidad de su equipo. Podemos realizar la
            recertificación en nuestras instalaciones. Contamos con el
            certificado API, garantía de calidad bajo los estándares de la
            industria petrolera.
          </p>
          <div className="prose prose-indigo mt-5 text-gray-500">
            <h3 className="mt-4 text-xl font-bold leading-8 tracking-tight text-gray-900 sm:text-xl">
              Suministros de refacciones de partes críticas
            </h3>
            <p className="mt-2">
              Para garantizar la permanencia de la eficiencia de sus equipos,
              tenemos la capacidad de conseguir piezas o refacciones de partes
              críticas en algunos casos de difícil disponibilidad,
              descontinuadas o importadas.
            </p>

            <h3 className="mt-4 text-xl font-bold leading-8 tracking-tight text-gray-900 sm:text-xl">
              Sistema de administración de mantenimiento a equipos y componentes
              críticos
            </h3>
            <p className="mt-2">
              Para garantizar la permanencia de la eficiencia de sus equipos,
              tenemos la capacidad de conseguir piezas o refacciones de partes
              críticas en algunos casos de difícil disponibilidad,
              descontinuadas o importadas.
            </p>
          </div>
          <div className="basis-1/2 items-center justify-center flex mt-6">
          <img src="/assets/risrdina.jpg" alt="Dinamometro" 
          className="md:w-2/3 w-1/2 md:h-full md:hidden"/>
        </div>
        </div>
      </div>
    </div>
  );
}
