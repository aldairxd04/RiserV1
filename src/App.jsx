import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layouts/HomeLayout"
import LandingPage from "./pages/LandingPage"
import Services from "./pages/Services"
import Articles from "./pages/Articles"
import ContactPage from "./pages/ContactPage"
import Blog1 from "./pages/Blog1"
import ContactFormPage from "./pages/ContactFormPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<LandingPage/>} />
          <Route path="servicios" element={<Services/>} />
          <Route path="articulos" element={<Articles/>} />
          <Route path="contacto" element={<ContactPage/>} />
          <Route path="contacto/formulario" element={<ContactFormPage/>} />
          <Route path="blog-1" element={<Blog1/>} />
        </Route>    
        {/* Rutas privadas */}
        <Route>


        </Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
