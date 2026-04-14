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
const hoveredIndex = ref(-1)
const cardRefs = ref<Map<number, HTMLElement>>(new Map())

const DISPLAY_COUNT = 22

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffledDeck = ref<TarotCard[]>([])
onMounted(() => {
  shuffledDeck.value = shuffle([...majorArcana, ...minorArcana]).slice(0, DISPLAY_COUNT)
})

const positionLabels = ['过去', '现在', '未来']

const selectionHint = computed(() => {
  const remaining = totalToSelect.value - selectedIndices.value.length
  if (remaining <= 0) return '牌已选好，正在揭示...'
  if (props.spreadType === 'three') {
    const posLabel = positionLabels[selectedIndices.value.length]
    return `请选择代表「${posLabel}」的第 ${selectedIndices.value.length + 1} 张牌`
  }
  return '请凭直觉选择一张牌'
})

// Fan arc: each card rotated around a distant origin point
function getFanAngle(index: number): number {
  const totalSpread = 60 // degrees
  const n = DISPLAY_COUNT
  return ((index - (n - 1) / 2) / (n - 1)) * totalSpread
}

// 3D tilt on mouse move
function onCardMouseMove(e: MouseEvent, index: number) {
  const el = cardRefs.value.get(index)
  if (!el) return
  hoveredIndex.value = index

  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  // 3D tilt: rotateY follows X, rotateX follows Y (inverted)
  const rotateY = ((x - 50) / 50) * 18
  const rotateX = ((y - 50) / 50) * -18

  el.style.setProperty('--tilt-x', `${rotateX}deg`)
  el.style.setProperty('--tilt-y', `${rotateY}deg`)
  el.style.setProperty('--shine-x', `${x}%`)
  el.style.setProperty('--shine-y', `${y}%`)
}

function onCardMouseLeave(index: number) {
  const el = cardRefs.value.get(index)
  if (!el) return
  hoveredIndex.value = -1
  el.style.setProperty('--tilt-x', '0deg')
  el.style.setProperty('--tilt-y', '0deg')
  el.style.setProperty('--shine-x', '50%')
  el.style.setProperty('--shine-y', '50%')
}

function setCardRef(el: any, index: number) {
  if (el) cardRefs.value.set(index, el)
}

function selectCard(index: number) {
  if (phase.value !== 'selecting') return
  if (selectedIndices.value.includes(index)) return
  if (selectedIndices.value.length >= totalToSelect.value) return

  selectedIndices.value.push(index)

  if (selectedIndices.value.length >= totalToSelect.value) {
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

      revealedCards.value.forEach((_, i) => {
        setTimeout(() => {
          revealedCards.value[i] = { ...revealedCards.value[i], isFlipped: true }
          if (i === revealedCards.value.length - 1) {
            setTimeout(() => emit('cards-selected', revealedCards.value), 800)
          }
        }, 600 * (i + 1))
      })
    }, 600)
  }
}
</script>

