import AboutSection from '@/components/home/about-section.tsx'
import AceSection from '@/components/home/ace-section.tsx'
import HeroSection from '@/components/home/hero-section.tsx'
import ServicesSection from '@/components/home/services-section.tsx'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AceSection />
      <AboutSection />
    </>
  )
}

export default Home
