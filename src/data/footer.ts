import { Mail, Phone, MapPin } from 'lucide-react'

const servicesData = [
  { label: "Web Maintenance", href: "/service/web-main" },
  { label: "Web & App Development", href: "/service/web-dev" },
  { label: "IT Service", href: "/service/it-support" },
  { label: "3rd Party AI Solution", href: "/service/ai-integration" }
]

const aboutData = [
  { label: "Our Approach", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Portfolio", href: "/portfolio" }
]

const contactData = [
  { icon: Phone, text: '+65-8118-1595' },
  { icon: Mail, text: 'info@co2labs.com' },
  { icon: MapPin, text: '100D Pasir Panjang Road' }
]

export { servicesData, aboutData, contactData }