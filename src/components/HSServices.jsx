import { Link } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HSServices() {
  return (
    <div className="isolate bg-cover bg-center bg-[url('/assets/Imagen03.jpg')]">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className=" max-w-3xl mx-auto pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="flex md:items-center flex-col md:text-center">
              <h1 className=" mt-10 text-4xl font-bold text-white uppercase tracking-tight sm:text-center sm:text-5xl">
                El único sistema de pruebas de esfuerzos para sistemas Top Drive
                en América Latina.
              </h1>
              <Link
                to="/contacto"
                className="inline-flex items-center mt-5 md:ml-8  md:w-1/5 w-1/2 text-center md:px-8 px-10 py-3 border text-sm font-medium rounded-full 
                shadow-sm text-slate-900 border-[#FF6900] bg-white/40 hover:border-[#FF6900] hover:bg-[#FF6900] focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#2DCCD3] transition duration-500"
              >
                <p className="m-auto">Contáctanos</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
