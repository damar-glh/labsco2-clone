interface ServiceCard {
  icon: React.Component
  title: string
  description: string
  link: string
}

interface ServiceCardProps {
  service: ServiceCard
}

export type { ServiceCardProps }
