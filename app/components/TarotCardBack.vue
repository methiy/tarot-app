<script setup>
const { currentTheme } = useTheme()
</script>

<template>
  <div class="card-back" :class="`card-back--${currentTheme}`">
    <div class="card-back__pattern" />
    <div class="card-back__border">
      <div class="card-back__inner-frame">
        <!-- Corner ornaments -->
        <div class="card-back__corner card-back__corner--tl" />
        <div class="card-back__corner card-back__corner--tr" />
        <div class="card-back__corner card-back__corner--bl" />
        <div class="card-back__corner card-back__corner--br" />

        <div class="card-back__medallion">
          <!-- ======= MYSTIC: All-Seeing Eye ======= -->
          <svg
            v-if="currentTheme === 'mystic'"
            viewBox="0 0 100 100"
            class="card-back__svg card-back__svg--mystic"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Outer gold circle -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" stroke-width="1.5" />
            <!-- Dashed inner circle -->
            <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="4 3" />
            <!-- Decorative middle ring -->
            <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" stroke-width="0.3" opacity="0.35" />
            <!-- 8 radiating lines: cardinal -->
            <line x1="50" y1="8" x2="50" y2="92" stroke="#d4af37" stroke-width="0.5" opacity="0.5" />
            <line x1="8" y1="50" x2="92" y2="50" stroke="#d4af37" stroke-width="0.5" opacity="0.5" />
            <!-- 8 radiating lines: diagonal -->
            <line x1="20.3" y1="20.3" x2="79.7" y2="79.7" stroke="#d4af37" stroke-width="0.5" opacity="0.4" />
            <line x1="79.7" y1="20.3" x2="20.3" y2="79.7" stroke="#d4af37" stroke-width="0.5" opacity="0.4" />
            <!-- All-seeing eye: outer shape -->
            <ellipse cx="50" cy="50" rx="18" ry="10" fill="none" stroke="#d4af37" stroke-width="1.2" />
            <!-- Upper eyelid accent -->
            <path d="M32 50 Q50 36 68 50" fill="none" stroke="#d4af37" stroke-width="0.7" opacity="0.6" />
            <!-- Lower eyelid accent -->
            <path d="M32 50 Q50 64 68 50" fill="none" stroke="#d4af37" stroke-width="0.7" opacity="0.6" />
            <!-- Iris -->
            <circle cx="50" cy="50" r="6" fill="none" stroke="#d4af37" stroke-width="1" />
            <!-- Pupil -->
            <circle cx="50" cy="50" r="2.8" fill="#d4af37" />
            <!-- Eye highlight -->
            <circle cx="52.5" cy="48" r="1" fill="#1a0a2e" opacity="0.9" />
            <!-- Cardinal point ornaments -->
            <circle cx="50" cy="10" r="2" fill="#d4af37" opacity="0.7" />
            <circle cx="50" cy="90" r="2" fill="#d4af37" opacity="0.7" />
            <circle cx="10" cy="50" r="2" fill="#d4af37" opacity="0.7" />
            <circle cx="90" cy="50" r="2" fill="#d4af37" opacity="0.7" />
            <!-- Diagonal point diamonds -->
            <polygon points="21.5,19.5 20,21 21.5,22.5 23,21" fill="#d4af37" opacity="0.5" />
            <polygon points="78.5,19.5 77,21 78.5,22.5 80,21" fill="#d4af37" opacity="0.5" />
            <polygon points="21.5,77.5 20,79 21.5,80.5 23,79" fill="#d4af37" opacity="0.5" />
            <polygon points="78.5,77.5 77,79 78.5,80.5 80,79" fill="#d4af37" opacity="0.5" />
            <!-- Tiny accent dots between cardinal and diagonal -->
            <circle cx="33" cy="13" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="67" cy="13" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="13" cy="33" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="87" cy="33" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="13" cy="67" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="87" cy="67" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="33" cy="87" r="0.7" fill="#d4af37" opacity="0.35" />
            <circle cx="67" cy="87" r="0.7" fill="#d4af37" opacity="0.35" />
          </svg>

          <!-- ======= SAKURA: Magic Circle ======= -->
          <svg
            v-else-if="currentTheme === 'sakura'"
            viewBox="0 0 100 100"
            class="card-back__svg card-back__svg--sakura"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Outer double circle -->
            <circle cx="50" cy="50" r="44" fill="none" stroke="#edb458" stroke-width="1.2" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#edb458" stroke-width="0.5" opacity="0.7" />
            <!-- Inner dashed ring -->
            <circle cx="50" cy="50" r="32" fill="none" stroke="#edb458" stroke-width="0.7" stroke-dasharray="3 2.5" />
            <!-- 10-pointed star: Pentagon 1 (upright) -->
            <polygon
              points="50,10 62.2,37.6 92,37.6 68,57 76,85.4 50,67 24,85.4 32,57 8,37.6 37.8,37.6"
              fill="none"
              stroke="#edb458"
              stroke-width="0.65"
              opacity="0.75"
            />
            <!-- 10-pointed star: Pentagon 2 (inverted) -->
            <polygon
              points="50,90 37.8,62.4 8,62.4 32,43 24,14.6 50,33 76,14.6 68,43 92,62.4 62.2,62.4"
              fill="none"
              stroke="#edb458"
              stroke-width="0.65"
              opacity="0.75"
            />
            <!-- Sun in center -->
            <circle cx="50" cy="50" r="8" fill="none" stroke="#edb458" stroke-width="1" />
            <circle cx="50" cy="50" r="4" fill="#edb458" opacity="0.35" />
            <!-- 12 Sun rays -->
            <line x1="50" y1="40" x2="50" y2="42" stroke="#edb458" stroke-width="0.9" stroke-linecap="round" />
            <line x1="50" y1="58" x2="50" y2="60" stroke="#edb458" stroke-width="0.9" stroke-linecap="round" />
            <line x1="40" y1="50" x2="42" y2="50" stroke="#edb458" stroke-width="0.9" stroke-linecap="round" />
            <line x1="58" y1="50" x2="60" y2="50" stroke="#edb458" stroke-width="0.9" stroke-linecap="round" />
            <line x1="43" y1="43" x2="44.4" y2="44.4" stroke="#edb458" stroke-width="0.7" stroke-linecap="round" />
            <line x1="55.6" y1="44.4" x2="57" y2="43" stroke="#edb458" stroke-width="0.7" stroke-linecap="round" />
            <line x1="43" y1="57" x2="44.4" y2="55.6" stroke="#edb458" stroke-width="0.7" stroke-linecap="round" />
            <line x1="55.6" y1="55.6" x2="57" y2="57" stroke="#edb458" stroke-width="0.7" stroke-linecap="round" />
            <line x1="46" y1="41" x2="46.6" y2="42.4" stroke="#edb458" stroke-width="0.5" stroke-linecap="round" />
            <line x1="53.4" y1="42.4" x2="54" y2="41" stroke="#edb458" stroke-width="0.5" stroke-linecap="round" />
            <line x1="46" y1="59" x2="46.6" y2="57.6" stroke="#edb458" stroke-width="0.5" stroke-linecap="round" />
            <line x1="53.4" y1="57.6" x2="54" y2="59" stroke="#edb458" stroke-width="0.5" stroke-linecap="round" />
            <!-- Moon crescent at top -->
            <circle cx="50" cy="7" r="4.5" fill="none" stroke="#edb458" stroke-width="0.8" />
            <circle cx="52.5" cy="6" r="3.8" fill="#d898b0" stroke="none" />
            <!-- Moon crescent at bottom -->
            <circle cx="50" cy="93" r="4.5" fill="none" stroke="#edb458" stroke-width="0.8" />
            <circle cx="47.5" cy="94" r="3.8" fill="#c080a0" stroke="none" />
            <!-- Sparkle accent dots -->
            <circle cx="14" cy="18" r="1" fill="#edb458" opacity="0.7" />
            <circle cx="86" cy="18" r="1" fill="#edb458" opacity="0.7" />
            <circle cx="14" cy="82" r="1" fill="#edb458" opacity="0.7" />
            <circle cx="86" cy="82" r="1" fill="#edb458" opacity="0.7" />
            <circle cx="6" cy="50" r="0.7" fill="#edb458" opacity="0.5" />
            <circle cx="94" cy="50" r="0.7" fill="#edb458" opacity="0.5" />
            <!-- 4-point twinkle stars in corners -->
            <path d="M14 50 L14.5 49 L15 50 L14.5 51 Z" fill="#edb458" opacity="0.5" />
            <path d="M86 50 L86.5 49 L87 50 L86.5 51 Z" fill="#edb458" opacity="0.5" />
          </svg>

          <!-- ======= CAPYBARA: Cute Face ======= -->
          <svg
            v-else
            viewBox="0 0 100 100"
            class="card-back__svg card-back__svg--capybara"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Head shape -->
            <ellipse cx="50" cy="54" rx="32" ry="29" fill="#c09060" />
            <ellipse cx="50" cy="54" rx="32" ry="29" fill="none" stroke="#8b6340" stroke-width="1.2" />
            <!-- Left ear -->
            <ellipse cx="25" cy="29" rx="9" ry="7" fill="#c09060" stroke="#8b6340" stroke-width="0.9" />
            <ellipse cx="25" cy="29" rx="5.5" ry="4" fill="#e8a0a0" opacity="0.7" />
            <!-- Right ear -->
            <ellipse cx="75" cy="29" rx="9" ry="7" fill="#c09060" stroke="#8b6340" stroke-width="0.9" />
            <ellipse cx="75" cy="29" rx="5.5" ry="4" fill="#e8a0a0" opacity="0.7" />
            <!-- Muzzle / snout area -->
            <ellipse cx="50" cy="62" rx="18" ry="14" fill="#d4a878" />
            <ellipse cx="50" cy="62" rx="18" ry="14" fill="none" stroke="#a07850" stroke-width="0.4" opacity="0.4" />
            <!-- Left eye -->
            <circle cx="37" cy="47" r="4" fill="#2c1810" />
            <circle cx="38.5" cy="45.5" r="1.5" fill="white" />
            <circle cx="36" cy="47.8" r="0.7" fill="white" opacity="0.6" />
            <!-- Right eye -->
            <circle cx="63" cy="47" r="4" fill="#2c1810" />
            <circle cx="64.5" cy="45.5" r="1.5" fill="white" />
            <circle cx="62" cy="47.8" r="0.7" fill="white" opacity="0.6" />
            <!-- Nose -->
            <ellipse cx="50" cy="57" rx="5" ry="3" fill="#5c3a28" />
            <ellipse cx="51.5" cy="56.2" r="1.5" ry="0.9" fill="#7a5040" opacity="0.5" />
            <!-- Nostrils -->
            <circle cx="47.5" cy="57.8" r="1" fill="#3a2010" />
            <circle cx="52.5" cy="57.8" r="1" fill="#3a2010" />
            <!-- Smile -->
            <path d="M42 64 Q50 71 58 64" fill="none" stroke="#5c3a28" stroke-width="1.3" stroke-linecap="round" />
            <!-- Left blush -->
            <circle cx="30" cy="58" r="6" fill="#e8a0a0" opacity="0.45" />
            <!-- Right blush -->
            <circle cx="70" cy="58" r="6" fill="#e8a0a0" opacity="0.45" />
            <!-- Whisker dots -->
            <circle cx="34" cy="62" r="0.7" fill="#8b6340" opacity="0.5" />
            <circle cx="31" cy="64" r="0.7" fill="#8b6340" opacity="0.5" />
            <circle cx="36" cy="64.5" r="0.7" fill="#8b6340" opacity="0.5" />
            <circle cx="66" cy="62" r="0.7" fill="#8b6340" opacity="0.5" />
            <circle cx="69" cy="64" r="0.7" fill="#8b6340" opacity="0.5" />
            <circle cx="64" cy="64.5" r="0.7" fill="#8b6340" opacity="0.5" />
            <!-- Tiny tuft of fur on top -->
            <path d="M46 26 Q48 22 50 26 Q52 22 54 26" fill="none" stroke="#a07848" stroke-width="1" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========================
   Base card structure
   ======================== */
