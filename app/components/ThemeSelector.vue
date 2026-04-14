<script setup lang="ts">
const { currentTheme, setTheme } = useTheme()

const themes = [
  { id: 'mystic' as const, emoji: '\u{1F52E}', label: '神秘塔罗', color: '#2d1b4e' },
  { id: 'sakura' as const, emoji: '\u{1F338}', label: '百变小樱', color: '#F4A6C0' },
  { id: 'capybara' as const, emoji: '\u{1FAE7}', label: '水豚噜噜', color: '#F5C87A' },
]
</script>

<template>
  <div class="theme-selector">
    <h3 class="theme-selector__title">选择主题</h3>
    <div class="theme-selector__list">
      <button
        v-for="theme in themes"
        :key="theme.id"
        class="theme-card"
        :class="{ 'theme-card--active': currentTheme === theme.id }"
        @click="setTheme(theme.id)"
      >
        <div class="theme-card__preview" :style="{ backgroundColor: theme.color }">
          <span class="theme-card__emoji">{{ theme.emoji }}</span>
        </div>
        <span class="theme-card__label">{{ theme.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-selector {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.theme-selector__title {
  font-family: var(--font-display);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

.theme-selector__list {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.theme-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-radius: var(--border-radius-lg);
  background: var(--color-surface);
  border: 2px solid transparent;
  transition: all var(--transition-normal);
  cursor: pointer;
  min-width: 100px;
}

.theme-card:hover {
  background: var(--color-surface-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.theme-card--active {
  border-color: var(--color-primary);
  box-shadow: 0 0 16px var(--color-card-glow, rgba(201, 168, 76, 0.25));
}

.theme-card__preview {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal);
}

.theme-card:hover .theme-card__preview {
  transform: scale(1.05);
}

.theme-card__emoji {
  font-size: 1.8rem;
}

.theme-card__label {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: 600;
}

@media (max-width: 640px) {
  .theme-selector__list {
    gap: var(--space-md);
  }

  .theme-card {
    min-width: 85px;
    padding: var(--space-sm);
  }

  .theme-card__preview {
    width: 48px;
    height: 48px;
  }

  .theme-card__emoji {
    font-size: 1.4rem;
  }
}
</style>
