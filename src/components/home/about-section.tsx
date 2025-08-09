import aboutImg from '@/assets/image/about-img.png'
import Line from '@/assets/svg/line.svg?react'

const AboutSection = () => {
  return (
    <section className="lg:min-h-screen flex items-center mb-40" id="about">
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:mx-28 mx-10 gap-20 lg:mt-0 mt-20">
          <div className="w-full lg:w-1/2 lg:text-right flex flex-col lg:items-end items-center justify-center lg:gap-11 gap-5">
            <h1 className="text-5xl font-bold text-black">About Us</h1>
            <p className="text-xl font-generalsans-medium">
              At CO2 Labs, we strive to provide simple yet powerful software solutions and expert
              consultation to help your business thrive in the digital world.
            </p>
            <Line className="xl:w-[600px] w-full" />
          </div>
          <div className="w-full lg:w-1/2">
            <img src={aboutImg} alt="About Us" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