.card-back {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg, 12px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease;
}

.card-back:hover {
  transform: scale(1.03);
}

/* Background pattern overlay */
.card-back__pattern {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 0;
}

/* Outer border container */
.card-back__border {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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

/* Corner ornaments (positioned by theme) */
.card-back__corner {
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 2;
  pointer-events: none;
}

.card-back__corner--tl { top: 0; left: 0; }
.card-back__corner--tr { top: 0; right: 0; }
.card-back__corner--bl { bottom: 0; left: 0; }
.card-back__corner--br { bottom: 0; right: 0; }

/* Medallion container */
.card-back__medallion {
  width: 65%;
  max-width: 140px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.card-back__svg {
  width: 100%;
  height: 100%;
}

/* ============================================================
   THEME 1: MYSTIC — Deep purple with gold lattice & all-seeing eye
   ============================================================ */
.card-back--mystic {
  background-color: #1a0a2e;
  box-shadow:
    inset 0 0 0 3px #1a0a2e,
    inset 0 0 0 5px rgba(212, 175, 55, 0.6),
    inset 0 0 0 7px #1a0a2e,
    inset 0 0 0 8.5px rgba(212, 175, 55, 0.25),
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 12px rgba(212, 175, 55, 0.06);
}

.card-back--mystic:hover {
  box-shadow:
    inset 0 0 0 3px #1a0a2e,
    inset 0 0 0 5px rgba(212, 175, 55, 0.75),
    inset 0 0 0 7px #1a0a2e,
    inset 0 0 0 8.5px rgba(212, 175, 55, 0.35),
    0 8px 32px rgba(0, 0, 0, 0.55),
    0 0 24px rgba(212, 175, 55, 0.12);
}

/* Diamond lattice pattern — thin gold lines at 45deg */
.card-back--mystic .card-back__pattern {
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 11px,
      rgba(212, 175, 55, 0.09) 11px,
      rgba(212, 175, 55, 0.09) 12px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 11px,
      rgba(212, 175, 55, 0.09) 11px,
      rgba(212, 175, 55, 0.09) 12px
    );
}

.card-back--mystic .card-back__inner-frame {
  border: 1px solid rgba(212, 175, 55, 0.22);
  background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.04) 0%, transparent 65%);
  box-shadow:
    inset 0 0 30px rgba(212, 175, 55, 0.04),
    0 0 8px rgba(212, 175, 55, 0.06);
}

