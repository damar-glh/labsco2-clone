import { useParams } from 'react-router'
import ServiceHeroSection from '@/components/service/service-hero-section.tsx'
import servicesHeroData from '@/data/services-hero-data'

const Service = () => {
  const { serviceKey } = useParams<{ serviceKey: string }>()
  const serviceHero = servicesHeroData.find((service) => service.key === serviceKey)
  if (!serviceHero) return null
  return <ServiceHeroSection serviceHero={serviceHero} />
}

export default Service
