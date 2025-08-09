import PortfolioCard from '@/components/home/portfolio-card.tsx'
import { portfolioData } from '@/data/portfolio-data'

const Portfolio = () => {
  return (
    <section className="w-full bg-slate-800 mt-20" id="portfolio">
      <div className="lg:px-28 px-10 py-20">
        <h1 className="text-5xl font-family-heading text-bg-primary font-bold mb-10">
          Our Portfolio
        </h1>
        <div className="flex flex-wrap  justify-center gap-8">
          {portfolioData.map((portfolio) => (
            <PortfolioCard key={portfolio.title} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
