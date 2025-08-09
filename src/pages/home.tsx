import AboutSection from '@/components/home/about-section.tsx'
import AceSection from '@/components/home/ace-section.tsx'
import Contact from '@/components/home/contact.tsx'
import HeroSection from '@/components/home/hero-section.tsx'
import Portfolio from '@/components/home/portfolio.tsx'
import ServicesSection from '@/components/home/services-section.tsx'
import TeamSection from '@/components/home/team-section.tsx'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AceSection />
      <AboutSection />
      <TeamSection />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home
