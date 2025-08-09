import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    link: string
  }
}

export type { ServiceCardProps }