<template>
  <div class="spread">
    <Transition name="spread-scene" mode="out-in">
      <!-- ========== SELECTING: Fan of cards ========== -->
      <div v-if="phase === 'selecting'" key="selecting" class="spread__selecting">
        <h2 class="spread__title">{{ selectionHint }}</h2>

        <!-- Fan container -->
        <div class="fan">
          <div class="fan__arc">
            <div
              v-for="(card, index) in shuffledDeck"
              :key="index"
              :ref="(el) => setCardRef(el, index)"
              class="fan__card-perspective"
              :class="{
                'fan__card-perspective--selected': selectedIndices.includes(index),
                'fan__card-perspective--disabled': selectedIndices.length >= totalToSelect && !selectedIndices.includes(index),
                'fan__card-perspective--hovered': hoveredIndex === index,
              }"
              :style="{
                '--angle': `${getFanAngle(index)}deg`,
                '--z': index + 1,
                zIndex: hoveredIndex === index ? 100 : (selectedIndices.includes(index) ? 90 : index + 1),
              }"
              @mousemove="onCardMouseMove($event, index)"
              @mouseleave="onCardMouseLeave(index)"
              @click="selectCard(index)"
            >
              <!-- 3D tilt card -->
              <div class="fan__card">
                <TarotCardBack />
                <!-- Shine overlay -->
                <div class="fan__shine" />
              </div>
              <!-- Selection badge -->
              <div v-if="selectedIndices.includes(index)" class="fan__badge">
                {{ selectedIndices.indexOf(index) + 1 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Selected slots preview -->
        <div v-if="selectedIndices.length > 0 || spreadType === 'three'" class="spread__slots">
          <div
            v-for="i in totalToSelect"
            :key="i"
            class="spread__slot"
            :class="{ 'spread__slot--filled': i <= selectedIndices.length }"
          >
            <span v-if="spreadType === 'three'" class="spread__slot-label">{{ positionLabels[i - 1] }}</span>
            <span class="spread__slot-icon">{{ i <= selectedIndices.length ? '✦' : '?' }}</span>
          </div>
        </div>
      </div>

      <!-- ========== REVEALING: Flip cards ========== -->
      <div v-else key="revealing" class="spread__revealing">
        <h2 class="spread__title">命运正在揭示...</h2>
        <div class="reveal__cards">
          <div
            v-for="(drawn, index) in revealedCards"
            :key="index"
            class="reveal__slot"
          >
            <div v-if="spreadType === 'three' && drawn.position" class="reveal__label">
              {{ { past: '过去', present: '现在', future: '未来' }[drawn.position] }}
            </div>
            <div class="reveal__perspective">
              <div
                class="reveal__flipper"
                :class="{ 'reveal__flipper--flipped': drawn.isFlipped }"
              >
                <div class="reveal__front"><TarotCardBack /></div>
                <div class="reveal__back"><TarotCardFace :card="drawn.card" :is-reversed="drawn.isReversed" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.spread {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg) 0;
  min-height: 500px;
}

.spread__title {
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: var(--space-lg);
  letter-spacing: 0.05em;
}

/* =============================================
   FAN ARC LAYOUT
   ============================================= */
.fan {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0 20px;
  overflow: visible;
}

.fan__arc {
  position: relative;
  width: 120px;  /* all cards stack at center */
  height: 200px;
}

.fan__card-perspective {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100px;
  height: 150px;
  margin-left: -50px;
  /* THE KEY: pivot far below the card for arc effect */
  transform-origin: center 500px;
  transform: rotate(var(--angle, 0deg));
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              filter 0.2s ease;
  perspective: 600px;
}

/* Hover: lift out of fan */
.fan__card-perspective--hovered {
  transform: rotate(var(--angle, 0deg)) translateY(-15px) scale(1.06);
  filter: brightness(1.1);
}

/* Other cards dim on hover */
.fan__arc:hover .fan__card-perspective:not(.fan__card-perspective--hovered) {
  filter: brightness(0.75);
}

/* Selected cards */
.fan__card-perspective--selected {
  transform: rotate(var(--angle, 0deg)) translateY(-22px);
}

.fan__card-perspective--selected::after {
  content: '';
  position: absolute;
  inset: -3px;
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  box-shadow: 0 0 18px var(--color-primary);
  pointer-events: none;
  animation: selectedPulse 2s infinite;
}

@keyframes selectedPulse {
  0%, 100% { box-shadow: 0 0 12px var(--color-primary); }
  50% { box-shadow: 0 0 24px var(--color-primary); }
}

.fan__card-perspective--disabled {
  opacity: 0.35;
  cursor: default;
  pointer-events: none;
}

/* 3D tilt inner card */
.fan__card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
  transition: transform 0.1s ease-out;
  border-radius: var(--border-radius-lg, 10px);
  overflow: hidden;
  position: relative;
}

/* Shine / glare overlay */
.fan__shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    circle at var(--shine-x, 50%) var(--shine-y, 50%),
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.1) 30%,
    transparent 70%
  );
  mix-blend-mode: overlay;
}

.fan__card-perspective--hovered .fan__shine {
  opacity: 1;
}

/* Selection badge */
.fan__badge {
  position: absolute;
  top: -10px;
  right: -6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-bg, #1a0a2e);
  font-weight: 800;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  z-index: 200;
  animation: badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes badgePop {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}

/* =============================================
   SELECTED SLOTS PREVIEW
   ============================================= */
.spread__slots {
  display: flex;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.spread__slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.spread__slot-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.spread__slot-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px dashed var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
}

.spread__slot--filled .spread__slot-icon {
  border-style: solid;
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(201, 168, 76, 0.15);
  box-shadow: 0 0 8px rgba(201, 168, 76, 0.3);
}

/* =============================================
   REVEAL PHASE
   ============================================= */
.spread__revealing {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reveal__cards {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.reveal__slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.reveal__label {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.1em;
}

.reveal__perspective {
  perspective: 1000px;
  width: 180px;
  height: 270px;
}

.reveal__flipper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.reveal__flipper--flipped {
  transform: rotateY(180deg);
}

.reveal__front,
.reveal__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.reveal__back {
  transform: rotateY(180deg);
}

/* =============================================
   TRANSITIONS
   ============================================= */
.spread-scene-enter-active,
.spread-scene-leave-active {
  transition: opacity 0.4s ease;
}

.spread-scene-enter-from,
.spread-scene-leave-to {
  opacity: 0;
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 768px) {
  .fan__card-perspective {
    width: 80px;
    height: 120px;
    margin-left: -40px;
    transform-origin: center 400px;
  }

  .fan__arc {
    height: 160px;
  }

  .reveal__perspective {
    width: 150px;
    height: 225px;
  }
}

@media (max-width: 480px) {
  .fan__card-perspective {
    width: 60px;
    height: 90px;
    margin-left: -30px;
    transform-origin: center 320px;
  }

  .fan__arc {
    height: 130px;
  }

  .reveal__perspective {
    width: 130px;
    height: 195px;
  }

  .reveal__cards {
    gap: var(--space-md);
  }
}
</style>
