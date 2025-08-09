import type React from 'react'
import { Button } from '@/components/ui/button.tsx'
import type { ServiceCardProps } from '@/types/service.ts'

// @ts-ignore
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="h-96 w-72 bg-bg-primary rounded-xl p-7 shadow-custom-drop flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-5">
        <service.icon className="w-10 h-10 text-gray-700" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-xl text-center font-generalsans-semibold text-gray-900">
          {service.title}
        </h5>
        <p className="text-base my-5 text-center font-generalsans-medium">{service.description}</p>
        <Button type="button" className="bg-transparent">
          <a
            href={service.link}
            target="_self"
            rel="noopener noreferrer"
            className="font-semibold text-base hover:text-blue-900 text-black transition-colors underline">
            View More
          </a>
        </Button>
      </div>
    </div>
  )
}

export default ServiceCard
