import type React from 'react'
import type { TeamCardProps } from '@/types/team.ts'

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
      <div className="flex justify-center lg:-mt-24">
        <div className="shadow-lg rounded-full w-48 h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={member.avatar}
            alt={`${member.name} avatar`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-2xl text-black font-generalsans-semibold text-center">{member.name}</h3>
      <p className="text-bases font-generalsans-semibold text-center">{member.position}</p>
      <p className="italic text-center mt-2 text-xs">{member.description}</p>
    </div>
  )
}

export default TeamCard
