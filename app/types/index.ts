import type { TarotCard } from '~/data/majorArcana'
import type { ZodiacSign } from '~/data/zodiac'

export type { TarotCard }
export type { ZodiacSign }

export type ThemeName = 'mystic' | 'sakura' | 'capybara'

export type QuestionCategory = 'love' | 'career' | 'wealth' | 'health' | 'general'

export interface DrawnCard {
  card: TarotCard
  isReversed: boolean
  isFlipped: boolean
  position?: 'past' | 'present' | 'future'
}

export type { SpreadTemplate } from '~/data/spreadTemplates'
