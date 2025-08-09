import Email from '@/assets/svg/email.svg?react'
import Phone from '@/assets/svg/phone.svg?react'
import Pin from '@/assets/svg/pin.svg?react'

const Contact = () => {
  return (
    <section className="w-full bg-bg-primary mt-20" id="contact">
      <div className="lg:mx-28 mx-10 flex flex-col gap-16 py-24">
        <div className="md:flex justify-between">
          <h1 className="text-5xl font-family-heading font-bold mb-10">Contact Us</h1>
          <div className="flex sm:gap-20 gap-10 justify-center items-center md:mt-0 mt-10">
            <a
              href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A"
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-bg-primary">
              <Pin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@co2labs.com"
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-bg-primary">
              <Email />
            </a>
            <a
              href="tel:+1234567890"
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-bg-primary">
              <Phone />
            </a>
          </div>
        </div>
        <div className="lg:flex xl:gap-24 gap-5 lg:justify-between">
          <form className="bg-white flex flex-col justify-center md:p-14 p-5 lg:w-1/2 gap-5 rounded-xl shadow-xl">
            <h2 className="text-2xl font-generalsans-semibold">Hi there, how can we help?</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="px-8 py-3 rounded-lg bg-gray-200 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-8 py-3 rounded-lg bg-gray-200 w-full"
            />
            <textarea
              placeholder="Your Message"
              className="px-8 py-3 rounded-lg bg-gray-200 w-full h-24"></textarea>
            <h5 className="text-xl font-generalsans-semibold">Where Did You Hear About Us?</h5>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" id="LinkedIn" value="LinkedIn" />
                <label htmlFor="LinkedIn">LinkedIn</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Instagram" value="Instagram" />
                <label htmlFor="Instagram">Instagram</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Instagram" value="Instagram" />
                <label htmlFor="Instagram">Instagram</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Job Ads" value="Job Ads" />
                <label htmlFor="Job Ads">Job Ads</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="Other" value="Other" />
                <label htmlFor="Other">Other</label>
              </div>
            </div>
            <button
              type="submit"
              className="text-bg-primary bg-slate-800 rounded-md py-2 px-4 font-generalsans-medium shadow-custom-drop block self-start">
              Send
            </button>
          </form>
          <div className="lg:w-1/2">
            <iframe
              className="w-full h-full rounded-xl lg:mt-0 mt-10"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.2397810985035!2d103.79109687732706!3d1.2762577953895673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e1!3m2!1sen!2sid!4v1754720142706!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
