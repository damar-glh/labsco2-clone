import { X } from 'lucide-react'
import { Link } from 'react-router'
import { Cta } from '@/components/header/cta.tsx'
import { Button } from '@/components/ui/button.tsx'
import { menuItems, ourServices } from '@/data/services.ts'

interface MobileProps {
  isOpen: boolean
  onClose: () => void
}

export const Mobile = ({ isOpen, onClose }: MobileProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-bg-primary shadow-xl z-40 p-4 lg:hidden">
      <Button className="bg-transparent border-none my-2" onClick={onClose} aria-label="Close Menu">
        <X className="text-bg-dark/80 size-10" strokeWidth={3} />
      </Button>
      <div className="p-4">
        <div className="mb-6">
          <h3 className="font-generalsans-medium text-lg bg-gray-100 text-gray-800 p-3 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {ourServices.map((service) => {
              const IconComponent = service.icon as any
              return (
                <li key={service.title}>
                  <Link
                    to={service.to}
                    className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={onClose}>
                    <div
                      className={`w-8 h-8 rounded-md flex justify-center items-center ${service.backgroundColor}`}>
                      {IconComponent && <IconComponent className="size-4" />}
                    </div>
                    <span className="text-base font-generalsans-medium text-gray-700 underline">
                      {service.title}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mb-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to || '#'}
                  className="block font-generalsans-medium text-lg bg-gray-100 text-gray-800 p-3 mb-4"
                  onClick={onClose}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Cta />
      </div>
    </div>
  )
}
