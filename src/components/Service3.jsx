import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Service3() {
  return (
    <div className="bg-white" id="productos">
      <div className="mx-auto  max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="relative mb-10">
          <p className="mx-auto font-bold  max-w-3xl text-center text-xl text-gray-500">
            Productos:
          </p>
        </div>
        <Tabs>
          <TabList
            className={
              "font-semibold text-xl flex flex-col md:flex-row justify-between bg-[#ECECEB]"
            }
          >
            <Tab>Sistemas de Izaje</Tab>
            <Tab>Sistemas de circulación</Tab>
            <Tab>Sistemas de control</Tab>
            <Tab>Herramientas de piso</Tab>
          </TabList>

          <TabPanel>
            <div className="flex text-justify flex-col px-10 md:flex-row ">
              <div className="py-2 basis-1/2 ">
                <img
                  src="http://riser.com.mx/wp-content/uploads/2020/01/productos1-1.png"
                  alt=""
                  className="w-1/3 mt-2 m-auto"
                />
              </div>
              <div className="py-2  basis-1/2">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                    Sistemas Top Drive desde 250 t hasta 1000 t, hidráulico o
                    eléctrico
                  </li>
                  <li className="pb-1">
                    Unión giratoria desde 150 t hasta 750 t
                  </li>
                  <li className="pb-1">Ancla del cable</li>
                  <li className="pb-1">Malacates</li>
                  <li className="pb-1">Sistema Casing Running Tool</li>
                  <li className="pb-1">Sistema anticolisión</li>
                </ol>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex text-justify flex-col px-10 md:flex-row ">
              <div className="py-2 basis-1/3 ">
                <img
                  src="http://riser.com.mx/wp-content/uploads/2020/01/productos2.png"
                  alt=""
                  className="w-full my-auto"
                />
              </div>
              <div className="py-2 basis-1/3 ">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">Bombas de lodo</li>
                  <li className="pb-1">
                    Refacciones para hidráulica y mecánica de bombas de lodo
                  </li>
                  <li className="pb-1">Cámara de pulsaciones</li>
                  <li className="pb-1">Válvula de seguridad</li>
                  <li className="pb-1">Conexiones para manifold de bombas</li>
                  <li className="pb-1">Válvulas para manifold de bombas</li>
                </ol>
              </div>
              <div className="py-2  basis-1/3">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">Bombas centrifugas</li>
                  <li className="pb-1">Agitadores</li>
                  <li className="pb-1">Separador gas-lodo</li>
                  <li className="pb-1">Equipo de control de sólidos</li>
                  <li className="pb-1">
                    Mallas para equipos de control de sólidos (NOV, MI-SWACO,
                    DERRICK) en todas las medidas API
                  </li>
                </ol>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex text-justify flex-col px-10 md:flex-row ">
              <div className="py-2 basis-1/3 ">
                <img
                  src="http://riser.com.mx/wp-content/uploads/2020/01/productos3.png"
                  alt=""
                  className="w-full my-auto"
                />
              </div>
              <div className="py-2 basis-1/3 ">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">Preventores (7 1/16” 5M – 26 ¾” 15M)</li>
                  <li className="pb-1">Carretes de control (5M – 15M)</li>
                  <li className="pb-1">
                    Válvulas hidráulicas y de compuerta (1 13/16” – 7 1/16”,
                    desde 2M hasta 15M)
                  </li>
                  <li className="pb-1">Actuadores hidráulicos y neumáticos</li>
                  <li className="pb-1">
                    Válvulas esféricas desde 2” hasta 36”, ASME 150 a 900 y ASME
                    150 a 1500
                  </li>
                </ol>
              </div>
              <div className="py-2  basis-1/3">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                    Estranguladores positivos, hidráulicos y ajustables desde 2
                    1/16” a 5 1/8”, de 5M a 15M
                  </li>
                  <li className="pb-1">
                    Ensambles de estrangulación 5M hasta 20M para ambiente H2S
                  </li>
                  <li className="pb-1">Cabezales de Pozo desde 5M a 20M</li>
                  <li className="pb-1">Bolas colgadoras</li>
                  <li className="pb-1">Adaptadores de cabezales</li>
                  <li className="pb-1">Válvulas de Seguridad de Superficie</li>
                  <li className="pb-1">Cabezal de flujo</li>
                </ol>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex text-justify flex-col px-10 md:flex-row ">
              <div className="py-2 basis-1/3 ">
                <img
                  src="http://riser.com.mx/wp-content/uploads/2020/01/productos4.png"
                  alt=""
                  className="w-full my-auto"
                />
              </div>
              <div className="py-2 basis-1/3 ">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">Preventores (7 1/16” 5M – 26 ¾” 15M)</li>
                  <li className="pb-1">Carretes de control (5M – 15M)</li>
                  <li className="pb-1">
                    Válvulas hidráulicas y de compuerta (1 13/16” – 7 1/16”,
                    desde 2M hasta 15M)
                  </li>
                  <li className="pb-1">Actuadores hidráulicos y neumáticos</li>
                  <li className="pb-1">
                    Válvulas esféricas desde 2” hasta 36”, ASME 150 a 900 y ASME
                    150 a 1500
                  </li>
                </ol>
              </div>
              <div className="py-2  basis-1/3">
                <ol className="text-md list-disc md:ml-10 pt-3">
                  <li className="pb-1">
                    Estranguladores positivos, hidráulicos y ajustables desde 2
                    1/16” a 5 1/8”, de 5M a 15M
                  </li>
                  <li className="pb-1">
                    Ensambles de estrangulación 5M hasta 20M para ambiente H2S
                  </li>
                  <li className="pb-1">Cabezales de Pozo desde 5M a 20M</li>
                  <li className="pb-1">Bolas colgadoras</li>
                  <li className="pb-1">Adaptadores de cabezales</li>
                  <li className="pb-1">Válvulas de Seguridad de Superficie</li>
                  <li className="pb-1">Cabezal de flujo</li>
                </ol>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
