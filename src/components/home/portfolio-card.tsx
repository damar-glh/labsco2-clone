import type React from 'react'

interface Portfolio {
  title: string
  link: string
  image: string
}

interface PortfolioCardProps {
  portfolio: Portfolio
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <div className="md:w-64 w-96 overflow-hidden">
      <a
        href={portfolio.link}
        target="_self"
        rel="noopener noreferrer"
        className="group relative block rounded-xl overflow-hidden focus:outline-none">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img
            src={portfolio.image}
            alt={portfolio.title}
            className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
          />
        </div>
        <h2 className="text-bg-primary text-xl font-generalsans-semibold mt-3">
          {portfolio.title}
        </h2>
      </a>
    </div>
  )
}

export default PortfolioCard
