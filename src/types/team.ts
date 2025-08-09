interface TeamMember {
  name: string
  position: string
  description: string
  avatar?: string
}

interface TeamCardProps {
  member: TeamMember
}

export type { TeamCardProps }
