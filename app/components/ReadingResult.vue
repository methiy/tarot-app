<script setup lang="ts">
import type { DrawnCard, ZodiacSign } from '~/types'

const props = defineProps<{
  spread: DrawnCard[]
  spreadType: 'single' | 'three'
  birthday: string
  gender: string
  question: string
}>()

const emit = defineEmits<{
  restart: []
}>()

const { classifyQuestion, generateSingleReading, generateThreeCardReading } = useReading()
const { getZodiac } = useZodiac()

const zodiac = computed(() => getZodiac(props.birthday))
const category = computed(() => classifyQuestion(props.question))

const singleReading = computed(() => {
  if (props.spreadType !== 'single' || !props.spread[0]) return null
  return generateSingleReading(props.spread[0], category.value, zodiac.value)
})

const threeCardReading = computed(() => {
  if (props.spreadType !== 'three') return null
  return generateThreeCardReading(props.spread, category.value, zodiac.value)
})

// Fade-in with IntersectionObserver
const sectionRefs = ref<HTMLElement[]>([])

function setSectionRef(el: any) {
  if (el) sectionRefs.value.push(el)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  sectionRefs.value.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})

const positionLabels: Record<string, string> = {
  past: '过去',
  present: '现在',
  future: '未来',
}
</script>

<template>
  <div class="reading-result">
    <h2 class="reading-result__title">🔮 占卜结果</h2>

    <div v-if="zodiac" :ref="setSectionRef" class="fade-in reading-result__section">
      <ZodiacBadge :zodiac="zodiac" />
    </div>

    <!-- Cards display -->
    <div :ref="setSectionRef" class="fade-in reading-result__section reading-result__cards">
      <div
        v-for="(drawn, index) in spread"
        :key="index"
        class="reading-result__card-wrapper"
      >
        <div v-if="spreadType === 'three' && drawn.position" class="reading-result__position-label">
          {{ positionLabels[drawn.position!] }}
        </div>
        <TarotCardFace :card="drawn.card" :is-reversed="drawn.isReversed" />
      </div>
    </div>

    <!-- Single card reading -->
    <template v-if="singleReading">
      <div :ref="setSectionRef" class="fade-in reading-result__section reading-card">
        <div class="reading-card__header">
          <h3 class="reading-card__title">{{ singleReading.cardName }}</h3>
          <span class="reading-card__direction" :class="{ 'reading-card__direction--reversed': singleReading.direction === '逆位' }">
            {{ singleReading.direction }}
          </span>
        </div>
        <div class="reading-card__en">{{ singleReading.cardNameEn }}</div>
        <div class="reading-card__keywords">{{ singleReading.keywords }}</div>
        <p class="reading-card__meaning">{{ singleReading.meaning }}</p>
      </div>

      <div v-if="singleReading.zodiacNote" :ref="setSectionRef" class="fade-in reading-result__section reading-card reading-card--zodiac">
        <p class="reading-card__meaning">{{ singleReading.zodiacNote }}</p>
      </div>
    </template>

    <!-- Three card reading -->
    <template v-if="threeCardReading">
      <div
        v-for="(cardReading, index) in threeCardReading.cardReadings"
        :key="index"
        :ref="setSectionRef"
        class="fade-in reading-result__section reading-card"
      >
        <div class="reading-card__header">
          <span class="reading-card__position">{{ cardReading.position }}</span>
          <h3 class="reading-card__title">{{ cardReading.cardName }}</h3>
          <span class="reading-card__direction" :class="{ 'reading-card__direction--reversed': cardReading.direction === '逆位' }">
            {{ cardReading.direction }}
          </span>
        </div>
        <div class="reading-card__en">{{ cardReading.cardNameEn }}</div>
        <div class="reading-card__keywords">{{ cardReading.keywords }}</div>
        <p class="reading-card__meaning">{{ cardReading.meaning }}</p>
      </div>

      <div :ref="setSectionRef" class="fade-in reading-result__section reading-card reading-card--synthesis">
        <h3 class="reading-card__title">综合解读</h3>
        <p class="reading-card__meaning">{{ threeCardReading.synthesis }}</p>
      </div>

      <div v-if="threeCardReading.zodiacNote" :ref="setSectionRef" class="fade-in reading-result__section reading-card reading-card--zodiac">
        <p class="reading-card__meaning">{{ threeCardReading.zodiacNote }}</p>
      </div>
    </template>

    <!-- Restart -->
    <div :ref="setSectionRef" class="fade-in reading-result__section reading-result__restart">
      <button class="restart-btn" @click="emit('restart')">
        重新占卜
      </button>
    </div>
  </div>
</template>

<style scoped>
.reading-result {
  max-width: 700px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.reading-result__title {
  text-align: center;
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: 1.6rem;
}

.reading-result__section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reading-result__cards {
  flex-direction: row;
  justify-content: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.reading-result__card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.reading-result__position-label {
  font-family: var(--font-display);
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

/* Reading card sections */
.reading-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  padding: var(--space-xl);
  width: 100%;
  align-items: flex-start;
  gap: var(--space-sm);
}

.reading-card--synthesis {
  border-left-color: var(--color-secondary);
}

.reading-card--zodiac {
  border-left-color: var(--color-accent);
}

.reading-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.reading-card__position {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: var(--border-radius-round);
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

.reading-card__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--color-text);
}

.reading-card__direction {
  font-size: 0.8rem;
  padding: 2px 10px;
  border-radius: var(--border-radius-round);
  background: var(--color-success);
  color: #fff;
  font-weight: 700;
}

.reading-card__direction--reversed {
  background: var(--color-error);
}

.reading-card__en {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.reading-card__keywords {
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 600;
}

.reading-card__meaning {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

/* Fade in animation */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Restart */
.reading-result__restart {
  margin-top: var(--space-lg);
}

.restart-btn {
  padding: var(--space-md) var(--space-2xl);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: var(--border-radius-round);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.restart-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 640px) {
  .reading-result {
    padding: var(--space-lg) var(--space-sm);
  }

  .reading-card {
    padding: var(--space-lg);
  }

  .reading-result__cards :deep(.card-face) {
    width: 140px;
    height: 210px;
  }
}
</style>
