import AceCard from '@/components/home/ace-card.tsx'
import aceData from '@/data/ace-data.ts'

const AceSection = () => {
  return (
    <section className="flex flex-col w-full bg-bg-primary xl:h-screen h-full gap-10 mt-20">
      <div className="text-center">
        <h1 className="text-5xl font-black text-black">ACE</h1>
        <p className="text-2xl font-generalsans-semibold mt-5">
          Methodology for Strategic Consulting
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        {aceData.map((item) => (
          <AceCard
            key={item}
            title={item.title}
            titleContinued={item.titleContinued}
            description={item.description}
            details={item.details}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </section>
  )
}

export default AceSection
