import type { TarotCard, DrawnCard } from '~/types'
import { majorArcana } from '~/data/major-arcana'
import { minorArcana } from '~/data/minor-arcana'

export type { DrawnCard }

export function useTarot() {
  const spread = ref<DrawnCard[]>([])
  const spreadType = ref<'single' | 'three'>('single')

  const allFlipped = computed(() => {
    if (spread.value.length === 0) return false
    return spread.value.every(c => c.isFlipped)
  })

  /** Fisher-Yates shuffle — returns a new array */
  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  /** Build the full 78-card deck */
  function fullDeck(): TarotCard[] {
    return [...majorArcana, ...minorArcana]
  }

  /** Draw 1 or 3 cards from a shuffled deck */
  function drawCards(type: 'single' | 'three') {
    spreadType.value = type
    const count = type === 'single' ? 1 : 3
    const shuffled = shuffle(fullDeck())
    const positions: Array<'past' | 'present' | 'future' | undefined> =
      type === 'three' ? ['past', 'present', 'future'] : [undefined]

    spread.value = shuffled.slice(0, count).map((card, i) => ({
      card,
      isReversed: Math.random() < 0.5,
      isFlipped: false,
      position: positions[i],
    }))
  }

  /** Flip a specific card by index */
  function flipCard(index: number) {
    if (index >= 0 && index < spread.value.length) {
      spread.value[index] = {
        ...spread.value[index],
        isFlipped: true,
      }
    }
  }

  /** Reset spread */
  function reset() {
    spread.value = []
    spreadType.value = 'single'
  }

  return { spread, spreadType, allFlipped, drawCards, flipCard, reset }
}
