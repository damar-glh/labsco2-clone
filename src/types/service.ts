import type { LucideIcon } from 'lucide-react'

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

interface ServiceCardProps {
  service: ServiceCard
}

export type { ServiceCardProps }
