import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Service2() {
  return (
    <div className="bg-white" id="brindamos">
      <div className="mx-auto  max-w-7xl px-4  sm:px-6 lg:px-8">
      <div className="relative mb-10">
            <p className="mx-auto font-bold  max-w-3xl text-center text-xl text-gray-500">
            Enfocados en mejorar la integridad de los activos con el uso de equipos modernos y técnicas de inspección comprobadas, brindamos:
            </p>
          </div>
        <Tabs>
          <TabList
            className={
              "font-semibold text-xl flex flex-col md:flex-row justify-between bg-[#ECECEB]"
            }
          >
            <Tab>Sistema de administración</Tab>
            <Tab> Equipo y herramienta</Tab>
            <Tab>Mantenimiento </Tab>
            <Tab> Capacitación</Tab>
          </TabList>

          <TabPanel >
            <div className="flex">
              <div className="py-2  px-10">
                <h2 className="text-lg font-semibold mt-5">
                  {" "}
                  Sistema de administración de mantenimiento a equipos y
                  componentes críticos.
                </h2>
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                    Supervisión (de operación) permanente de programas y
                    mantenimiento a equipos.
                  </li>
                  <li className="pb-1">
                    Seguimiento y registros de programas de mantenimiento de
                    equipos y componentes críticos.
                  </li>
                  <li className="pb-1">
                    Elaboración de programas de mantenimiento de acuerdo a la
                    operación.
                  </li>
                  <li className="pb-1">
                    Administración de historial de mantenimiento de componentes
                    de equipos y componentes críticos.
                  </li>
                </ol>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex text-justify flex-col px-10 md:flex-row ">
              <div className="py-2 basis-1/3 ">
                <h2 className="text-lg font-semibold mt-5">
                  {" "}
                  Equipos y herramientas especiales
                </h2>
                <img
                  src="http://riser.com.mx/wp-content/uploads/2020/01/hacemos01.png"
                  alt=""
                  className="w-full my-auto"
                />
              </div>
              <div className="py-2 basis-1/3 ">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                  Sistemas Top Drives eléctricos/hidráulicos
                  </li>
                  <li className="pb-1">
                  Sistemas anticolisión
                  </li>
                  <li className="pb-1">
                    Llaves hidráulicas
                  </li>
                  <li className="pb-1">
                  Pipe Racking Systems
                  </li>
                  <li>Offline Activities Cranes</li>
                  <li>Izadoras</li>
                  <li>Generadores</li>
                  <li>Motores de combustión interna</li>
                </ol>
              </div>
              <div className="py-2  basis-1/3">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                  Malacates
                  </li>
                  <li className="pb-1">
                  Bombas de lodo
                  </li>
                  <li className="pb-1">
                  Sistemas electrónicos
                  </li>
                  <li className="pb-1">
                  Sistemas de PLC
                  </li>
                  <li>VFD’s & SCR’s</li>
                  <li>Instrumentación</li>
                  <li>Maquinas de torque</li>
                  <li>Grúas de pedestal</li>
                </ol>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="flex flex-col px-10 ">
              <div className="py-2">
                <h2 className="text-lg font-semibold mt-5">
                  {" "}
                  
 Servicios de mantenimiento preventivo y correctivo a equipos y componentes críticos
                </h2>
               
              </div>
              <div className="flex flex-row">
              <div className="py-2 md:ml-10">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                  Mantenimiento de acuerdo al manual del fabricante
                  </li>
                  <li className="pb-1">
                  Mantenimiento de acuerdo al programa de operación
                  </li>
                  <li className="pb-1">
                  Mantenimiento de acuerdo a exigencias del entorno
                  </li>
                  
                </ol>
              </div>
              <div className="py-2  md:ml-10">
                <ol className="text-md list-disc ml-10 pt-3">
                  <li className="pb-1">
                  Reparaciones mayores (Overhauls, recertificación)
                  </li>
                  <li className="pb-1">
                  Servicio técnico especializado por emergencia (equipo parado)
                  </li>
                  <li className="pb-1">
                  Programación de equipo electrónico
                  </li>
                  
                </ol>
              </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="flex flex-col px-10 ">
              <div className="py-2  ">
                <h2 className="text-lg font-semibold mt-5">
                  {" "}
                  Capacitación para mantenimiento y operación de componentes críticos
                </h2>
               
              </div>
              <div className="flex flex-row">
              <div className="py-2 md:ml-10">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                    
Capacitación en sistema anticolisión
                  </li>
                  <li className="pb-1">
                  Capacitación en especificaciones y operación de la llave hidráulica
                  </li>
                  <li className="pb-1">
                  Capacitación en sistema Top Drive
                  </li>
                  
                </ol>
              </div>
              <div className="py-2  md:ml-10">
                <ol className="text-md list-disc ml-10 pt-3">
                  <li className="pb-1">
                  Capacitación en costo integral de perforación
                  </li>
                  <li className="pb-1">
                  Capacitación en operación de izadora de tubería (Catwalk)
                  </li>
                </ol>
              </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
