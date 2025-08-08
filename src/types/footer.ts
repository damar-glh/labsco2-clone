import type { LucideIcon } from 'lucide-react'

interface FooterItem {
  label?: string
  text?: string
  href?: string
  icon?: LucideIcon
}

interface FooterSectionProps {
  title: string
  items: FooterItem[]
  isContact?: boolean
}

export type { FooterItem, FooterSectionProps }