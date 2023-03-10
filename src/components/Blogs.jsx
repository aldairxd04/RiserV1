import BlogCalendar from "./BlogCalendar";


export default function Blogs() {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-xl font-semibold text-gray-800 leading-tight mb-4">
            Mejores prácticas para mantener la integridad del Top Drive de un Equipo de Perforación.
            </h2>
          </div>
          <img src="/assets/risrdina.jpg" className="w-full object-cover lg:rounded h-96" />
        </div>

        <div className="relative px-6 mt-5 lg:px-8 flex">
          <div className=" max-w-3xl text-lg text-gray-800 text-justify">
          
            <h2>
              <span className="blocktext-lg font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              10 consejos para mantener la integridad del Top Drive.
              </span>
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-500">
            Mantener la integridad del Top Drive de un equipo de perforación es una parte esencial de cualquier
             programa de mantenimiento y debe abordarse de manera sistemática y regular.
            </p>

            <p className="mt-8 text-lg">
            Es importante tener en cuenta que la integridad del Top Drive es esencial para la seguridad y el 
            rendimiento de las operaciones de perforación de pozos petroleros. Mantener la integridad del 
            Top Drive de tu equipo de perforación es esencial de cualquier programa de mantenimiento y debe abordarse 
            de manera sistemática y regular. Por lo tanto, es importante seguir estas y otras prácticas de 
            mantenimiento adecuadas para garantizar que el equipo esté en buenas condiciones y funcione de 
            manera eficiente.
            </p>

            <ol role="list" className="list-decimal ml-8 text-lg">
              <li className="mt-5">Realizar inspecciones periódicas: Las inspecciones visuales y de rendimiento deben llevarse a cabo de manera regular para detectar cualquier problema o desgaste en el equipo.</li>
              <li className="mt-5">Mantener un registro de mantenimiento: Llevar un registro de todas las tareas de mantenimiento realizadas y las piezas de repuesto instaladas puede ayudar a identificar cualquier problema o tendencia que pueda estar afectando el rendimiento del equipo.</li>
              <li className="mt-5">Utilizar piezas de repuesto de alta calidad: Es importante utilizar piezas de repuesto de alta calidad para garantizar que el equipo funcione de manera eficiente y sin problemas.</li>
              <li className="mt-5">Realizar mantenimiento preventivo: Los trabajos de mantenimiento preventivo deben llevarse a cabo de manera regular para prevenir fallos inesperados y prolongar la vida útil del equipo.</li>
              <li className="mt-5">Capacitar a los trabajadores: Asegurarse de que los trabajadores estén capacitados en el uso y el mantenimiento del equipo puede ayudar a minimizar el riesgo de fallos o daños innecesarios.</li>
              <li className="mt-5">Seguir las recomendaciones del fabricante: Es importante seguir las recomendaciones del fabricante en cuanto a la frecuencia de mantenimiento y las piezas de repuesto a utilizar para garantizar el rendimiento óptimo del equipo</li>
              <li className="mt-5">Realizar pruebas de rendimiento y capacidad: Las pruebas de rendimiento y capacidad deben realizarse de manera regular para asegurar que el equipo esté funcionando de manera eficiente y sin problemas.</li>
              <li className="mt-5">Limpiar y lubricar adecuadamente el equipo: Es importante mantener el equipo limpio y lubricado adecuadamente para minimizar el desgaste y prolongar su vida útil.</li>
              <li className="mt-5">Realizar inspecciones y pruebas antes y después del uso: Las inspecciones y pruebas deben realizarse antes y después del uso para identificar cualquier problema o desgaste que pueda afectar el rendimiento del equipo.</li>
              <li className="mt-5 mb-5">Almacenar y transportar el equipo adecuadamente: El almacenamiento y transporte adecuado del equipo puede ayudar a minimizar el riesgo de daños o desgaste innecesario.</li>
            </ol>
            
            
          
          </div>
          <aside className="hidden md:block w-full">
            <BlogCalendar/>
          </aside>
        </div>
      </div>
    )
  }
  