/* Corner L-shapes in gold */
.card-back--mystic .card-back__corner::before,
.card-back--mystic .card-back__corner::after {
  content: '';
  position: absolute;
  background: #d4af37;
  opacity: 0.5;
}

.card-back--mystic .card-back__corner::before {
  width: 14px;
  height: 1px;
}

.card-back--mystic .card-back__corner::after {
  width: 1px;
  height: 14px;
}

.card-back--mystic .card-back__corner--tl::before,
.card-back--mystic .card-back__corner--tl::after { top: 0; left: 0; }
.card-back--mystic .card-back__corner--tr::before { top: 0; right: 0; }
.card-back--mystic .card-back__corner--tr::after { top: 0; right: 0; }
.card-back--mystic .card-back__corner--bl::before { bottom: 0; left: 0; }
.card-back--mystic .card-back__corner--bl::after { bottom: 0; left: 0; }
.card-back--mystic .card-back__corner--br::before { bottom: 0; right: 0; }
.card-back--mystic .card-back__corner--br::after { bottom: 0; right: 0; }

.card-back__svg--mystic {
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
}

/* ============================================================
   THEME 2: SAKURA — Pink gradient with magic circle & sparkle
   ============================================================ */
.card-back--sakura {
  background: linear-gradient(160deg, #e8a0b8 0%, #d690a8 50%, #c080a0 100%);
  box-shadow:
    inset 0 0 0 3px rgba(237, 180, 88, 0.2),
    inset 0 0 0 5px rgba(255, 255, 255, 0.3),
    inset 0 0 0 7px rgba(237, 180, 88, 0.15),
    inset 0 0 0 9px rgba(237, 180, 88, 0.25),
    0 4px 20px rgba(140, 70, 100, 0.3),
    0 0 10px rgba(237, 180, 88, 0.06);
}

.card-back--sakura:hover {
  box-shadow:
    inset 0 0 0 3px rgba(237, 180, 88, 0.3),
    inset 0 0 0 5px rgba(255, 255, 255, 0.4),
    inset 0 0 0 7px rgba(237, 180, 88, 0.2),
    inset 0 0 0 9px rgba(237, 180, 88, 0.35),
    0 8px 30px rgba(140, 70, 100, 0.4),
    0 0 20px rgba(255, 200, 220, 0.2);
}

/* Faint repeating star / hexagonal pattern */
.card-back--sakura .card-back__pattern {
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.05) 18px,
      rgba(255, 255, 255, 0.05) 19px
    ),
    repeating-linear-gradient(
      60deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.05) 18px,
      rgba(255, 255, 255, 0.05) 19px
    ),
    repeating-linear-gradient(
      120deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.05) 18px,
      rgba(255, 255, 255, 0.05) 19px
    );
}

