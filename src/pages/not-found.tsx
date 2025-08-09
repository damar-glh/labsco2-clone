import { Instagram, Mail, Phone } from 'lucide-react'
import Logo from '@/assets/logo.webp'
import { Button } from '@/components/ui/button.tsx'

const NotFound = () => {
  const handleBackClick = () => {
    window.history.back()
  }
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-5 bg-bg-primary">
      <img src={Logo} alt="CO2 Labs Logo" className="w-20" />
      <h2 className="text-gray-800 text-xl font-generalsans-semibold">Something's missing.</h2>
      <div className="text-9xl font-bold text-gray-800 font-generalsans-medium">404</div>
      <p className="text-gray-400 mx-5 text-xl font-generalsans-medium">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Button
        className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2"
        onClick={handleBackClick}>
        Bring me back ←
      </Button>
      <div className="flex flex-wrap justify-center gap-5  text-gray-800">
        <a href="http://" className="flex items-center gap-2">
          <Instagram className="w-4 h-4" />
          <span>@co2labs</span>
        </a>
        <a href="mailto:" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>support@co2labs.com</span>
        </a>
        <a href="tel:" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>081-123-456</span>
        </a>
      </div>
    </section>
  )
}

export default NotFound
