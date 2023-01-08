

export default function Community() {
  return (
    <div className="bg-gray-100 md:mb-0 sm:mb-20 lg:mt-0 xl:mt-0">
      {/* Header */}
      <div className="relative bg-white ">
        <div className="relative mx-auto max-w-7xl py-12 px-4  sm:px-6 lg:px-8">

        </div>
      </div>

      {/* Overlapping cards */}
      <section id="comunidad"
        className="relative lg:ml-40 z-10 mx-auto md:-mt-32 -mt-28 max-w-7xl lg:mx-[5rem] px-4 md:pb-32 sm:px-6 lg:right-3 sm:mb-0 mb-[32rem]"
        aria-labelledby="contact-heading">
        <div className="grid md:px-10 grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 mt-16">
          
          <div  className="flex md:flex-row absolute sm:relative flex-col bg-cover bg-[url('/assets/risr3.png')] shadow-xl">
            <div className="ml-12 max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <div className='border-l-4 pb-4 border-[#2DCCD3] mb-8 '>
                    <p className="pl-4 pb-0 mt-4 text-base font-normal uppercase tracking-widest text-white">Comunidad</p>
              </div>
              <div>
                <h2 className="inline text-3xl font-bold tracking-tight text-white sm:block sm:text-4xl">
                  Registrate gratis y enterate de
                </h2>
              </div>
              <div>
              <p className="inline text-3xl font-bold tracking-tight text-[#FF6900] sm:block sm:text-4xl">
                nuestras ultimas publicaciones.
              </p>
              </div>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
                  placeholder="Introduce tu email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium transition duration-500
                      focus:outline-none focus:ring-2  focus:ring-offset-2 text-slate-900 bg-[#FF6900] hover:bg-[#2DCCD3] focus:ring-[#2DCCD3]"
                  >
                    Notifícame
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
