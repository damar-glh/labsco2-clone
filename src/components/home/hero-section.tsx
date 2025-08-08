import backdrop from '@/assets/image/backdrop.png'
import heroimg from '@/assets/image/heroimg.png'
import { Button } from '@/components/ui/button'

const heroSection = () => {
  return (
    <section className="w-full min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">
        <div className="flex-1 max-w-5xl order-2 lg:order-1 lg:w-2/3 text-left px-6 lg:px-28 lg:ml-0 ml-8">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">Where Code Meets</h1>
          <span className="bg-slate-800 text-bg-primary px-5 font-bold sm:text-5xl text-3xl font-family-heading">
            Creativity
          </span>
          <p className="text-lg lg:text-xl my-5 leading-relaxed">
            Harnessing the power of our Coding Collective to build solutions for your business
            needs.
          </p>
          <Button
            variant="default"
            className="bg-slate-800 rounded-md py-2 px-4 font-medium font-family shadow-custom-drop cursor-pointer text-base hover:scale-110 transition-all hover:shadow-slate-600 hover:shadow-md">
            Get a free consult
          </Button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 items-center w-full relative min-h-[300px] lg:min-h-[500px]">
          <img
            src={backdrop}
            alt="Backdrop"
            className="absolute right-0 w-2/3 sm:w-1/2 lg:w-[400px] object-cover object-right"
          />
          <img
            src={heroimg}
            alt="Heroimg"
            className="lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default heroSection
