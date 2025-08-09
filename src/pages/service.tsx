import { useParams } from 'react-router'
import ServiceHeroSection from '@/components/service/service-hero-section.tsx'
import servicesHeroData from '@/data/services-hero-data'

const Service = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const serviceHero = servicesHeroData.find((service) => service.key === serviceId)

  return (
    <>
      <ServiceHeroSection serviceHero={serviceHero} />
    </>
  )
}

export default Service
