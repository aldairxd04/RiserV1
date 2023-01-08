import { Link } from "react-router-dom"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HSServices() {

  return (
    <div className="isolate bg-cover bg-center bg-[url('/assets/risr7.jpg')]">
      
      <main>
        <div className="relative px-6 lg:px-8">
          <div className=" max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className='flex flex-col md:text-center'>
              

                <h1 className=" mt-10 text-4xl font-bold text-black md:text-[#FF6900] uppercase tracking-tight sm:text-center sm:text-5xl">
                 El único sistema de pruebas de esfuerzos para sistemas Top Drive en América Latina.
                </h1>
                <Link to="/contacto"
                className="inline-flex items-center mt-5 md:ml-8 md:w-1/5 w-1/3 md:px-8 px-8  py-3 border  text-sm font-medium rounded-full 
                shadow-sm text-slate-900 border-[#FF6900] bg-white hover:border-[#2DCCD3] hover:bg-[#2DCCD3] focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#2DCCD3] transition duration-500">
                  Contáctanos
                </Link>

              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