.card-back--sakura .card-back__inner-frame {
  border: 1px solid rgba(237, 180, 88, 0.3);
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 65%);
  box-shadow:
    inset 0 0 25px rgba(255, 255, 255, 0.06),
    0 0 8px rgba(237, 180, 88, 0.08);
}

/* Corner accents in gold */
.card-back--sakura .card-back__corner::before,
.card-back--sakura .card-back__corner::after {
  content: '';
  position: absolute;
  background: #edb458;
  opacity: 0.4;
}

.card-back--sakura .card-back__corner::before {
  width: 12px;
  height: 1px;
}

.card-back--sakura .card-back__corner::after {
  width: 1px;
  height: 12px;
}

.card-back--sakura .card-back__corner--tl::before,
.card-back--sakura .card-back__corner--tl::after { top: 0; left: 0; }
.card-back--sakura .card-back__corner--tr::before { top: 0; right: 0; }
.card-back--sakura .card-back__corner--tr::after { top: 0; right: 0; }
.card-back--sakura .card-back__corner--bl::before { bottom: 0; left: 0; }
.card-back--sakura .card-back__corner--bl::after { bottom: 0; left: 0; }
.card-back--sakura .card-back__corner--br::before { bottom: 0; right: 0; }
.card-back--sakura .card-back__corner--br::after { bottom: 0; right: 0; }

