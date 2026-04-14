import type { DrawnCard, ZodiacSign, QuestionCategory } from '~/types'
import { spreadTemplates, threeCardNarratives } from '~/data/spread-templates'

export function useReading() {
  const loveKeywords = ['爱', '恋', '感情', '对象', '暧昧', '分手', '复合', '婚', '伴侣', '喜欢', '心动', '缘分', 'love', 'relationship']
  const careerKeywords = ['工作', '事业', '升职', '跳槽', '面试', '薪', '职业', '公司', '项目', '考试', '学业', 'career', 'job', 'work']
  const healthKeywords = ['健康', '身体', '病', '医', '运动', '睡眠', '压力', '焦虑', '减肥', 'health', 'sick']

  function classifyQuestion(question: string): QuestionCategory {
    const q = question.toLowerCase()
    if (loveKeywords.some(k => q.includes(k))) return 'love'
    if (careerKeywords.some(k => q.includes(k))) return 'career'
    if (healthKeywords.some(k => q.includes(k))) return 'health'
    return 'general'
  }

  function getCardMeaning(drawn: DrawnCard, category: QuestionCategory): string {
    const direction = drawn.isReversed ? 'reversed' : 'upright'
    return drawn.card.meanings[category][direction]
  }

  function getDirectionLabel(isReversed: boolean): string {
    return isReversed ? '逆位' : '正位'
  }

  function getZodiacNote(drawn: DrawnCard | DrawnCard[], zodiac: ZodiacSign | null): string {
    if (!zodiac) return ''

    const cards = Array.isArray(drawn) ? drawn : [drawn]
    const resonanceCard = cards.find(c => c.card.zodiacLink === zodiac.name)

    if (resonanceCard) {
      return `✨ 命运共鸣：${resonanceCard.card.nameZh}与你的星座${zodiac.symbol}${zodiac.name}产生了深层共鸣！${zodiac.tarotAdvice}`
    }

    return zodiac.tarotAdvice
  }

  function generateSingleReading(
    card: DrawnCard,
    category: QuestionCategory,
    zodiac: ZodiacSign | null,
  ): { cardReading: string; zodiacNote: string } {
    const direction = getDirectionLabel(card.isReversed)
    const meaning = getCardMeaning(card, category)
    const keywords = card.card.keywords.join('、')

    const cardReading = `【${card.card.nameZh} · ${direction}】\n\n` +
      `关键词：${keywords}\n\n` +
      `${meaning}`

    const zodiacNote = getZodiacNote(card, zodiac)

    return { cardReading, zodiacNote }
  }

  function generateThreeCardReading(
    cards: DrawnCard[],
    category: QuestionCategory,
    zodiac: ZodiacSign | null,
  ): {
    cardReadings: { position: string; reading: string }[]
    synthesis: string
    advice: string
    zodiacNote: string
  } {
    const cardReadings = cards.map((drawn, index) => {
      const template = spreadTemplates[index]
      const direction = getDirectionLabel(drawn.isReversed)
      const meaning = getCardMeaning(drawn, category)
      const keywords = drawn.card.keywords.join('、')

      const reading =
        `【${template.labelZh}：${drawn.card.nameZh} · ${direction}】\n` +
        `${template.description}\n\n` +
        `关键词：${keywords}\n\n` +
        `${meaning}`

      return {
        position: template.labelZh,
        reading,
      }
    })

    const narrative = threeCardNarratives[category]
    const synthesis = narrative.synthesis
    const advice = narrative.advice
    const zodiacNote = getZodiacNote(cards, zodiac)

    return { cardReadings, synthesis, advice, zodiacNote }
  }

  return { classifyQuestion, generateSingleReading, generateThreeCardReading }
}
