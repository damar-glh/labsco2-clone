import TeamCard from '@/components/home/team-card.tsx'
import { teamMembers } from '@/data/team-data.ts'

const TeamSection = () => {
  return (
    <section className="lg:mx-28 lg:my-0 my-20 flex flex-col justify-center">
      <div className="flex justify-between lg:mb-32 mb-20 lg:mx-0 mx-10">
        <h2 className="text-5xl font-bold font-family-heading">Our Team</h2>
      </div>
      <div className="lg:flex gap-5">
        {teamMembers.map((members) => (
          <TeamCard key={members.name} member={members} />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
