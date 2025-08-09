import Waypoints from '@/assets/svg/branch-menu-services.svg?react'
import CodeXml from '@/assets/svg/code-xml-menu-services.svg?react'
import Diamond from '@/assets/svg/diamond-menu-services.svg?react'
import SlidersHorizontal from '@/assets/svg/tree-slider-menu-services.svg?react'
import type { MenuItem, OurServicesProps } from '@/types/nav.ts'

// @ts-ignore
export const ourServices: OurServicesProps[] = [
  {
    title: 'Website Maintenance',
    to: '/service/web-main',
    icon: SlidersHorizontal,
    backgroundColor: 'bg-red-100',
    description: 'Keep your website running smoothly and securely.',
  },
  {
    title: 'Website & App Development',
    to: '/service/web-dev',
    icon: CodeXml,
    backgroundColor: 'bg-yellow-100',
    description: 'Transform your online presence with our custom platform design solutions.',
  },
  {
    title: 'IT Support',
    to: '/service/it-support',
    icon: Waypoints,
    backgroundColor: 'bg-green-100',
    description: 'Experience peace of mind with our reliable IT support services.',
  },
  {
    title: '3rd Party AI Integrations',
    to: '/service/ai-integration',
    icon: Diamond,
    backgroundColor: 'bg-purple-100',
    description: 'Leverage our expertise to find the best third-party services for your business.',
  },
]

export const menuItems: MenuItem[] = [
  { title: 'About Us', to: 'about' },
  { title: 'Portfolio', to: 'portfolio' },
  { title: 'Contact', to: 'contact' },
]
