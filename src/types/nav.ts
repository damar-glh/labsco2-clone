import type { LucideIcon } from 'lucide-react'

export interface MenuItem {
  title: string
  to: string
}

export interface OurServicesProps {
  title: string
  to: string
  icon: LucideIcon
  backgroundColor: string
  description: string
}
