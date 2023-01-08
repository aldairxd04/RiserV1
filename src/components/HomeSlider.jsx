import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";


const bogliasco = "/assets/risr5.jpg";
const countyClare = "/assets/risr6.jpg";
const craterRock = "/assets/risr4.jpg";

export default function HomeSlider() {
  return (
    <HeroSlider className="pt-20"
      height={"90vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <div className="flex justify-center flex-col w-full h-full">
          <div className="p-0 uppercase w-full text-center text-[3.5rem]">
            <h1 className="text-black font-semibold uppercase">Rig Services & engineering</h1>
            
          </div>
          <div className="p-0 w-full text-center text-[1.75rem]"> 
            <h2 className="text-black font-semibold">
              Manteinimento a equipos y componentes críticos
            </h2>
          </div>
        </div>
      </Overlay>

      <Slide
        shouldRenderMask
        
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <Slide
        shouldRenderMask
        
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        
        background={{
          backgroundImageSrc: countyClare
        }}
      />


      <MenuNav />
    </HeroSlider>
  );
}

