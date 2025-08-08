import { Button } from '@/components/ui/button.tsx'
import FooterSection from '@/components/footer/section.tsx'
import { servicesData, aboutData, contactData } from '@/data/footer.ts'

const Footer = () => {
  return (
    <footer className="w-full bg-bg-dark text-white pt-20 pb-10 lg:px-28 px-10">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex-1 lg:flex-[2] gap-5">
          <h3 className="font-family text-4xl font-bold">
            Let's Grow With CO2 Labs
          </h3>
          <h5 className="font-family text-xl font-bold mt-2 mb-6">
            Get Exclusive Updates From Us
          </h5>
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 max-w-md w-full">
            <input
              type="email"
              placeholder="Yourmail@example.com"
              className="flex-1 py-2 px-5 sm:rounded-l-full rounded-full sm:rounded-r-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Button
              className="bg-yellow-500 py-3 px-6 sm:rounded-r-full rounded-full sm:rounded-l-none font-semibold text-black whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between xl:ml-0 lg:ml-10 flex-wrap gap-10 lg:mt-0 mt-20">
          <FooterSection title="Services" items={servicesData} />
          <FooterSection title="About" items={aboutData} />
          <FooterSection title="Contact" items={contactData} isContact={true} />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse justify-between mt-10">
        <span className="font-family text-base font-medium text-[#888]">©2024 CO2 Labs. All Right Reserved</span>
        <div className="flex gap-10 sm:mb-0 mb-5">
          <a href="/faq" className="font-family text-base font-medium text-[#888]">
            FAQ
          </a>
          <a href="/terms" className="font-family text-base font-medium text-[#888]">
            Terms & Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer