interface AceCard {
  title: string
  titleContinued: string
  description: string
  details: string[]
  backgroundColor?: string
}

interface AceCardProps {
  ace: AceCard
}

export type { AceCardProps }
