import HomeSlider from "../components/HomeSlider"
import WhoWeAre from "../components/WhoWeAre"
import NavBar from "../components/NavBar"
import OurServies from "../components/OurServices"
import CarouselArticles from "../components/CarouselArticles"
import Community from "../components/Community"
import Footer from "../components/Footer"
import CompareSlider from "../components/CompareSlider"

const LandingPage = () => {
  return (
    <>

      <NavBar/>
      <HomeSlider/>
      <WhoWeAre/>        
      <OurServies/>
      <CarouselArticles/>
      <CompareSlider/>
      <Community/>
      <Footer/>

    </>
  )
}

export default LandingPage