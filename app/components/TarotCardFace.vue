<script setup lang="ts">
import type { TarotCard } from '~/types'

const props = defineProps<{
  card: TarotCard
  isReversed: boolean
}>()

const romanNumerals = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']

const suitSymbols: Record<string, string> = {
  wands: '🪄',
  cups: '🏆',
  swords: '⚔️',
  pentacles: '⭐',
}

const majorArcanaEmoji: Record<number, string> = {
  0: '🃏', 1: '🎩', 2: '🌙', 3: '👑', 4: '🏛️', 5: '⛪', 6: '💕', 7: '🏎️',
  8: '💪', 9: '🏮', 10: '🎡', 11: '⚖️', 12: '🙃', 13: '💀', 14: '🏺',
  15: '😈', 16: '🗼', 17: '⭐', 18: '🌙', 19: '☀️', 20: '📯', 21: '🌍',
}

const displayNumber = computed(() => {
  if (props.card.arcana === 'major') {
    return romanNumerals[props.card.number] ?? String(props.card.number)
  }
  return `${suitSymbols[props.card.suit!] ?? ''} ${props.card.number}`
})

const cardEmoji = computed(() => {
  if (props.card.arcana === 'major') {
    return majorArcanaEmoji[props.card.number] ?? '🔮'
  }
  return suitSymbols[props.card.suit!] ?? '🔮'
})

const keywords = computed(() => {
  return props.isReversed ? props.card.keywords.reversed : props.card.keywords.upright
})
</script>

<template>
  <div class="card-face" :class="{ 'card-face--reversed': isReversed }">
    <div class="card-face__inner">
      <div class="card-face__number">{{ displayNumber }}</div>
      <div class="card-face__symbol">{{ cardEmoji }}</div>
      <div class="card-face__name">{{ card.name }}</div>
      <div class="card-face__name-en">{{ card.nameEn }}</div>
      <div v-if="isReversed" class="card-face__badge">逆位</div>
      <div class="card-face__keywords">
        {{ keywords.slice(0, 3).join(' · ') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-face {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  background: var(--color-card-bg);
  border: 2px solid var(--color-card-border);
  box-shadow: var(--shadow-card, var(--shadow-lg));
  overflow: hidden;
  position: relative;
}

.card-face--reversed {
  transform: rotate(180deg);
}

.card-face__inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
  gap: var(--space-xs);
  text-align: center;
}

.card-face__number {
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
  font-weight: 600;
}

.card-face__symbol {
  font-size: 3rem;
  line-height: 1;
  margin: var(--space-sm) 0;
}

.card-face__name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
}

.card-face__name-en {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.card-face__badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: var(--color-error);
  color: #fff;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: var(--border-radius-round);
  font-weight: 700;
  /* Undo the parent's 180deg rotation so badge reads normally */
  transform: rotate(180deg);
}

.card-face__keywords {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-top: auto;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
  width: 100%;
}
</style>
