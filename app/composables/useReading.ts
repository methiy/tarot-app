import type { DrawnCard, QuestionCategory } from '~/types'
import type { ZodiacSign } from '~/data/zodiac'
import { categoryKeywords } from '~/data/keywords'
import { spreadTemplates } from '~/data/spreadTemplates'

export function useReading() {
  function classifyQuestion(question: string): QuestionCategory {
    const q = question.toLowerCase()
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(k => q.includes(k))) return category as QuestionCategory
    }
    return 'general'
  }

  function getCardMeaning(drawn: DrawnCard, category: QuestionCategory): string {
    const direction = drawn.isReversed ? 'reversed' : 'upright'
    const meanings = drawn.card.meanings as Record<string, { upright: string; reversed: string }>
    return meanings[category]?.[direction] ?? meanings.general[direction]
  }

  function getKeywords(drawn: DrawnCard): string {
    const kw = drawn.isReversed ? drawn.card.keywords.reversed : drawn.card.keywords.upright
    return kw.join('、')
  }

  function generateSingleReading(
    card: DrawnCard,
    category: QuestionCategory,
    zodiac: ZodiacSign | null,
  ) {
    const direction = card.isReversed ? '逆位' : '正位'
    const meaning = getCardMeaning(card, category)
    const keywords = getKeywords(card)

    let zodiacNote = ''
    if (zodiac) {
      if (card.card.zodiacLink === zodiac.name) {
        zodiacNote = `✨ 命运共鸣：${card.card.name}与你的星座${zodiac.symbol}${zodiac.name}产生了深层共鸣！作为${zodiac.name}，你${zodiac.traits.slice(0, 2).join('、')}的特质将在此次指引中发挥重要作用。`
      } else {
        zodiacNote = `${zodiac.symbol} 作为${zodiac.name}，你${zodiac.traits.slice(0, 2).join('、')}的天性会影响你对这张牌的感悟。`
      }
    }

    return {
      cardName: card.card.name,
      cardNameEn: card.card.nameEn,
      direction,
      keywords,
      meaning,
      zodiacNote,
    }
  }

  function generateThreeCardReading(
    cards: DrawnCard[],
    category: QuestionCategory,
    zodiac: ZodiacSign | null,
  ) {
    const positionLabels: Record<string, string> = {
      past: '过去',
      present: '现在',
      future: '未来',
    }

    const cardReadings = cards.map((drawn) => ({
      position: positionLabels[drawn.position ?? 'present'],
      cardName: drawn.card.name,
      cardNameEn: drawn.card.nameEn,
      direction: drawn.isReversed ? '逆位' : '正位',
      keywords: getKeywords(drawn),
      meaning: getCardMeaning(drawn, category),
    }))

    // Find matching spread template
    const pattern = cards.map(c => c.isReversed ? 'reversed' : 'upright').join('-')
    const template = spreadTemplates.find(t => t.pattern === pattern) ?? spreadTemplates[0]

    const synthesis = `${template.opening}${template.transition}${template.conclusion}`

    let zodiacNote = ''
    if (zodiac) {
      const resonance = cards.find(c => c.card.zodiacLink === zodiac.name)
      if (resonance) {
        zodiacNote = `✨ 命运共鸣：${resonance.card.name}与你的星座${zodiac.symbol}${zodiac.name}产生了深层共鸣！这张牌在本次占卜中的指引对你尤为重要。`
      } else {
        zodiacNote = `${zodiac.symbol} 作为${zodiac.name}，你${zodiac.traits.slice(0, 2).join('、')}的特质为这次占卜增添了独特的色彩。`
      }
    }

    return { cardReadings, synthesis, zodiacNote }
  }

  return { classifyQuestion, generateSingleReading, generateThreeCardReading }
}
