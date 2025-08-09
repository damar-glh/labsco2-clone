import type React from 'react'
import backdrop from '@/assets/image/backdrop.png'
import Com from '@/assets/image/com.png'
import type { serviceHeroProps } from '@/types/service-hero'

const serviceHeroSection: React.FC<serviceHeroProps> = ({ serviceHero }) => {
  return (
    <section className="w-full min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">
        <div className="flex-1 max-w-5xl order-2 lg:order-1 lg:w-2/3 text-left px-6 lg:px-28 lg:ml-0 ml-8">
          <div className="-mb-11 -ml-11">
            <img
              src={Com}
              alt="Com"
              className="w-20 h-20 lg:w-24 lg:h-24 object-cover object-center"
            />
          </div>
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">{serviceHero.title}</h1>
          <p className="text-lg lg:text-xl my-5 leading-relaxed">“{serviceHero.description}”</p>
          <div className="bg-black h-1 w-40"></div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 items-center w-full relative min-h-[300px] lg:min-h-[500px]">
          <img
            src={backdrop}
            alt="Backdrop"
            className="absolute right-0 w-2/3 sm:w-1/2 lg:w-[400px] object-cover object-right"
          />
          <img
            src={serviceHero.image}
            alt="Heroimg"
            className="lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default serviceHeroSection
