<script setup>
const { currentTheme } = useTheme()
</script>

<template>
  <div class="card-back" :class="`card-back--${currentTheme}`">
    <div class="card-back__pattern" />
    <div class="card-back__border">
      <div class="card-back__inner-frame">
        <!-- Mystic: All-seeing eye medallion -->
        <svg
          v-if="currentTheme === 'mystic'"
          class="card-back__medallion"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Outer gold circle -->
          <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" stroke-width="1.5" />
          <!-- Dashed inner circle -->
          <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="4 3" />
          <!-- 8 radiating lines (cardinal + diagonal) -->
          <line x1="50" y1="10" x2="50" y2="90" stroke="#d4af37" stroke-width="0.5" opacity="0.6" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#d4af37" stroke-width="0.5" opacity="0.6" />
          <line x1="21.72" y1="21.72" x2="78.28" y2="78.28" stroke="#d4af37" stroke-width="0.5" opacity="0.6" />
          <line x1="78.28" y1="21.72" x2="21.72" y2="78.28" stroke="#d4af37" stroke-width="0.5" opacity="0.6" />
          <!-- All-seeing eye -->
          <ellipse cx="50" cy="50" rx="14" ry="8" fill="none" stroke="#d4af37" stroke-width="1.2" />
          <circle cx="50" cy="50" r="4" fill="#d4af37" opacity="0.9" />
          <circle cx="50" cy="50" r="2" fill="#1a0a2e" />
          <!-- Upper eyelid detail -->
          <path d="M36 50 Q50 38 64 50" fill="none" stroke="#d4af37" stroke-width="0.6" opacity="0.5" />
          <!-- Lower eyelid detail -->
          <path d="M36 50 Q50 62 64 50" fill="none" stroke="#d4af37" stroke-width="0.6" opacity="0.5" />
          <!-- Decorative dots at cardinal points -->
          <circle cx="50" cy="12" r="1.5" fill="#d4af37" opacity="0.7" />
          <circle cx="50" cy="88" r="1.5" fill="#d4af37" opacity="0.7" />
          <circle cx="12" cy="50" r="1.5" fill="#d4af37" opacity="0.7" />
          <circle cx="88" cy="50" r="1.5" fill="#d4af37" opacity="0.7" />
          <!-- Small decorative circles at diagonal points -->
          <circle cx="23" cy="23" r="1" fill="#d4af37" opacity="0.5" />
          <circle cx="77" cy="23" r="1" fill="#d4af37" opacity="0.5" />
          <circle cx="23" cy="77" r="1" fill="#d4af37" opacity="0.5" />
          <circle cx="77" cy="77" r="1" fill="#d4af37" opacity="0.5" />
        </svg>

        <!-- Sakura: Magic circle with star, sun, moon -->
        <svg
          v-else-if="currentTheme === 'sakura'"
          class="card-back__medallion"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Outer double circle -->
          <circle cx="50" cy="50" r="42" fill="none" stroke="#edb458" stroke-width="1.2" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#edb458" stroke-width="0.6" opacity="0.6" />
          <!-- Inner dashed ring -->
          <circle cx="50" cy="50" r="30" fill="none" stroke="#edb458" stroke-width="0.8" stroke-dasharray="3 2.5" />
          <!-- 10-pointed star (two overlapping pentagons) -->
          <!-- Pentagon 1 -->
          <polygon
            points="50,12 61.8,38.2 91,38.2 67.6,56.8 75.5,84 50,67 24.5,84 32.4,56.8 9,38.2 38.2,38.2"
            fill="none"
            stroke="#edb458"
            stroke-width="0.7"
            opacity="0.7"
          />
          <!-- Pentagon 2 (rotated) -->
          <polygon
            points="50,88 38.2,61.8 9,61.8 32.4,43.2 24.5,16 50,33 75.5,16 67.6,43.2 91,61.8 61.8,61.8"
            fill="none"
            stroke="#edb458"
            stroke-width="0.7"
            opacity="0.7"
          />
          <!-- Sun in center -->
          <circle cx="50" cy="50" r="6" fill="none" stroke="#edb458" stroke-width="1" />
          <circle cx="50" cy="50" r="3" fill="#edb458" opacity="0.6" />
          <!-- Sun rays -->
          <line x1="50" y1="42" x2="50" y2="44" stroke="#edb458" stroke-width="1" />
          <line x1="50" y1="56" x2="50" y2="58" stroke="#edb458" stroke-width="1" />
          <line x1="42" y1="50" x2="44" y2="50" stroke="#edb458" stroke-width="1" />
          <line x1="56" y1="50" x2="58" y2="50" stroke="#edb458" stroke-width="1" />
          <line x1="44.3" y1="44.3" x2="45.7" y2="45.7" stroke="#edb458" stroke-width="0.8" />
          <line x1="54.3" y1="44.3" x2="55.7" y2="45.7" stroke="#edb458" stroke-width="0.8" />
          <line x1="44.3" y1="55.7" x2="45.7" y2="54.3" stroke="#edb458" stroke-width="0.8" />
          <line x1="54.3" y1="55.7" x2="55.7" y2="54.3" stroke="#edb458" stroke-width="0.8" />
          <!-- Moon crescent at top -->
          <circle cx="50" cy="8" r="4" fill="none" stroke="#edb458" stroke-width="0.8" />
          <circle cx="52" cy="7" r="3.2" fill="#c080a0" stroke="none" />
          <!-- Moon crescent at bottom -->
          <circle cx="50" cy="92" r="4" fill="none" stroke="#edb458" stroke-width="0.8" />
          <circle cx="48" cy="93" r="3.2" fill="#c080a0" stroke="none" />
          <!-- Sparkle dots -->
          <circle cx="15" cy="20" r="0.8" fill="#edb458" opacity="0.8" />
          <circle cx="85" cy="20" r="0.8" fill="#edb458" opacity="0.8" />
          <circle cx="15" cy="80" r="0.8" fill="#edb458" opacity="0.8" />
          <circle cx="85" cy="80" r="0.8" fill="#edb458" opacity="0.8" />
          <circle cx="8" cy="50" r="0.6" fill="#edb458" opacity="0.6" />
          <circle cx="92" cy="50" r="0.6" fill="#edb458" opacity="0.6" />
        </svg>

        <!-- Capybara: Cute capybara face -->
        <svg
          v-else
          class="card-back__medallion card-back__medallion--capybara"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Head shape -->
          <ellipse cx="50" cy="52" rx="30" ry="28" fill="#b8875a" />
          <ellipse cx="50" cy="52" rx="30" ry="28" fill="none" stroke="#8b6342" stroke-width="1" />
          <!-- Left ear -->
          <ellipse cx="27" cy="30" rx="7" ry="6" fill="#b8875a" stroke="#8b6342" stroke-width="0.8" />
          <ellipse cx="27" cy="30" rx="4" ry="3.5" fill="#e8a0a0" />
          <!-- Right ear -->
          <ellipse cx="73" cy="30" rx="7" ry="6" fill="#b8875a" stroke="#8b6342" stroke-width="0.8" />
          <ellipse cx="73" cy="30" rx="4" ry="3.5" fill="#e8a0a0" />
          <!-- Eyes -->
          <circle cx="38" cy="48" r="3.5" fill="#3a2a1a" />
          <circle cx="62" cy="48" r="3.5" fill="#3a2a1a" />
          <!-- Eye highlights -->
          <circle cx="39.2" cy="46.8" r="1.2" fill="white" />
          <circle cx="63.2" cy="46.8" r="1.2" fill="white" />
          <circle cx="37.5" cy="48.5" r="0.6" fill="white" opacity="0.7" />
          <circle cx="61.5" cy="48.5" r="0.6" fill="white" opacity="0.7" />
          <!-- Nose/muzzle area -->
          <ellipse cx="50" cy="60" rx="14" ry="10" fill="#c8976a" />
          <ellipse cx="50" cy="60" rx="14" ry="10" fill="none" stroke="#a07850" stroke-width="0.5" opacity="0.5" />
          <!-- Nose -->
          <ellipse cx="50" cy="57" rx="4" ry="2.5" fill="#5a3a2a" />
          <!-- Nostrils -->
          <circle cx="48" cy="57.5" r="0.8" fill="#3a2a1a" />
          <circle cx="52" cy="57.5" r="0.8" fill="#3a2a1a" />
          <!-- Smile -->
          <path d="M44 63 Q50 68 56 63" fill="none" stroke="#5a3a2a" stroke-width="1" stroke-linecap="round" />
          <!-- Blush cheeks -->
          <circle cx="32" cy="56" r="5" fill="#e8a0a0" opacity="0.5" />
          <circle cx="68" cy="56" r="5" fill="#e8a0a0" opacity="0.5" />
          <!-- Whisker dots -->
          <circle cx="35" cy="60" r="0.6" fill="#8b6342" opacity="0.4" />
          <circle cx="33" cy="62" r="0.6" fill="#8b6342" opacity="0.4" />
          <circle cx="65" cy="60" r="0.6" fill="#8b6342" opacity="0.4" />
          <circle cx="67" cy="62" r="0.6" fill="#8b6342" opacity="0.4" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-back {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg, 12px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-back:hover {
  transform: scale(1.03);
}

/* Background pattern layer */
.card-back__pattern {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

/* Border frame */
.card-back__border {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
}

/* Inner decorative frame */
.card-back__inner-frame {
  position: absolute;
  inset: 8%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Medallion SVG */
.card-back__medallion {
  width: 65%;
  height: auto;
  max-height: 55%;
  filter: drop-shadow(0 0 4px currentColor);
}

/* ============================================= */
/* MYSTIC THEME                                  */
/* ============================================= */
.card-back--mystic {
  background-color: #1a0a2e;
  box-shadow:
    inset 0 0 0 3px #2a1545,
    inset 0 0 0 5px #d4af37,
    inset 0 0 0 7px #2a1545,
    inset 0 0 0 9px rgba(212, 175, 55, 0.3),
    0 4px 20px rgba(0, 0, 0, 0.5);
}

.card-back--mystic:hover {
  box-shadow:
    inset 0 0 0 3px #2a1545,
    inset 0 0 0 5px #d4af37,
    inset 0 0 0 7px #2a1545,
    inset 0 0 0 9px rgba(212, 175, 55, 0.3),
    0 4px 30px rgba(212, 175, 55, 0.25),
    0 0 15px rgba(212, 175, 55, 0.15);
}

.card-back--mystic .card-back__pattern {
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 12px,
      rgba(212, 175, 55, 0.08) 12px,
      rgba(212, 175, 55, 0.08) 13px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 12px,
      rgba(212, 175, 55, 0.08) 12px,
      rgba(212, 175, 55, 0.08) 13px
    );
}

.card-back--mystic .card-back__inner-frame {
  border: 1px solid rgba(212, 175, 55, 0.25);
  box-shadow:
    inset 0 0 20px rgba(212, 175, 55, 0.05),
    0 0 8px rgba(212, 175, 55, 0.08);
}

.card-back--mystic .card-back__medallion {
  color: rgba(212, 175, 55, 0.4);
}

/* ============================================= */
/* SAKURA THEME                                  */
/* ============================================= */
.card-back--sakura {
  background: linear-gradient(160deg, #e8a0b8 0%, #d890a8 40%, #c080a0 100%);
  box-shadow:
    inset 0 0 0 3px rgba(237, 180, 88, 0.15),
    inset 0 0 0 5px rgba(255, 255, 255, 0.35),
    inset 0 0 0 7px rgba(237, 180, 88, 0.15),
    inset 0 0 0 9px rgba(237, 180, 88, 0.25),
    0 4px 20px rgba(0, 0, 0, 0.2);
}

.card-back--sakura:hover {
  box-shadow:
    inset 0 0 0 3px rgba(237, 180, 88, 0.15),
    inset 0 0 0 5px rgba(255, 255, 255, 0.35),
    inset 0 0 0 7px rgba(237, 180, 88, 0.15),
    inset 0 0 0 9px rgba(237, 180, 88, 0.25),
    0 4px 25px rgba(237, 180, 88, 0.2),
    0 0 20px rgba(255, 200, 220, 0.25);
}

.card-back--sakura .card-back__pattern {
  background:
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      transparent 36deg,
      rgba(255, 255, 255, 0.04) 36deg,
      rgba(255, 255, 255, 0.04) 72deg
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(255, 255, 255, 0.03) 20px,
      rgba(255, 255, 255, 0.03) 21px
    ),
    repeating-linear-gradient(
      60deg,
      transparent,
      transparent 20px,
      rgba(255, 255, 255, 0.03) 20px,
      rgba(255, 255, 255, 0.03) 21px
    ),
    repeating-linear-gradient(
      120deg,
      transparent,
      transparent 20px,
      rgba(255, 255, 255, 0.03) 20px,
      rgba(255, 255, 255, 0.03) 21px
    );
}

.card-back--sakura .card-back__inner-frame {
  border: 1px solid rgba(237, 180, 88, 0.3);
  box-shadow:
    inset 0 0 25px rgba(255, 255, 255, 0.08),
    0 0 6px rgba(237, 180, 88, 0.1);
}

.card-back--sakura .card-back__medallion {
  color: rgba(237, 180, 88, 0.35);
}

/* ============================================= */
/* CAPYBARA THEME                                */
/* ============================================= */
.card-back--capybara {
  background: linear-gradient(160deg, #e8c07a 0%, #ddb068 40%, #d4a055 100%);
  box-shadow:
    inset 0 0 0 4px rgba(139, 99, 66, 0.2),
    inset 0 0 0 7px #c8946a,
    inset 0 0 0 9px rgba(139, 99, 66, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.15);
  border: 2px solid #b8845a;
}

.card-back--capybara:hover {
  box-shadow:
    inset 0 0 0 4px rgba(139, 99, 66, 0.2),
    inset 0 0 0 7px #c8946a,
    inset 0 0 0 9px rgba(139, 99, 66, 0.15),
    0 6px 24px rgba(180, 140, 80, 0.25),
    0 0 12px rgba(232, 192, 122, 0.2);
}

.card-back--capybara .card-back__pattern {
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px) 0 0 / 18px 18px,
    radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px) 9px 9px / 18px 18px;
}

.card-back--capybara .card-back__inner-frame {
  border: 2px solid rgba(139, 99, 66, 0.2);
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08);
}

.card-back--capybara .card-back__medallion--capybara {
  width: 55%;
  filter: drop-shadow(0 2px 4px rgba(90, 58, 42, 0.25));
}
</style>
