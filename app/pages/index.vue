<script setup lang="ts">
import type { DrawnCard } from '~/types'

type Scene = 'input' | 'drawing' | 'result'

const scene = ref<Scene>('input')
const birthday = ref('')
const gender = ref('')
const question = ref('')
const spreadTypeChoice = ref<'single' | 'three'>('single')
const selectedCards = ref<DrawnCard[]>([])

function handleFormSubmit(payload: { birthday: string; gender: string; question: string; spreadType: 'single' | 'three' }) {
  birthday.value = payload.birthday
  gender.value = payload.gender
  question.value = payload.question
  spreadTypeChoice.value = payload.spreadType
  scene.value = 'drawing'
}

function handleCardsSelected(cards: DrawnCard[]) {
  selectedCards.value = cards
  setTimeout(() => {
    scene.value = 'result'
  }, 500)
}

function handleRestart() {
  selectedCards.value = []
  birthday.value = ''
  gender.value = ''
  question.value = ''
  spreadTypeChoice.value = 'single'
  scene.value = 'input'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1 class="page-header__title">🔮 塔罗牌占卜</h1>
      <p class="page-header__subtitle">聆听命运的低语</p>
    </header>

    <main class="page-main">
      <Transition name="scene" mode="out-in">
        <div v-if="scene === 'input'" key="input" class="scene">
          <ThemeSelector />
          <InputForm @submit="handleFormSubmit" />
        </div>

        <div v-else-if="scene === 'drawing'" key="drawing" class="scene">
          <CardSpread
            :spread-type="spreadTypeChoice"
            @cards-selected="handleCardsSelected"
          />
        </div>

        <div v-else key="result" class="scene">
          <ReadingResult
            :spread="selectedCards"
            :spread-type="spreadTypeChoice"
            :birthday="birthday"
            :gender="gender"
            :question="question"
            @restart="handleRestart"
          />
        </div>
      </Transition>
    </main>

    <footer class="page-footer">
      <p>塔罗牌占卜仅供娱乐参考</p>
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background: var(--color-bg-gradient, var(--color-bg));
  display: flex;
  flex-direction: column;
}

.page-header {
  text-align: center;
  padding: var(--space-2xl) var(--space-md) var(--space-lg);
}

.page-header__title {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-primary);
  letter-spacing: 0.05em;
}

.page-header__subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
}

.page-main {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-md) var(--space-2xl);
}

.scene {
  width: 100%;
}

.scene-enter-active,
.scene-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.scene-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.scene-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-footer {
  text-align: center;
  padding: var(--space-lg);
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .page-header__title {
    font-size: 1.5rem;
  }
}
</style>