.card-back__svg--sakura {
  filter: drop-shadow(0 0 6px rgba(237, 180, 88, 0.25));
}

/* ============================================================
   THEME 3: CAPYBARA — Warm tones, polka dots, kawaii face
   ============================================================ */
.card-back--capybara {
  background: linear-gradient(160deg, #e8c07a 0%, #ddb068 50%, #d4a055 100%);
  box-shadow:
    inset 0 0 0 4px #c08840,
    inset 0 0 0 6px rgba(255, 255, 255, 0.18),
    0 4px 18px rgba(120, 80, 40, 0.25),
    0 2px 8px rgba(120, 80, 40, 0.15);
}

.card-back--capybara:hover {
  box-shadow:
    inset 0 0 0 4px #c08840,
    inset 0 0 0 6px rgba(255, 255, 255, 0.25),
    0 8px 28px rgba(120, 80, 40, 0.35),
    0 4px 12px rgba(120, 80, 40, 0.2);
}

/* Polka dot pattern via repeating-radial-gradient */
.card-back--capybara .card-back__pattern {
  background:
    radial-gradient(circle 3.5px at 10px 10px, rgba(255, 255, 255, 0.16) 3px, transparent 3.5px),
    radial-gradient(circle 3.5px at 30px 30px, rgba(255, 255, 255, 0.16) 3px, transparent 3.5px);
  background-size: 40px 40px;
}

.card-back--capybara .card-back__inner-frame {
  border: 2px dashed rgba(139, 99, 64, 0.22);
  border-radius: 10px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 65%);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.06);
}

/* Rounded dot corners for kawaii feel */
.card-back--capybara .card-back__corner {
  width: 8px;
  height: 8px;
  background: rgba(192, 136, 64, 0.35);
  border-radius: 50%;
}

.card-back__svg--capybara {
  filter: drop-shadow(0 2px 5px rgba(92, 58, 40, 0.22));
}
</style>
