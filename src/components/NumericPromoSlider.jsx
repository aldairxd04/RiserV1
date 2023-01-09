import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NumericPromoSlider = () => {
  const CustomRight = ({ onClick }) => (
    <button
      className="absolute lg:left-56 left-40 md:left-36 top-0"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>

    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button
      className="absolute lg:left-56 left-40 md:left-36 bottom-0"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>

    </button>
  );

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={4000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      customRightArrow={<CustomRight />}
      customLeftArrow={<CustomLeft />}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="max-w-sm">
        <div className="my-16 lg:ml-[88px] lg:md:text-[44px] md:text-[36px] uppercase text-center text-5xl  font-bold ">
          <a className="group hover:cursor-pointer underline-text-animation-a text-black ">
            <span className="underline-text-animation-span-to-r">
              Servicio Especializado
            </span>
          </a>
        </div>
      </div>

      <div className="max-w-sm ">
        <div className="my-16 lg:ml-32 uppercase text-center text-5xl  font-bold ">
          <a className="group hover:cursor-pointer underline-text-animation-a text-black ">
            <span className="underline-text-animation-span-to-r">
              Respuesta 24/7
            </span>
          </a>
        </div>
      </div>

      <div className="max-w-sm">
        <div className="my-16 lg:ml-32 uppercase text-center text-5xl  font-bold ">
          <a className="group hover:cursor-pointer underline-text-animation-a text-black ">
            <span className="underline-text-animation-span-to-r">
              Personal Confiable
            </span>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default NumericPromoSlider;
