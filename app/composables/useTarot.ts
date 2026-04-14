import type { TarotCard } from '~/data/majorArcana'
import type { DrawnCard } from '~/types'
import { majorArcana } from '~/data/majorArcana'
import { minorArcana } from '~/data/minorArcana'

export function useTarot() {
  const spread = ref<DrawnCard[]>([])
  const spreadType = ref<'single' | 'three'>('single')

  const allFlipped = computed(() => {
    if (spread.value.length === 0) return false
    return spread.value.every(c => c.isFlipped)
  })

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function fullDeck(): TarotCard[] {
    return [...majorArcana, ...minorArcana]
  }

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

  function flipCard(index: number) {
    if (index >= 0 && index < spread.value.length) {
      spread.value[index] = { ...spread.value[index], isFlipped: true }
    }
  }

  function reset() {
    spread.value = []
    spreadType.value = 'single'
  }

  return { spread, spreadType, allFlipped, drawCards, flipCard, reset }
}
