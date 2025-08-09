import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

const ServiceCard = ({ icon: IconComponent, title, description, link }: ServiceCardProps) => {
  return (
    <div className="h-96 w-72 bg-bg-primary rounded-xl p-7 shadow-custom-drop flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-5">
        <IconComponent className="w-8 h-8 text-slate-700" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-xl text-center font-generalsans-semibold text-gray-900">{title}</h5>
        <p className="text-base my-5 text-center font-generalsans-medium">{description}</p>
        <Button type="button" className="bg-transparent">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-base hover:text-blue-900 text-black transition-colors underline">
            {link}
          </a>
        </Button>
      </div>
    </div>
  )
}

export default ServiceCard
