import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


export default function CarouselArticles() {
  return (
    <div className="bg-white   ">


      {/* Overlapping cards */}
      <section
        className="  relative z-10 mx-auto  max-w-7xl px-4  sm:px-6 lg:px-12 "
        aria-labelledby="contact-heading" id="somos"
      >
        <div className=" grid grid-rows-1 gap-y-20 py-6 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 ">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={4000}
          centerMode={false}
          className="md:mt-1 mt-10"
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover

          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="max-w-sm overflow-hidden hover:shadow-lg pt-5 border border-transparent border-l-[#98784A] hover:bg-white hover:bg-opacity-30">
            <img
              className="p-8 w-full md:h-[214px]"
              src="https://cdn-3.expansion.mx/38/91/c7ee9a2e47fc96736348a5dbf893/istock-1161679863-1.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-7 ">
              <p className=" text-sm font-bold uppercase tracking-widest text-black">
                10 consejos para mantener la integridad del Top Drive.
              </p>
              <div className="my-5 text-2xl  font-semibold ">
                <a
                  className="group underline-text-animation-a text-black "
                  href="#"
                >
                  <span className="underline-text-animation-span-to-r">
                    Mejores prácticas para mantener la integridad del Top Drive
                    de un Equipo de Perforación.
                  </span>
                </a>
              </div>
              <div className="mb-20 text-lg uppercase tracking-widest font-semibold">
                <Link
                  className="group underline-text-animation-a text-black"
                  to="/blog-1"
                >
                  <span className="underline-text-animation-span-to-l">
                    Leer más
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded pt-5 overflow-hidden hover:shadow-lg border border-transparent border-l-[#98784A] hover:bg-white hover:bg-opacity-30">
            <img
              className="p-8 w-full md:h-[214px]"
              src="https://cdn.forbes.com.mx/2015/08/Reuters-Pemex-petroleo-e1494022291615-640x360.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-7 ">
              <p className=" text-sm font-bold uppercase tracking-widest text-black">
                Recertificación de equipos dentro de la Industria Petrolera
              </p>
              <div className="my-5 text-2xl  font-semibold ">
                <a
                  className="group underline-text-animation-a text-black "
                  href="#"
                >
                  <span className="underline-text-animation-span-to-r">
                    Ventajas de la recertificación de equipos en la industria
                    petrolera.
                  </span>
                </a>
              </div>
              <div className="mb-20 text-lg uppercase tracking-widest font-semibold">
                <a
                  className="group underline-text-animation-a text-black"
                  href="#"
                >
                  <span className="underline-text-animation-span-to-l">
                    próximamente.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded pt-5  overflow-hidden hover:shadow-lg border border-transparent border-l-[#98784A] hover:bg-white hover:bg-opacity-30">
            <img
              className="p-8 w-full md:h-[214px]"
              src="https://cdn.forbes.com.mx/2015/08/Reuters-Pemex-petroleo-e1494022291615-640x360.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-7 ">
              <p className=" text-sm font-bold uppercase tracking-widest text-black">
                Sistemas anticolisión en los equipos de perforación
              </p>
              <div className="my-5 text-2xl  font-semibold ">
                <a
                  className="group underline-text-animation-a text-black "
                  href="#"
                >
                  <span className="underline-text-animation-span-to-r">
                    Ventajas de utilizar sistemas anticolisión en equipos de
                    perforación.
                  </span>
                </a>
              </div>
              <div className="mb-20 text-lg uppercase tracking-widest font-semibold">
                <a
                  className="group underline-text-animation-a text-black"
                  href="#"
                >
                  <span className="underline-text-animation-span-to-l">
                    próximamente.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded pt-5 overflow-hidden hover:shadow-lg border border-transparent border-l-[#98784A] hover:bg-white hover:bg-opacity-30">
            <img
              className="p-8 w-full md:h-[214px]"
              src="https://cdn.forbes.com.mx/2015/08/Reuters-Pemex-petroleo-e1494022291615-640x360.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-7 ">
              <p className=" text-sm font-bold uppercase tracking-widest text-black">
                Equipos de perforación
              </p>
              <div className="my-5 text-2xl  font-semibold ">
                <a
                  className="group underline-text-animation-a text-black "
                  href="#"
                >
                  <span className="underline-text-animation-span-to-r">
                    Cómo se clasifican los equipos de perforación en la
                    industria de hidrocarburos.
                  </span>
                </a>
              </div>
              <div className="mb-20 text-lg uppercase tracking-widest font-semibold">
                <a
                  className="group underline-text-animation-a text-black"
                  href="#"
                >
                  <span className="underline-text-animation-span-to-l">
                    próximamente.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
        </div>
      </section>
    </div>
  );
}
