/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface AceCardProps {
  title: string
  titleContinued: string
  description: string
  details: string[]
  backgroundColor?: string
}

const AceCard = ({
  title,
  titleContinued,
  description,
  details,
  backgroundColor,
}: AceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => setIsExpanded(!isExpanded)

  return (
    <div className="flex-1 group">
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="p-10 cursor-pointer"
        style={{ backgroundColor: backgroundColor }}
        onClick={toggleExpanded}>
        <div className="flex flex-col">
          <h1 className="font-generalsans-bold text-3xl text-black mb-3">{title}</h1>
          <p className="text-lg font-generalsans-medium">{titleContinued}</p>
          <div
            className={`
            transition-all duration-300 flex-1
            lg:hidden lg:group-hover:block
            ${isExpanded ? 'block' : 'hidden lg:block'}
          `}>
            <p className="font-generalsans-medium text-base my-5">{description}</p>
            <ul className="font-generalsans-medium text-base list-disc ml-5 leading-8">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-5">
            <ChevronDown
              className={`
                w-16 h-full text-gray-500 transition-transform duration-300
                lg:group-hover:rotate-180
                ${isExpanded ? 'rotate-180' : ''}
              `}
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AceCard
