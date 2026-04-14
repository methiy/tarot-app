<script setup lang="ts">
import type { TarotCard } from '~/types'

const props = defineProps<{
  card: TarotCard
  isReversed: boolean
}>()

const romanNumerals = [
  '0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI',
]

const suitSymbols: Record<string, string> = {
  pentacles: '♦',
  cups: '♥',
  swords: '♠',
  wands: '♣',
}

const majorArcanaSymbols: Record<number, string> = {
  0: '🌀', 1: '♾️', 2: '🌙', 3: '👑', 4: '🏛️', 5: '🔑', 6: '❤️', 7: '⭐',
  8: '🦁', 9: '🏮', 10: '☸️', 11: '⚖️', 12: '🔻', 13: '💀', 14: '🏺',
  15: '😈', 16: '⚡', 17: '✨', 18: '🌕', 19: '☀️', 20: '🎺', 21: '🌍',
}

const minorSuitSymbols: Record<string, string> = {
  wands: '🔥',
  cups: '💧',
  swords: '⚔️',
  pentacles: '⭐',
}

const displayNumber = computed(() => {
  if (props.card.arcana === 'major') {
    return romanNumerals[props.card.number] ?? String(props.card.number)
  }
  const suit = suitSymbols[props.card.suit!] ?? ''
  return `${props.card.number} ${suit}`
})

const centralSymbol = computed(() => {
  if (props.card.arcana === 'major') {
    return majorArcanaSymbols[props.card.number] ?? '🔮'
  }
  return minorSuitSymbols[props.card.suit!] ?? '🔮'
})

const keywords = computed(() => {
  const kw = props.isReversed ? props.card.keywords.reversed : props.card.keywords.upright
  return kw.slice(0, 3)
})
</script>

<template>
  <div class="card-face">
    <!-- Ornate SVG Border Frame -->
    <svg
      class="card-face__frame"
      viewBox="0 0 200 340"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--color-primary)" />
          <stop offset="35%" stop-color="var(--color-accent)" />
          <stop offset="50%" stop-color="var(--color-primary)" />
          <stop offset="65%" stop-color="var(--color-accent)" />
          <stop offset="100%" stop-color="var(--color-primary)" />
        </linearGradient>
        <linearGradient id="goldGradVert" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="var(--color-accent)" />
          <stop offset="50%" stop-color="var(--color-primary)" />
          <stop offset="100%" stop-color="var(--color-accent)" />
        </linearGradient>
      </defs>

      <!-- Outer frame -->
      <rect
        x="3" y="3" width="194" height="334" rx="14" ry="14"
        fill="none" stroke="url(#goldGrad)" stroke-width="1.5"
      />
      <!-- Inner frame -->
      <rect
        x="10" y="10" width="180" height="320" rx="10" ry="10"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.8"
      />

      <!-- Top-left corner flourish -->
      <path
        d="M 18 40 Q 18 18, 40 18"
        fill="none" stroke="url(#goldGrad)" stroke-width="1.2"
      />
      <path
        d="M 22 50 Q 16 16, 50 22"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.8"
      />
      <circle cx="18" cy="18" r="2" fill="url(#goldGrad)" />

      <!-- Top-right corner flourish -->
      <path
        d="M 160 18 Q 182 18, 182 40"
        fill="none" stroke="url(#goldGrad)" stroke-width="1.2"
      />
      <path
        d="M 150 22 Q 184 16, 178 50"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.8"
      />
      <circle cx="182" cy="18" r="2" fill="url(#goldGrad)" />

      <!-- Bottom-left corner flourish -->
      <path
        d="M 18 300 Q 18 322, 40 322"
        fill="none" stroke="url(#goldGrad)" stroke-width="1.2"
      />
      <path
        d="M 22 290 Q 16 324, 50 318"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.8"
      />
      <circle cx="18" cy="322" r="2" fill="url(#goldGrad)" />

      <!-- Bottom-right corner flourish -->
      <path
        d="M 160 322 Q 182 322, 182 300"
        fill="none" stroke="url(#goldGrad)" stroke-width="1.2"
      />
      <path
        d="M 150 318 Q 184 324, 178 290"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.8"
      />
      <circle cx="182" cy="322" r="2" fill="url(#goldGrad)" />

      <!-- Top arch ornament -->
      <path
        d="M 60 10 Q 70 -2, 80 6 Q 90 -4, 100 4 Q 110 -4, 120 6 Q 130 -2, 140 10"
        fill="none" stroke="url(#goldGrad)" stroke-width="1"
      />
      <circle cx="100" cy="2" r="2.5" fill="url(#goldGrad)" />

      <!-- Bottom arch ornament -->
      <path
        d="M 60 330 Q 70 342, 80 334 Q 90 344, 100 336 Q 110 344, 120 334 Q 130 342, 140 330"
        fill="none" stroke="url(#goldGrad)" stroke-width="1"
      />
      <circle cx="100" cy="338" r="2.5" fill="url(#goldGrad)" />

      <!-- Side decorative lines -->
      <line x1="6" y1="80" x2="6" y2="260" stroke="url(#goldGradVert)" stroke-width="0.5" stroke-dasharray="3,5" />
      <line x1="194" y1="80" x2="194" y2="260" stroke="url(#goldGradVert)" stroke-width="0.5" stroke-dasharray="3,5" />

      <!-- Top inner decoration line -->
      <path
        d="M 40 55 L 80 55 Q 100 48, 120 55 L 160 55"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.6"
      />
      <!-- Bottom inner decoration line -->
      <path
        d="M 40 285 L 80 285 Q 100 292, 120 285 L 160 285"
        fill="none" stroke="url(#goldGrad)" stroke-width="0.6"
      />

      <!-- Tiny diamond accents on sides -->
      <polygon points="6,170 9,166 12,170 9,174" fill="url(#goldGrad)" opacity="0.7" />
      <polygon points="188,170 191,166 194,170 191,174" fill="url(#goldGrad)" opacity="0.7" />
    </svg>

    <!-- Card content (rotates when reversed) -->
    <div class="card-face__content" :class="{ 'card-face__content--reversed': isReversed }">
      <!-- Reversed badge -->
      <div v-if="isReversed" class="card-face__badge">逆位</div>

      <!-- Card number -->
      <div class="card-face__number">
        <span class="card-face__number-text">{{ displayNumber }}</span>
      </div>

      <!-- Decorative separator -->
      <div class="card-face__separator card-face__separator--top">
        <span class="card-face__sep-dot">✦</span>
      </div>

      <!-- Central symbol -->
      <div class="card-face__symbol-wrap">
        <div class="card-face__symbol">{{ centralSymbol }}</div>
      </div>

      <!-- Card name -->
      <div class="card-face__name-block">
        <div class="card-face__name">{{ card.name }}</div>
        <div class="card-face__name-en">{{ card.nameEn }}</div>
      </div>

      <!-- Decorative separator -->
      <div class="card-face__separator card-face__separator--bottom">
        <span class="card-face__sep-dot">✦</span>
      </div>

      <!-- Keywords -->
      <div class="card-face__keywords">
        {{ keywords.join(' · ') }}
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
  overflow: hidden;
  position: relative;
}

