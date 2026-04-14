<script setup lang="ts">
import type { DrawnCard, TarotCard } from '~/types'
import { majorArcana } from '~/data/majorArcana'
import { minorArcana } from '~/data/minorArcana'

const props = defineProps<{
  spreadType: 'single' | 'three'
}>()

const emit = defineEmits<{
  'cards-selected': [cards: DrawnCard[]]
}>()

const totalToSelect = computed(() => props.spreadType === 'single' ? 1 : 3)
const selectedIndices = ref<number[]>([])
const revealedCards = ref<DrawnCard[]>([])
const phase = ref<'selecting' | 'revealing'>('selecting')

// Generate a shuffled deck of card indices for display
const DISPLAY_COUNT = 22 // Show 22 cards in the fan
const shuffledDeck = ref<TarotCard[]>([])

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

onMounted(() => {
  const allCards = [...majorArcana, ...minorArcana]
  shuffledDeck.value = shuffle(allCards).slice(0, DISPLAY_COUNT)
})

const positionLabels = ['过去', '现在', '未来']

const selectionHint = computed(() => {
  const remaining = totalToSelect.value - selectedIndices.value.length
  if (remaining <= 0) return '牌已选好，正在揭示...'
  if (props.spreadType === 'three') {
    const posLabel = positionLabels[selectedIndices.value.length]
    return `请选择代表「${posLabel}」的第 ${selectedIndices.value.length + 1} 张牌（共需 ${totalToSelect.value} 张）`
  }
  return '请凭直觉选择一张牌'
})

function selectCard(index: number) {
  if (phase.value !== 'selecting') return
  if (selectedIndices.value.includes(index)) return
  if (selectedIndices.value.length >= totalToSelect.value) return

  selectedIndices.value.push(index)

  if (selectedIndices.value.length >= totalToSelect.value) {
    // All cards selected, reveal after short delay
    setTimeout(() => {
      phase.value = 'revealing'
      const positions: Array<'past' | 'present' | 'future' | undefined> =
        props.spreadType === 'three' ? ['past', 'present', 'future'] : [undefined]

      revealedCards.value = selectedIndices.value.map((cardIdx, i) => ({
        card: shuffledDeck.value[cardIdx],
        isReversed: Math.random() < 0.5,
        isFlipped: false,
        position: positions[i],
      }))

      // Flip cards one by one
      revealedCards.value.forEach((_, i) => {
        setTimeout(() => {
          revealedCards.value[i] = { ...revealedCards.value[i], isFlipped: true }

          // After last card flipped, emit
          if (i === revealedCards.value.length - 1) {
            setTimeout(() => emit('cards-selected', revealedCards.value), 800)
          }
        }, 600 * (i + 1))
      })
    }, 500)
  }
}

function getCardAngle(index: number, total: number): number {
  const spread = Math.min(total * 4, 80) // Max 80 degree spread
  const step = spread / (total - 1 || 1)
  return -spread / 2 + step * index
}

function getCardOffset(index: number, total: number): number {
  const center = (total - 1) / 2
  const dist = Math.abs(index - center)
  return dist * dist * 1.5 // quadratic curve for arc shape
}
</script>

<template>
  <div class="fan-spread">
    <!-- Selection phase: fan of cards -->
    <Transition name="fan-scene" mode="out-in">
      <div v-if="phase === 'selecting'" key="selecting" class="fan-spread__selecting">
        <h2 class="fan-spread__title">{{ selectionHint }}</h2>

        <div class="fan-spread__fan-container">
          <div class="fan-spread__fan">
            <div
              v-for="(card, index) in shuffledDeck"
              :key="index"
              class="fan-spread__card-wrapper"
              :class="{
                'fan-spread__card-wrapper--selected': selectedIndices.includes(index),
                'fan-spread__card-wrapper--disabled': selectedIndices.length >= totalToSelect && !selectedIndices.includes(index),
              }"
              :style="{
                '--angle': `${getCardAngle(index, shuffledDeck.length)}deg`,
                '--offset-y': `${getCardOffset(index, shuffledDeck.length)}px`,
                '--index': index,
              }"
              @click="selectCard(index)"
            >
              <TarotCardBack />
              <div v-if="selectedIndices.includes(index)" class="fan-spread__badge">
                {{ selectedIndices.indexOf(index) + 1 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Selected cards preview -->
        <div v-if="selectedIndices.length > 0" class="fan-spread__preview">
          <div
            v-for="i in totalToSelect"
            :key="i"
            class="fan-spread__preview-slot"
            :class="{ 'fan-spread__preview-slot--filled': i <= selectedIndices.length }"
          >
            <span v-if="spreadType === 'three'" class="fan-spread__preview-label">
              {{ positionLabels[i - 1] }}
            </span>
            <span class="fan-spread__preview-number">{{ i <= selectedIndices.length ? '✦' : '?' }}</span>
          </div>
        </div>
      </div>

      <!-- Reveal phase: flip cards -->
      <div v-else key="revealing" class="fan-spread__revealing">
        <h2 class="fan-spread__title">命运正在揭示...</h2>
        <div class="fan-spread__reveal-cards">
          <div
            v-for="(drawn, index) in revealedCards"
            :key="index"
            class="fan-spread__reveal-slot"
          >
            <div
              v-if="spreadType === 'three' && drawn.position"
              class="fan-spread__reveal-label"
            >
              {{ { past: '过去', present: '现在', future: '未来' }[drawn.position] }}
            </div>
            <div class="fan-spread__flipper-perspective">
              <div
                class="fan-spread__flipper"
                :class="{ 'fan-spread__flipper--flipped': drawn.isFlipped }"
              >
                <div class="fan-spread__flip-front">
                  <TarotCardBack />
                </div>
                <div class="fan-spread__flip-back">
                  <TarotCardFace :card="drawn.card" :is-reversed="drawn.isReversed" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fan-spread {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg) 0;
  min-height: 500px;
}

.fan-spread__title {
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: var(--space-xl);
  letter-spacing: 0.05em;
}

/* Fan layout */
.fan-spread__fan-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--space-xl) 0;
  overflow-x: auto;
}

