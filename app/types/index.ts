export type ThemeName = 'mystic' | 'sakura' | 'capybara'

export type QuestionCategory = 'love' | 'career' | 'health' | 'general'

export interface ZodiacSign {
  name: string
  symbol: string
  element: string
  dateRange: { startMonth: number; startDay: number; endMonth: number; endDay: number }
  traits: string[]
  tarotAdvice: string
}

export interface TarotCard {
  id: number
  name: string
  nameZh: string
  arcana: 'major' | 'minor'
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles'
  number?: number
  zodiacLink?: string
  keywords: string[]
  meanings: {
    [K in QuestionCategory]: {
      upright: string
      reversed: string
    }
  }
}

export interface DrawnCard {
  card: TarotCard
  isReversed: boolean
  isFlipped: boolean
  position?: 'past' | 'present' | 'future'
}

export interface SpreadTemplate {
  position: 'past' | 'present' | 'future'
  label: string
  labelZh: string
  description: string
}
