import ServiceCard from '@/components/home/service-card.tsx'
import servicesData from '@/data/services-data'

const ServicesSection = () => {
  return (
    <section className="bg-slate-800 flex items-center justify-center py-20 lg:py-40 w-full mx-auto">
      <div className="max-w-8xl flex flex-col gap-5 px-6 lg:px-12 xl:px-20">
        <h2 className="text-5xl font-bold sm:text-center xl:text-left text-bg-primary">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