.fan-spread__fan {
  position: relative;
  width: 600px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.fan-spread__card-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 120px;
  height: 180px;
  transform-origin: bottom center;
  transform:
    translateX(-50%)
    translateY(calc(var(--offset-y, 0px) * -1))
    rotate(var(--angle, 0deg));
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: calc(var(--index, 0));
}

.fan-spread__card-wrapper:hover {
  transform:
    translateX(-50%)
    translateY(calc(var(--offset-y, 0px) * -1 - 30px))
    rotate(var(--angle, 0deg));
  z-index: 100;
}

.fan-spread__card-wrapper--selected {
  transform:
    translateX(-50%)
    translateY(calc(var(--offset-y, 0px) * -1 - 40px))
    rotate(var(--angle, 0deg));
  z-index: 99;
}

.fan-spread__card-wrapper--selected::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  box-shadow: 0 0 16px var(--color-primary);
  pointer-events: none;
}

.fan-spread__card-wrapper--disabled {
  opacity: 0.4;
  cursor: default;
}

.fan-spread__card-wrapper--disabled:hover {
  transform:
    translateX(-50%)
    translateY(calc(var(--offset-y, 0px) * -1))
    rotate(var(--angle, 0deg));
  z-index: calc(var(--index, 0));
}

.fan-spread__card-wrapper :deep(.card-back) {
  width: 120px;
  height: 180px;
}

.fan-spread__badge {
  position: absolute;
  top: -12px;
  right: -8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-bg);
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 200;
}

/* Preview of selected slots */
.fan-spread__preview {
  display: flex;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.fan-spread__preview-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.fan-spread__preview-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.fan-spread__preview-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px dashed var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
}

.fan-spread__preview-slot--filled .fan-spread__preview-number {
  border-style: solid;
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(201, 168, 76, 0.1);
}

/* Reveal phase */
.fan-spread__revealing {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fan-spread__reveal-cards {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.fan-spread__reveal-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.fan-spread__reveal-label {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.1em;
}

/* Flip animation - perspective on parent */
.fan-spread__flipper-perspective {
  perspective: 1000px;
  width: 200px;
  height: 300px;
}

.fan-spread__flipper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.fan-spread__flipper--flipped {
  transform: rotateY(180deg);
}

.fan-spread__flip-front,
.fan-spread__flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.fan-spread__flip-front {
  transform: rotateY(0deg);
}

.fan-spread__flip-back {
  transform: rotateY(180deg);
}

/* Scene transition */
.fan-scene-enter-active,
.fan-scene-leave-active {
  transition: opacity 0.4s ease;
}

.fan-scene-enter-from,
.fan-scene-leave-to {
  opacity: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .fan-spread__fan {
    width: 100%;
    max-width: 500px;
    height: 280px;
  }

  .fan-spread__card-wrapper {
    width: 90px;
    height: 135px;
  }

  .fan-spread__card-wrapper :deep(.card-back) {
    width: 90px;
    height: 135px;
  }

  .fan-spread__flipper-perspective {
    width: 160px;
    height: 240px;
  }
}

@media (max-width: 480px) {
  .fan-spread__fan {
    height: 240px;
  }

  .fan-spread__card-wrapper {
    width: 70px;
    height: 105px;
  }

  .fan-spread__card-wrapper :deep(.card-back) {
    width: 70px;
    height: 105px;
  }

  .fan-spread__reveal-cards {
    gap: var(--space-md);
  }

  .fan-spread__flipper-perspective {
    width: 140px;
    height: 210px;
  }
}
</style>
