<script setup lang="ts">
import type { DrawnCard } from '~/types'

const props = defineProps<{
  spread: DrawnCard[]
  spreadType: 'single' | 'three'
}>()

const emit = defineEmits<{
  'all-flipped': []
}>()

const { flipCard, allFlipped } = useTarot()

const positionLabels: Record<string, string> = {
  past: '过去',
  present: '现在',
  future: '未来',
}

function handleFlip(index: number) {
  if (props.spread[index]?.isFlipped) return
  flipCard(index)
}

watch(allFlipped, (val) => {
  if (val) {
    setTimeout(() => emit('all-flipped'), 600)
  }
})
</script>

<template>
  <div class="card-spread">
    <h2 class="card-spread__title">
      {{ spreadType === 'three' ? '点击卡牌揭示命运' : '点击卡牌揭示答案' }}
    </h2>
    <div class="card-spread__cards">
      <div
        v-for="(drawn, index) in spread"
        :key="index"
        class="card-spread__slot"
      >
        <div
          v-if="spreadType === 'three' && drawn.position"
          class="card-spread__label"
        >
          {{ positionLabels[drawn.position] }}
        </div>
        <div
          class="card-spread__flipper"
          :class="{ 'card-spread__flipper--flipped': drawn.isFlipped }"
          @click="handleFlip(index)"
        >
          <div class="card-spread__front">
            <TarotCardBack />
          </div>
          <div class="card-spread__back">
            <TarotCardFace :card="drawn.card" :is-reversed="drawn.isReversed" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-spread {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-xl) 0;
}

.card-spread__title {
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: 1.3rem;
  text-align: center;
}

.card-spread__cards {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.card-spread__slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.card-spread__label {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.1em;
}

.card-spread__flipper {
  width: 200px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

.card-spread__front,
.card-spread__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
}

.card-spread__front {
  transform: rotateY(0deg);
}

.card-spread__back {
  transform: rotateY(180deg);
}

.card-spread__flipper--flipped .card-spread__front {
  transform: rotateY(-180deg);
}

.card-spread__flipper--flipped .card-spread__back {
  transform: rotateY(0deg);
}

@media (max-width: 768px) {
  .card-spread__cards {
    gap: var(--space-lg);
  }
}

@media (max-width: 640px) {
  .card-spread__cards {
    gap: var(--space-md);
  }

  .card-spread__flipper {
    width: 160px;
    height: 240px;
  }

  .card-spread__flipper :deep(.card-back),
  .card-spread__flipper :deep(.card-face) {
    width: 160px;
    height: 240px;
  }
}
</style>