/* ── SVG ornate frame ── */
.card-face__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

/* ── Card content ── */
.card-face__content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15% 12% 10%;
  gap: 2%;
  text-align: center;
  transition: transform 0.4s ease;
}

.card-face__content--reversed {
  transform: rotate(180deg);
}

/* ── Reversed badge ── */
.card-face__badge {
  position: absolute;
  top: 4%;
  right: 6%;
  background: var(--color-error);
  color: #fff;
  font-size: 0.6rem;
  padding: 1px 7px;
  border-radius: var(--border-radius-round);
  font-weight: 700;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  /* Undo the parent 180deg so badge reads normally */
  transform: rotate(180deg);
  z-index: 3;
}

/* ── Card number ── */
.card-face__number {
  flex-shrink: 0;
}

.card-face__number-text {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 40%,
    var(--color-primary) 60%,
    var(--color-accent) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* ── Decorative separators ── */
.card-face__separator {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 70%;
  flex-shrink: 0;
}

.card-face__separator::before,
.card-face__separator::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-primary) 50%,
    transparent
  );
  opacity: 0.5;
}

.card-face__sep-dot {
  font-size: 0.45rem;
  color: var(--color-primary);
  opacity: 0.7;
  flex-shrink: 0;
}

/* ── Central symbol ── */
.card-face__symbol-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.card-face__symbol-wrap::before {
  content: '';
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-primary-light) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.card-face__symbol {
  font-size: 3.2rem;
  line-height: 1;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25))
          drop-shadow(0 0 12px var(--color-card-glow));
  position: relative;
  z-index: 1;
}

/* ── Card name ── */
.card-face__name-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

.card-face__name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.08em;
  line-height: 1.3;
}

.card-face__name-en {
  font-family: var(--font-display);
  font-size: 0.62rem;
  color: var(--color-text-muted);
  font-style: italic;
  letter-spacing: 0.06em;
  opacity: 0.85;
}

/* ── Keywords ── */
.card-face__keywords {
  font-family: var(--font-body);
  font-size: 0.6rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  line-height: 1.5;
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 2%;
  opacity: 0.9;
}
</style>
