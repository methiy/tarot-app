<script setup lang="ts">
const emit = defineEmits<{
  submit: [payload: { birthday: string; gender: string; question: string; spreadType: 'single' | 'three' }]
}>()

const birthday = ref('')
const gender = ref('')
const question = ref('')
const spreadType = ref<'single' | 'three'>('single')

function handleSubmit() {
  if (!birthday.value || !gender.value || !question.value) return
  emit('submit', {
    birthday: birthday.value,
    gender: gender.value,
    question: question.value,
    spreadType: spreadType.value,
  })
}
</script>

<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <h2 class="input-form__title">🔮 输入你的信息</h2>

    <div class="input-form__field">
      <label class="input-form__label">生日</label>
      <input
        v-model="birthday"
        type="date"
        class="input-form__input"
        required
      />
    </div>

    <div class="input-form__field">
      <label class="input-form__label">性别</label>
      <select v-model="gender" class="input-form__input" required>
        <option value="" disabled>请选择</option>
        <option value="男">男</option>
        <option value="女">女</option>
        <option value="其他">其他</option>
      </select>
    </div>

    <div class="input-form__field">
      <label class="input-form__label">你的问题</label>
      <textarea
        v-model="question"
        class="input-form__input input-form__textarea"
        placeholder="请输入你想问的问题..."
        rows="3"
        required
      />
    </div>

    <div class="input-form__field">
      <label class="input-form__label">占卜方式</label>
      <div class="input-form__toggle">
        <button
          type="button"
          class="toggle-btn"
          :class="{ 'toggle-btn--active': spreadType === 'single' }"
          @click="spreadType = 'single'"
        >
          单牌占卜
        </button>
        <button
          type="button"
          class="toggle-btn"
          :class="{ 'toggle-btn--active': spreadType === 'three' }"
          @click="spreadType = 'three'"
        >
          三牌占卜
        </button>
      </div>
    </div>

    <button type="submit" class="input-form__submit" :disabled="!birthday || !gender || !question">
      开始占卜
    </button>
  </form>
</template>

<style scoped>
.input-form {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-xl);
  padding: var(--space-2xl);
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.input-form__title {
  text-align: center;
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-bottom: var(--space-sm);
}

.input-form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.input-form__label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-weight: 600;
}

.input-form__input {
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  background: var(--color-surface-alt);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.input-form__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.input-form__textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.5;
}

.input-form__toggle {
  display: flex;
  gap: var(--space-sm);
}

.toggle-btn {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  background: var(--color-surface-alt);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.toggle-btn:hover {
  background: var(--color-surface-hover);
}

.toggle-btn--active {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-primary);
}

.input-form__submit {
  padding: var(--space-md) var(--space-xl);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: var(--border-radius-round);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: all var(--transition-normal);
  margin-top: var(--space-sm);
}

.input-form__submit:hover:not(:disabled) {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.input-form__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .input-form {
    padding: var(--space-lg);
    margin: 0 var(--space-md);
  }
}
</style>
