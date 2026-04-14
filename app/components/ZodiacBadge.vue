<script setup lang="ts">
import type { ZodiacSign } from '~/types'

defineProps<{
  zodiac: ZodiacSign | null
}>()
</script>

<template>
  <span v-if="zodiac" class="zodiac-badge">
    <span class="zodiac-badge__symbol">{{ zodiac.symbol }}</span>
    <span class="zodiac-badge__name">{{ zodiac.name }}</span>
  </span>
</template>

<style scoped>
.zodiac-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  background: var(--color-primary-light);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-round);
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 600;
}

.zodiac-badge__symbol {
  font-size: 1.1rem;
}
</style>
