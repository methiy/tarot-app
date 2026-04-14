<script setup lang="ts">
const props = defineProps<{
  cardId: number
  suit?: string
}>()

const isMajor = computed(() => props.cardId < 22)
</script>

<template>
  <svg
    class="card-illustration"
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- ═══════════════════════════════════════════ -->
    <!--  MAJOR ARCANA (0-21)                        -->
    <!-- ═══════════════════════════════════════════ -->

    <!-- 0 ── The Fool ── -->
    <g v-if="cardId === 0">
      <!-- Sun top-right -->
      <circle cx="82" cy="18" r="10" fill="none" stroke="var(--ill-accent)" stroke-width="1.5" />
      <line v-for="a in 8" :key="a"
        :x1="82 + 13 * Math.cos(a * Math.PI / 4)" :y1="18 + 13 * Math.sin(a * Math.PI / 4)"
        :x2="82 + 17 * Math.cos(a * Math.PI / 4)" :y2="18 + 17 * Math.sin(a * Math.PI / 4)"
        stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Ground / cliff -->
      <path d="M 0 95 L 55 92 L 60 95 L 60 120 L 0 120 Z" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 60 95 L 65 110 L 100 115 L 100 120 L 0 120" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Wavy ground texture -->
      <path d="M 5 100 Q 15 97, 25 100 Q 35 103, 45 100" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Figure -->
      <circle cx="48" cy="55" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 48 62 L 48 80 M 48 68 L 38 75 M 48 68 L 56 60 M 48 80 L 42 92 M 48 80 L 54 92" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Bundle on stick -->
      <line x1="56" y1="60" x2="62" y2="45" stroke="var(--ill-primary)" stroke-width="1.5" />
      <circle cx="64" cy="42" r="5" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Small dog -->
      <ellipse cx="30" cy="88" rx="6" ry="4" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <circle cx="24" cy="85" r="2.5" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <line x1="26" y1="92" x2="26" y2="95" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <line x1="34" y1="92" x2="34" y2="95" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Decorative dots -->
      <circle cx="15" cy="20" r="1" fill="var(--ill-accent)" />
      <circle cx="25" cy="12" r="1" fill="var(--ill-accent)" />
      <circle cx="10" cy="30" r="0.8" fill="var(--ill-accent)" />
    </g>

    <!-- 1 ── The Magician ── -->
    <g v-else-if="cardId === 1">
      <!-- Infinity symbol above head -->
      <path d="M 42 18 Q 50 10, 58 18 Q 50 26, 42 18 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Rays -->
      <line v-for="a in 6" :key="a"
        :x1="50 + 20 * Math.cos(a * Math.PI / 3)" :y1="18 + 20 * Math.sin(a * Math.PI / 3)"
        :x2="50 + 26 * Math.cos(a * Math.PI / 3)" :y2="18 + 26 * Math.sin(a * Math.PI / 3)"
        stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Figure -->
      <circle cx="50" cy="38" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 45 L 50 78 M 50 55 L 35 50 M 50 55 L 65 42 M 50 78 L 42 95 M 50 78 L 58 95" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Right arm raised -->
      <circle cx="67" cy="39" r="2" fill="var(--ill-accent)" />
      <!-- Table -->
      <rect x="20" y="96" width="60" height="3" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <line x1="25" y1="99" x2="25" y2="110" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="75" y1="99" x2="75" y2="110" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- 4 objects on table: cup, sword, pentacle, wand -->
      <path d="M 30 93 L 28 96 L 32 96 Z" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <line x1="42" y1="88" x2="42" y2="96" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <circle cx="55" cy="93" r="3" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <line x1="66" y1="89" x2="66" y2="96" stroke="var(--ill-secondary)" stroke-width="1.2" />
      <circle cx="66" cy="88" r="1.5" fill="var(--ill-accent)" />
    </g>

    <!-- 2 ── The High Priestess ── -->
    <g v-else-if="cardId === 2">
      <!-- Pillar B (left) -->
      <rect x="12" y="25" width="10" height="70" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <text x="17" y="65" text-anchor="middle" font-size="8" fill="var(--ill-secondary)" font-weight="bold">B</text>
      <!-- Pillar J (right) -->
      <rect x="78" y="25" width="10" height="70" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <text x="83" y="65" text-anchor="middle" font-size="8" fill="var(--ill-secondary)" font-weight="bold">J</text>
      <!-- Veil / curtain between pillars -->
      <path d="M 22 25 Q 35 30, 50 28 Q 65 26, 78 25" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" stroke-dasharray="3,2" />
      <!-- Seated figure -->
      <circle cx="50" cy="38" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 45 L 50 70 M 50 55 L 38 62 M 50 55 L 62 62 M 50 70 L 42 85 L 38 85 M 50 70 L 58 85 L 62 85" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Scroll in lap -->
      <rect x="43" y="68" width="14" height="6" rx="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Crown / tiara -->
      <path d="M 43 32 L 46 28 L 50 33 L 54 28 L 57 32" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Crescent moon at feet -->
      <path d="M 44 95 Q 50 88, 56 95 Q 50 92, 44 95 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Stars -->
      <circle cx="30" cy="15" r="1" fill="var(--ill-accent)" />
      <circle cx="70" cy="15" r="1" fill="var(--ill-accent)" />
      <circle cx="50" cy="10" r="1.2" fill="var(--ill-accent)" />
    </g>

    <!-- 3 ── The Empress ── -->
    <g v-else-if="cardId === 3">
      <!-- Figure -->
      <circle cx="50" cy="35" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 42 L 50 72 M 50 52 L 36 60 M 50 52 L 64 60 M 50 72 L 42 90 M 50 72 L 58 90" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Crown -->
      <path d="M 42 30 L 44 24 L 47 29 L 50 22 L 53 29 L 56 24 L 58 30" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Heart shape -->
      <path d="M 50 60 Q 42 52, 44 48 Q 47 44, 50 50 Q 53 44, 56 48 Q 58 52, 50 60 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Venus symbol -->
      <circle cx="78" cy="50" r="5" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <line x1="78" y1="55" x2="78" y2="65" stroke="var(--ill-secondary)" stroke-width="1" />
      <line x1="74" y1="60" x2="82" y2="60" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Wheat stalks left -->
      <line x1="15" y1="105" x2="20" y2="60" stroke="var(--ill-secondary)" stroke-width="1" />
      <ellipse cx="18" cy="65" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(-10 18 65)" />
      <ellipse cx="20" cy="72" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(5 20 72)" />
      <ellipse cx="17" cy="79" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(-8 17 79)" />
      <!-- Wheat stalks right -->
      <line x1="85" y1="105" x2="80" y2="60" stroke="var(--ill-secondary)" stroke-width="1" />
      <ellipse cx="82" cy="65" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(10 82 65)" />
      <ellipse cx="80" cy="72" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(-5 80 72)" />
      <ellipse cx="83" cy="79" rx="2" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" transform="rotate(8 83 79)" />
      <!-- Ground flowers -->
      <circle cx="30" cy="108" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="70" cy="108" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="50" cy="112" r="1.5" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
    </g>

    <!-- 4 ── The Emperor ── -->
    <g v-else-if="cardId === 4">
      <!-- Mountains (background) -->
      <polygon points="0,110 20,70 40,110" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <polygon points="60,110 80,65 100,110" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Geometric throne -->
      <rect x="30" y="45" width="40" height="50" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <line x1="30" y1="45" x2="35" y2="30" stroke="var(--ill-primary)" stroke-width="1.5" />
      <line x1="70" y1="45" x2="65" y2="30" stroke="var(--ill-primary)" stroke-width="1.5" />
      <line x1="35" y1="30" x2="65" y2="30" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Ram horns on throne -->
      <path d="M 28 40 Q 18 30, 15 42 Q 13 50, 20 48" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <path d="M 72 40 Q 82 30, 85 42 Q 87 50, 80 48" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Seated figure -->
      <circle cx="50" cy="42" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 48 L 50 72 M 50 56 L 38 62 M 50 56 L 62 55 M 50 72 L 42 88 L 38 88 M 50 72 L 58 88 L 62 88" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Crown -->
      <path d="M 44 38 L 46 33 L 50 37 L 54 33 L 56 38" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Scepter in right hand -->
      <line x1="62" y1="55" x2="72" y2="35" stroke="var(--ill-accent)" stroke-width="1.2" />
      <circle cx="73" cy="33" r="2.5" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
    </g>

    <!-- 5 ── The Hierophant ── -->
    <g v-else-if="cardId === 5">
      <!-- Two pillars -->
      <rect x="10" y="20" width="8" height="80" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <rect x="82" y="20" width="8" height="80" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Central figure -->
      <circle cx="50" cy="30" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 37 L 50 72 M 50 48 L 36 55 M 50 48 L 64 55 M 50 72 L 42 88 M 50 72 L 58 88" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Triple-tiered crown -->
      <rect x="44" y="18" width="12" height="5" rx="1" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <rect x="46" y="14" width="8" height="5" rx="1" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <rect x="48" y="10" width="4" height="5" rx="1" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Raised hand blessing -->
      <path d="M 64 55 L 66 50 M 66 50 L 64 47 M 66 50 L 68 47" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Two crossed keys below -->
      <line x1="40" y1="80" x2="60" y2="95" stroke="var(--ill-accent)" stroke-width="1.2" />
      <line x1="60" y1="80" x2="40" y2="95" stroke="var(--ill-accent)" stroke-width="1.2" />
      <circle cx="40" cy="80" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="60" cy="80" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Two kneeling figures -->
      <circle cx="30" cy="92" r="3" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 30 95 L 30 105 M 30 100 L 35 98" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <circle cx="70" cy="92" r="3" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 70 95 L 70 105 M 70 100 L 65 98" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
    </g>

    <!-- 6 ── The Lovers ── -->
    <g v-else-if="cardId === 6">
      <!-- Radiating sun top -->
      <circle cx="50" cy="12" r="8" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <line v-for="a in 10" :key="a"
        :x1="50 + 10 * Math.cos(a * Math.PI / 5)" :y1="12 + 10 * Math.sin(a * Math.PI / 5)"
        :x2="50 + 14 * Math.cos(a * Math.PI / 5)" :y2="12 + 14 * Math.sin(a * Math.PI / 5)"
        stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Angel/wings above -->
      <circle cx="50" cy="35" r="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 45 38 L 30 32 Q 25 40, 40 42" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <path d="M 55 38 L 70 32 Q 75 40, 60 42" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Heart between -->
      <path d="M 50 58 Q 44 52, 46 48 Q 48 45, 50 50 Q 52 45, 54 48 Q 56 52, 50 58 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Left figure -->
      <circle cx="30" cy="68" r="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 30 73 L 30 92 M 30 80 L 38 76 M 30 80 L 22 84 M 30 92 L 25 108 M 30 92 L 35 108" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Right figure -->
      <circle cx="70" cy="68" r="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 70 73 L 70 92 M 70 80 L 62 76 M 70 80 L 78 84 M 70 92 L 65 108 M 70 92 L 75 108" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Ground -->
      <path d="M 0 112 Q 25 108, 50 112 Q 75 108, 100 112" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
    </g>

    <!-- 7 ── The Chariot ── -->
    <g v-else-if="cardId === 7">
      <!-- Stars above -->
      <circle cx="50" cy="8" r="2" fill="var(--ill-accent)" />
      <circle cx="35" cy="12" r="1.2" fill="var(--ill-accent)" />
      <circle cx="65" cy="12" r="1.2" fill="var(--ill-accent)" />
      <circle cx="25" cy="8" r="1" fill="var(--ill-accent)" />
      <circle cx="75" cy="8" r="1" fill="var(--ill-accent)" />
      <!-- Canopy -->
      <path d="M 30 22 L 50 15 L 70 22 L 70 40 L 30 40 Z" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Figure in chariot -->
      <circle cx="50" cy="32" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 38 L 50 55 M 50 45 L 40 50 M 50 45 L 60 50" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Crown -->
      <path d="M 45 27 L 47 23 L 50 27 L 53 23 L 55 27" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Chariot body -->
      <rect x="28" y="55" width="44" height="25" rx="3" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Wheels -->
      <circle cx="28" cy="82" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <circle cx="28" cy="82" r="2" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <circle cx="72" cy="82" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <circle cx="72" cy="82" r="2" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Left sphinx (dark) -->
      <ellipse cx="18" cy="95" rx="10" ry="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <circle cx="10" cy="90" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <line x1="18" y1="100" x2="14" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="18" y1="100" x2="22" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Right sphinx (light) -->
      <ellipse cx="82" cy="95" rx="10" ry="5" fill="none" stroke="var(--ill-secondary)" stroke-width="1.5" />
      <circle cx="90" cy="90" r="3" fill="none" stroke="var(--ill-secondary)" stroke-width="1.2" />
      <line x1="82" y1="100" x2="78" y2="108" stroke="var(--ill-secondary)" stroke-width="1" />
      <line x1="82" y1="100" x2="86" y2="108" stroke="var(--ill-secondary)" stroke-width="1" />
    </g>

    <!-- 8 ── Strength ── -->
    <g v-else-if="cardId === 8">
      <!-- Infinity symbol above -->
      <path d="M 42 15 Q 50 8, 58 15 Q 50 22, 42 15 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Female figure -->
      <circle cx="50" cy="32" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 38 L 50 65 M 50 48 L 38 55 M 50 48 L 62 52 M 50 65 L 42 85 M 50 65 L 58 85" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Long hair -->
      <path d="M 44 30 Q 38 40, 40 50" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <path d="M 56 30 Q 62 40, 60 50" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <!-- Lion body -->
      <ellipse cx="50" cy="88" rx="18" ry="10" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Lion head -->
      <circle cx="32" cy="80" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Lion mane -->
      <path d="M 26 74 Q 22 78, 24 84 Q 22 88, 28 90" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 30 73 Q 34 70, 38 74" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Lion legs -->
      <line x1="38" y1="96" x2="36" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="45" y1="97" x2="44" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="56" y1="97" x2="57" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="62" y1="96" x2="64" y2="108" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Flower garland -->
      <circle cx="44" cy="56" r="1.5" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="48" cy="58" r="1.5" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="52" cy="57" r="1.5" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Hands reaching to lion -->
      <path d="M 38 55 Q 34 65, 32 74" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
    </g>

    <!-- 9 ── The Hermit ── -->
    <g v-else-if="cardId === 9">
      <!-- Mountain -->
      <polygon points="10,115 50,35 90,115" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 30 75 L 50 35 L 70 75" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Figure on peak -->
      <circle cx="50" cy="30" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Cloak -->
      <path d="M 44 34 L 38 70 L 50 72 L 62 70 L 56 34" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 72 L 44 88 M 50 72 L 56 88" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Walking staff -->
      <line x1="38" y1="45" x2="34" y2="95" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Lantern -->
      <rect x="57" y="28" width="8" height="10" rx="1" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <line x1="61" y1="25" x2="61" y2="28" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 58 25 L 61 22 L 64 25" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Star glow in lantern -->
      <path d="M 61 33 L 62 30 L 64 33 L 61 31.5 L 58 33 L 60 30 Z" fill="var(--ill-accent)" stroke="none" />
      <!-- Light rays from lantern -->
      <line x1="66" y1="30" x2="72" y2="26" stroke="var(--ill-accent)" stroke-width="0.6" />
      <line x1="66" y1="33" x2="73" y2="33" stroke="var(--ill-accent)" stroke-width="0.6" />
      <line x1="66" y1="36" x2="72" y2="40" stroke="var(--ill-accent)" stroke-width="0.6" />
      <!-- Stars in sky -->
      <circle cx="15" cy="15" r="1" fill="var(--ill-accent)" />
      <circle cx="80" cy="10" r="1.2" fill="var(--ill-accent)" />
      <circle cx="90" cy="20" r="0.8" fill="var(--ill-accent)" />
    </g>

    <!-- 10 ── Wheel of Fortune ── -->
    <g v-else-if="cardId === 10">
      <!-- Large wheel -->
      <circle cx="50" cy="60" r="30" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <circle cx="50" cy="60" r="20" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="50" cy="60" r="5" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Cross inside wheel -->
      <line x1="50" y1="30" x2="50" y2="90" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="20" y1="60" x2="80" y2="60" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Diagonal spokes -->
      <line x1="29" y1="39" x2="71" y2="81" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <line x1="71" y1="39" x2="29" y2="81" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Letters T-A-R-O -->
      <text x="50" y="45" text-anchor="middle" font-size="6" fill="var(--ill-accent)">T</text>
      <text x="65" y="63" text-anchor="middle" font-size="6" fill="var(--ill-accent)">A</text>
      <text x="50" y="80" text-anchor="middle" font-size="6" fill="var(--ill-accent)">R</text>
      <text x="35" y="63" text-anchor="middle" font-size="6" fill="var(--ill-accent)">O</text>
      <!-- Sphinx on top -->
      <ellipse cx="50" cy="24" rx="8" ry="4" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <circle cx="50" cy="18" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Snake on right side -->
      <path d="M 82 55 Q 86 50, 84 45 Q 82 40, 86 38" fill="none" stroke="var(--ill-secondary)" stroke-width="1.2" />
      <circle cx="86" cy="37" r="1.5" fill="var(--ill-secondary)" />
      <!-- Corner symbols -->
      <circle cx="12" cy="10" r="1.5" fill="var(--ill-accent)" />
      <circle cx="88" cy="10" r="1.5" fill="var(--ill-accent)" />
      <circle cx="12" cy="110" r="1.5" fill="var(--ill-accent)" />
      <circle cx="88" cy="110" r="1.5" fill="var(--ill-accent)" />
    </g>

    <!-- 11 ── Justice ── -->
    <g v-else-if="cardId === 11">
      <!-- Two pillars -->
      <rect x="10" y="20" width="8" height="80" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <rect x="82" y="20" width="8" height="80" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Seated figure -->
      <circle cx="50" cy="30" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 36 L 50 68 M 50 45 L 32 50 M 50 45 L 68 42 M 50 68 L 42 88 L 38 88 M 50 68 L 58 88 L 62 88" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Crown -->
      <path d="M 45 26 L 47 21 L 50 25 L 53 21 L 55 26" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Scales in left hand -->
      <line x1="32" y1="50" x2="32" y2="42" stroke="var(--ill-accent)" stroke-width="1.2" />
      <line x1="22" y1="42" x2="42" y2="42" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 22 42 L 19 50 L 25 50 Z" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <path d="M 42 42 L 39 50 L 45 50 Z" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <line x1="22" y1="42" x2="32" y2="38" stroke="var(--ill-accent)" stroke-width="0.8" />
      <line x1="42" y1="42" x2="32" y2="38" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Sword in right hand -->
      <line x1="68" y1="42" x2="68" y2="15" stroke="var(--ill-primary)" stroke-width="1.5" />
      <line x1="63" y1="30" x2="73" y2="30" stroke="var(--ill-primary)" stroke-width="1.2" />
      <polygon points="68,15 66,20 70,20" fill="var(--ill-primary)" />
      <!-- Decorative dots -->
      <circle cx="50" cy="8" r="1.2" fill="var(--ill-accent)" />
    </g>

    <!-- 12 ── The Hanged Man ── -->
    <g v-else-if="cardId === 12">
      <!-- T-shaped tree -->
      <line x1="20" y1="20" x2="80" y2="20" stroke="var(--ill-primary)" stroke-width="2" />
      <line x1="25" y1="20" x2="25" y2="8" stroke="var(--ill-primary)" stroke-width="1.5" />
      <line x1="75" y1="20" x2="75" y2="8" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Small leaves on crossbar -->
      <ellipse cx="35" cy="17" rx="3" ry="2" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <ellipse cx="65" cy="17" rx="3" ry="2" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <ellipse cx="50" cy="16" rx="3" ry="2" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Rope from crossbar -->
      <line x1="50" y1="20" x2="50" y2="38" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Figure hanging upside-down -->
      <!-- Bent leg (tied foot) -->
      <path d="M 50 38 L 50 50 M 50 50 L 42 38" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Body (inverted) -->
      <path d="M 50 50 L 50 75" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Arms out forming triangle -->
      <path d="M 50 62 L 35 72 M 50 62 L 65 72" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Head at bottom -->
      <circle cx="50" cy="82" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Halo around head -->
      <circle cx="50" cy="82" r="11" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Serene face hint -->
      <circle cx="48" cy="80" r="0.8" fill="var(--ill-primary)" />
      <circle cx="52" cy="80" r="0.8" fill="var(--ill-primary)" />
      <path d="M 47 84 Q 50 86, 53 84" fill="none" stroke="var(--ill-primary)" stroke-width="0.6" />
    </g>

    <!-- 13 ── Death ── -->
    <g v-else-if="cardId === 13">
      <!-- Sunrise between two towers -->
      <rect x="5" y="85" width="12" height="30" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <rect x="83" y="85" width="12" height="30" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 30 105 Q 50 85, 70 105" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <line v-for="a in 5" :key="a"
        :x1="50 - 15 + a * 7.5" :y1="95"
        :x2="50 - 20 + a * 10" :y2="85"
        stroke="var(--ill-accent)" stroke-width="0.6" />
      <!-- Horse body -->
      <ellipse cx="48" cy="65" rx="18" ry="10" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Horse legs -->
      <line x1="34" y1="72" x2="30" y2="95" stroke="var(--ill-primary)" stroke-width="1.2" />
      <line x1="40" y1="74" x2="38" y2="95" stroke="var(--ill-primary)" stroke-width="1.2" />
      <line x1="56" y1="74" x2="58" y2="95" stroke="var(--ill-primary)" stroke-width="1.2" />
      <line x1="62" y1="72" x2="66" y2="95" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Horse head -->
      <path d="M 30 62 L 22 50 L 20 42 L 26 45 L 30 55" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Skeleton rider -->
      <circle cx="48" cy="40" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Skull features -->
      <circle cx="46" cy="39" r="1.2" fill="var(--ill-primary)" />
      <circle cx="51" cy="39" r="1.2" fill="var(--ill-primary)" />
      <path d="M 46 43 L 48 44 L 50 43" fill="none" stroke="var(--ill-primary)" stroke-width="0.6" />
      <path d="M 48 46 L 48 55" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Flag with rose -->
      <line x1="55" y1="55" x2="70" y2="15" stroke="var(--ill-primary)" stroke-width="1.2" />
      <rect x="70" y="8" width="18" height="14" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Rose on flag -->
      <circle cx="79" cy="15" r="3" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <circle cx="79" cy="15" r="1" fill="var(--ill-accent)" />
    </g>

    <!-- 14 ── Temperance ── -->
    <g v-else-if="cardId === 14">
      <!-- Mountains in background -->
      <polygon points="60,60 80,30 100,60" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <polygon points="70,60 85,38 100,60" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Path to mountains -->
      <path d="M 50 100 Q 60 80, 75 60" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Winged figure -->
      <circle cx="40" cy="30" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 40 36 L 40 68 M 40 48 L 25 55 M 40 48 L 55 50 M 40 68 L 32 90 M 40 68 L 48 90" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Wings -->
      <path d="M 34 34 L 15 22 Q 10 30, 22 38" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <path d="M 46 34 L 65 22 Q 70 30, 58 38" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Two cups pouring -->
      <polygon points="22,52 20,58 30,58 28,52" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <polygon points="52,47 50,53 60,53 58,47" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Water flowing between cups -->
      <path d="M 28 53 Q 38 45, 52 50" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Water waves at feet -->
      <path d="M 20 95 Q 30 90, 40 95 Q 50 100, 60 95" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 15 100 Q 25 95, 35 100 Q 45 105, 55 100" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- One foot in water -->
      <path d="M 32 90 L 30 98" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Sun glow on horizon -->
      <circle cx="85" cy="42" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
    </g>

    <!-- 15 ── The Devil ── -->
    <g v-else-if="cardId === 15">
      <!-- Inverted pentagram above -->
      <polygon :points="[0,1,2,3,4].map(i => {
        const angle = (i * 144 - 90) * Math.PI / 180
        return `${50 + 12 * Math.cos(angle)},${14 + 12 * Math.sin(angle)}`
      }).join(' ')" fill="none" stroke="var(--ill-accent)" stroke-width="1" transform="rotate(180 50 14)" />
      <circle cx="50" cy="14" r="13" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Horned devil figure -->
      <circle cx="50" cy="40" r="7" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Horns -->
      <path d="M 44 34 L 38 22 L 42 30" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 56 34 L 62 22 L 58 30" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Body -->
      <path d="M 50 47 L 50 72 M 50 55 L 36 62 M 50 55 L 64 62 M 50 72 L 42 85 M 50 72 L 58 85" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Wings -->
      <path d="M 44 48 L 25 42 Q 20 50, 32 55" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 56 48 L 75 42 Q 80 50, 68 55" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Pedestal -->
      <rect x="35" y="85" width="30" height="8" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Two chained small figures -->
      <circle cx="25" cy="95" r="3.5" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 25 98.5 L 25 110 M 25 103 L 20 108 M 25 103 L 30 108" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <circle cx="75" cy="95" r="3.5" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 75 98.5 L 75 110 M 75 103 L 70 108 M 75 103 L 80 108" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Chains -->
      <path d="M 28 98 Q 35 93, 40 88" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" stroke-dasharray="2,2" />
      <path d="M 72 98 Q 65 93, 60 88" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" stroke-dasharray="2,2" />
    </g>

    <!-- 16 ── The Tower ── -->
    <g v-else-if="cardId === 16">
      <!-- Tower -->
      <rect x="35" y="30" width="30" height="70" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Tower top / battlements -->
      <path d="M 33 30 L 33 25 L 39 25 L 39 30 M 45 30 L 45 25 L 51 25 L 51 30 M 57 30 L 57 25 L 63 25 L 63 30 M 67 30 L 67 25" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Crown falling off -->
      <path d="M 70 18 L 73 12 L 77 17 L 81 11 L 84 18 L 70 18" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Lightning bolt -->
      <path d="M 25 5 L 42 30 L 35 30 L 50 55" fill="none" stroke="var(--ill-accent)" stroke-width="2" />
      <!-- Window -->
      <rect x="44" y="45" width="12" height="15" rx="6" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Flames -->
      <path d="M 38 35 Q 36 30, 38 26 Q 40 30, 38 35" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 62 38 Q 64 33, 62 29 Q 60 33, 62 38" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 50 28 Q 52 23, 50 19 Q 48 23, 50 28" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Falling figure left -->
      <circle cx="20" cy="60" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 20 63 L 18 72 M 20 66 L 15 65 M 20 66 L 25 64 M 18 72 L 14 78 M 18 72 L 22 78" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Falling figure right -->
      <circle cx="80" cy="55" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 80 58 L 82 67 M 80 61 L 75 60 M 80 61 L 85 59 M 82 67 L 78 73 M 82 67 L 86 73" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Ground -->
      <path d="M 0 105 Q 25 100, 50 105 Q 75 110, 100 105" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
    </g>

    <!-- 17 ── The Star ── -->
    <g v-else-if="cardId === 17">
      <!-- One large 8-pointed star -->
      <g transform="translate(50,18)">
        <line v-for="a in 8" :key="a"
          :x1="8 * Math.cos(a * Math.PI / 4)" :y1="8 * Math.sin(a * Math.PI / 4)"
          x2="0" y2="0"
          stroke="var(--ill-accent)" stroke-width="1.5" />
        <circle cx="0" cy="0" r="3" fill="var(--ill-accent)" opacity="0.5" />
      </g>
      <!-- 7 small stars -->
      <circle cx="25" cy="10" r="1.5" fill="var(--ill-accent)" />
      <circle cx="75" cy="10" r="1.5" fill="var(--ill-accent)" />
      <circle cx="18" cy="22" r="1.2" fill="var(--ill-accent)" />
      <circle cx="82" cy="22" r="1.2" fill="var(--ill-accent)" />
      <circle cx="30" cy="30" r="1" fill="var(--ill-accent)" />
      <circle cx="70" cy="30" r="1" fill="var(--ill-accent)" />
      <circle cx="50" cy="34" r="1" fill="var(--ill-accent)" />
      <!-- Kneeling figure -->
      <circle cx="45" cy="52" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 45 58 L 45 78 M 45 65 L 30 58 M 45 65 L 60 62 M 45 78 L 38 88 L 35 95 M 45 78 L 52 88 L 50 95" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Two vessels pouring -->
      <path d="M 28 56 L 20 70 Q 15 75, 10 80" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 62 60 L 70 72 Q 75 78, 80 82" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Water / land -->
      <path d="M 0 95 Q 20 90, 40 95 Q 60 100, 80 95 L 100 95 L 100 120 L 0 120 Z" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Water ripples -->
      <path d="M 5 100 Q 15 97, 25 100 Q 35 103, 45 100" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <path d="M 55 102 Q 65 99, 75 102 Q 85 105, 95 102" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
    </g>

    <!-- 18 ── The Moon ── -->
    <g v-else-if="cardId === 18">
      <!-- Large moon with face -->
      <circle cx="50" cy="22" r="14" fill="none" stroke="var(--ill-accent)" stroke-width="1.5" />
      <!-- Moon face crescent overlay -->
      <path d="M 55 12 Q 42 15, 42 22 Q 42 29, 55 32" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Face features -->
      <circle cx="46" cy="20" r="1" fill="var(--ill-accent)" />
      <circle cx="52" cy="20" r="1" fill="var(--ill-accent)" />
      <path d="M 47 26 Q 50 28, 53 26" fill="none" stroke="var(--ill-accent)" stroke-width="0.6" />
      <!-- Drops falling from moon -->
      <path d="M 40 37 L 38 42 L 40 42 Z" fill="var(--ill-secondary)" />
      <path d="M 50 37 L 48 42 L 50 42 Z" fill="var(--ill-secondary)" />
      <path d="M 60 37 L 58 42 L 60 42 Z" fill="var(--ill-secondary)" />
      <!-- Two towers -->
      <rect x="10" y="55" width="14" height="35" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 10 55 L 13 50 L 17 55 L 21 50 L 24 55" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <rect x="76" y="55" width="14" height="35" rx="1" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 76 55 L 79 50 L 83 55 L 87 50 L 90 55" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <!-- Winding path -->
      <path d="M 50 110 Q 40 100, 50 90 Q 60 80, 50 70 Q 40 60, 50 50" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Dog shape (left) -->
      <ellipse cx="30" cy="82" rx="7" ry="4" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="24" cy="78" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <path d="M 22 76 L 20 73" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <!-- Wolf shape (right) -->
      <ellipse cx="70" cy="82" rx="7" ry="4" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="76" cy="78" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <path d="M 78 76 L 80 73" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <!-- Crayfish at bottom -->
      <ellipse cx="50" cy="108" rx="6" ry="3" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 44 106 L 38 102 M 56 106 L 62 102" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
    </g>

    <!-- 19 ── The Sun ── -->
    <g v-else-if="cardId === 19">
      <!-- Large radiant sun -->
      <circle cx="50" cy="25" r="15" fill="none" stroke="var(--ill-accent)" stroke-width="1.5" />
      <!-- Sun face -->
      <circle cx="46" cy="23" r="1.2" fill="var(--ill-accent)" />
      <circle cx="54" cy="23" r="1.2" fill="var(--ill-accent)" />
      <path d="M 46 29 Q 50 32, 54 29" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Rays -->
      <line v-for="a in 12" :key="a"
        :x1="50 + 18 * Math.cos(a * Math.PI / 6)" :y1="25 + 18 * Math.sin(a * Math.PI / 6)"
        :x2="50 + 24 * Math.cos(a * Math.PI / 6)" :y2="25 + 24 * Math.sin(a * Math.PI / 6)"
        stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Wavy rays between straight ones -->
      <path v-for="a in 12" :key="'w'+a"
        :d="`M ${50 + 18 * Math.cos((a + 0.5) * Math.PI / 6)} ${25 + 18 * Math.sin((a + 0.5) * Math.PI / 6)} Q ${50 + 21 * Math.cos((a + 0.3) * Math.PI / 6)} ${25 + 21 * Math.sin((a + 0.3) * Math.PI / 6)} ${50 + 24 * Math.cos((a + 0.5) * Math.PI / 6)} ${25 + 24 * Math.sin((a + 0.5) * Math.PI / 6)}`"
        fill="none" stroke="var(--ill-accent)" stroke-width="0.6" />
      <!-- Child figure on horse -->
      <ellipse cx="50" cy="78" rx="14" ry="8" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Horse head -->
      <path d="M 36 75 L 28 65 L 26 58 L 30 62 L 34 68" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Horse legs -->
      <line x1="40" y1="85" x2="38" y2="98" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="48" y1="86" x2="47" y2="98" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="55" y1="86" x2="56" y2="98" stroke="var(--ill-primary)" stroke-width="1" />
      <line x1="62" y1="85" x2="64" y2="98" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Child on horse -->
      <circle cx="50" cy="65" r="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 70 L 50 78 M 50 73 L 44 76 M 50 73 L 56 76" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Sunflowers -->
      <circle cx="15" cy="95" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <circle cx="15" cy="95" r="1.5" fill="var(--ill-accent)" />
      <line x1="15" y1="99" x2="15" y2="112" stroke="var(--ill-secondary)" stroke-width="1" />
      <circle cx="85" cy="95" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <circle cx="85" cy="95" r="1.5" fill="var(--ill-accent)" />
      <line x1="85" y1="99" x2="85" y2="112" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Low wall -->
      <rect x="5" y="100" width="90" height="5" rx="1" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
    </g>

    <!-- 20 ── Judgement ── -->
    <g v-else-if="cardId === 20">
      <!-- Clouds -->
      <path d="M 10 30 Q 20 22, 35 28 Q 42 20, 55 25 Q 62 18, 75 24 Q 85 20, 95 28" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 5 35 Q 15 30, 25 34 Q 35 28, 50 32 Q 60 26, 70 32 Q 80 28, 95 35" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Angel -->
      <circle cx="50" cy="15" r="5" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Angel wings -->
      <path d="M 45 18 L 28 12 Q 24 18, 35 22" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <path d="M 55 18 L 72 12 Q 76 18, 65 22" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Trumpet -->
      <line x1="50" y1="20" x2="50" y2="32" stroke="var(--ill-accent)" stroke-width="1.2" />
      <path d="M 46 32 L 50 28 L 54 32" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Flag on trumpet -->
      <rect x="51" y="22" width="10" height="6" rx="1" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Three coffins -->
      <rect x="8" y="75" width="18" height="35" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <rect x="41" y="75" width="18" height="35" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <rect x="74" y="75" width="18" height="35" rx="2" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Rising figures -->
      <circle cx="17" cy="65" r="4" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 17 69 L 17 78 M 17 72 L 13 68 M 17 72 L 21 68" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="50" cy="60" r="4" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 50 64 L 50 75 M 50 68 L 45 62 M 50 68 L 55 62" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="83" cy="65" r="4" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <path d="M 83 69 L 83 78 M 83 72 L 79 68 M 83 72 L 87 68" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
    </g>

    <!-- 21 ── The World ── -->
    <g v-else-if="cardId === 21">
      <!-- Oval laurel wreath -->
      <ellipse cx="50" cy="60" r="28" ry="38" fill="none" stroke="var(--ill-secondary)" stroke-width="1.5" />
      <!-- Wreath leaf marks -->
      <path v-for="a in 16" :key="a"
        :d="`M ${50 + 26 * Math.cos(a * Math.PI / 8)} ${60 + 36 * Math.sin(a * Math.PI / 8)} l ${3 * Math.cos(a * Math.PI / 8 + 1)} ${3 * Math.sin(a * Math.PI / 8 + 1)}`"
        fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Dancing figure inside -->
      <circle cx="50" cy="42" r="6" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <path d="M 50 48 L 50 72 M 50 55 L 38 50 M 50 55 L 62 50 M 50 72 L 40 85 M 50 72 L 55 82 L 58 78" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Sash / ribbon -->
      <path d="M 42 55 Q 50 60, 58 55" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <path d="M 42 65 Q 50 70, 58 65" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Four corner creatures -->
      <!-- Angel top-left -->
      <circle cx="10" cy="10" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 7 13 L 3 8 M 13 13 L 17 8" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Eagle top-right -->
      <path d="M 88 8 L 92 5 L 92 12 Z" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 85 12 L 92 10 L 95 14" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Bull bottom-left -->
      <circle cx="10" cy="110" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 6 108 L 4 104 M 14 108 L 16 104" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Lion bottom-right -->
      <circle cx="90" cy="110" r="4" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 85 107 Q 83 110, 85 113 M 95 107 Q 97 110, 95 113" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Ribbons at top and bottom of wreath -->
      <path d="M 42 23 Q 50 18, 58 23" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 42 97 Q 50 102, 58 97" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
    </g>

    <!-- ═══════════════════════════════════════════ -->
    <!--  MINOR ARCANA (id >= 22) — Suit Emblems     -->
    <!-- ═══════════════════════════════════════════ -->

    <!-- Wands: Vertical staff with flame, sprouting leaves, crossed branch -->
    <g v-else-if="suit === 'wands'">
      <!-- Main staff -->
      <line x1="50" y1="15" x2="50" y2="105" stroke="var(--ill-primary)" stroke-width="2" />
      <!-- Flame top -->
      <path d="M 50 15 Q 45 8, 50 2 Q 55 8, 50 15" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <path d="M 50 12 Q 47 6, 50 0 Q 53 6, 50 12" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Sprouting leaves left -->
      <path d="M 50 40 Q 35 35, 30 40 Q 35 42, 50 40" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 50 60 Q 32 55, 28 62 Q 33 64, 50 60" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Sprouting leaves right -->
      <path d="M 50 50 Q 65 45, 70 50 Q 65 52, 50 50" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 50 75 Q 68 70, 72 76 Q 67 78, 50 75" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Crossed smaller branch -->
      <line x1="30" y1="30" x2="70" y2="80" stroke="var(--ill-secondary)" stroke-width="1.2" />
      <!-- Small buds on branch -->
      <circle cx="38" cy="42" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="62" cy="68" r="2" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Decorative dots -->
      <circle cx="20" cy="20" r="1" fill="var(--ill-accent)" />
      <circle cx="80" cy="100" r="1" fill="var(--ill-accent)" />
    </g>

    <!-- Cups: Ornate chalice, water flowing, cloud wisps, lotus -->
    <g v-else-if="suit === 'cups'">
      <!-- Cloud wisps top -->
      <path d="M 15 15 Q 25 10, 35 15 Q 42 8, 55 12 Q 62 6, 72 12 Q 80 8, 88 15" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Chalice cup -->
      <path d="M 32 45 Q 32 30, 50 28 Q 68 30, 68 45 Z" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Chalice stem -->
      <line x1="50" y1="45" x2="50" y2="70" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Chalice base -->
      <ellipse cx="50" cy="72" rx="14" ry="4" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <!-- Ornate details on cup -->
      <path d="M 38 38 Q 50 42, 62 38" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <circle cx="50" cy="36" r="3" fill="none" stroke="var(--ill-accent)" stroke-width="0.8" />
      <!-- Water flowing over -->
      <path d="M 35 32 Q 28 38, 22 50 Q 18 58, 20 65" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <path d="M 65 32 Q 72 38, 78 50 Q 82 58, 80 65" fill="none" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Lotus below -->
      <path d="M 50 88 Q 44 82, 40 88 Q 44 90, 50 88" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 50 88 Q 56 82, 60 88 Q 56 90, 50 88" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 50 88 Q 50 80, 50 76" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 42 92 Q 50 96, 58 92" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Drops -->
      <circle cx="25" cy="55" r="1" fill="var(--ill-accent)" />
      <circle cx="75" cy="55" r="1" fill="var(--ill-accent)" />
    </g>

    <!-- Swords: Upright sword, clouds around blade, crown at top -->
    <g v-else-if="suit === 'swords'">
      <!-- Sword blade -->
      <line x1="50" y1="18" x2="50" y2="100" stroke="var(--ill-primary)" stroke-width="2" />
      <!-- Sword point -->
      <polygon points="50,15 47,22 53,22" fill="var(--ill-primary)" />
      <!-- Cross-guard -->
      <line x1="32" y1="80" x2="68" y2="80" stroke="var(--ill-primary)" stroke-width="2" />
      <circle cx="32" cy="80" r="2" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <circle cx="68" cy="80" r="2" fill="none" stroke="var(--ill-primary)" stroke-width="1" />
      <!-- Grip wrap -->
      <line x1="47" y1="85" x2="53" y2="85" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <line x1="47" y1="89" x2="53" y2="89" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <line x1="47" y1="93" x2="53" y2="93" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Pommel -->
      <circle cx="50" cy="102" r="3" fill="none" stroke="var(--ill-primary)" stroke-width="1.2" />
      <!-- Crown at top -->
      <path d="M 40 18 L 43 10 L 47 16 L 50 8 L 53 16 L 57 10 L 60 18" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <line x1="40" y1="18" x2="60" y2="18" stroke="var(--ill-accent)" stroke-width="1" />
      <!-- Clouds around blade -->
      <path d="M 15 35 Q 22 30, 30 35 Q 35 30, 42 34" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 58 40 Q 65 35, 72 40 Q 78 35, 85 40" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 12 50 Q 20 45, 28 50 Q 34 46, 40 50" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <path d="M 60 55 Q 68 50, 76 55 Q 82 50, 90 55" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Decorative dots -->
      <circle cx="20" cy="42" r="1" fill="var(--ill-accent)" />
      <circle cx="80" cy="48" r="1" fill="var(--ill-accent)" />
    </g>

    <!-- Pentacles: Circle with 5-pointed star, vine tendrils, leaves -->
    <g v-else-if="suit === 'pentacles'">
      <!-- Main circle -->
      <circle cx="50" cy="55" r="25" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <circle cx="50" cy="55" r="22" fill="none" stroke="var(--ill-primary)" stroke-width="0.8" />
      <!-- 5-pointed star inside -->
      <polygon :points="[0,1,2,3,4].map(i => {
        const angle = (i * 144 - 90) * Math.PI / 180
        return `${50 + 18 * Math.cos(angle)},${55 + 18 * Math.sin(angle)}`
      }).join(' ')" fill="none" stroke="var(--ill-accent)" stroke-width="1.2" />
      <!-- Vine tendrils around -->
      <path d="M 25 45 Q 15 35, 12 25 Q 10 20, 15 18" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 75 45 Q 85 35, 88 25 Q 90 20, 85 18" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 30 75 Q 20 85, 18 95 Q 16 100, 20 102" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <path d="M 70 75 Q 80 85, 82 95 Q 84 100, 80 102" fill="none" stroke="var(--ill-secondary)" stroke-width="1" />
      <!-- Small leaves on vines -->
      <path d="M 12 25 Q 8 22, 10 18 Q 14 20, 12 25" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 88 25 Q 92 22, 90 18 Q 86 20, 88 25" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 18 95 Q 14 92, 16 88 Q 20 90, 18 95" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <path d="M 82 95 Q 86 92, 84 88 Q 80 90, 82 95" fill="none" stroke="var(--ill-secondary)" stroke-width="0.8" />
      <!-- Extra leaf pairs -->
      <path d="M 15 32 Q 10 30, 12 26" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <path d="M 85 32 Q 90 30, 88 26" fill="none" stroke="var(--ill-secondary)" stroke-width="0.6" />
      <!-- Decorative dots -->
      <circle cx="50" cy="12" r="1.2" fill="var(--ill-accent)" />
      <circle cx="50" cy="98" r="1.2" fill="var(--ill-accent)" />
      <circle cx="10" cy="55" r="1" fill="var(--ill-accent)" />
      <circle cx="90" cy="55" r="1" fill="var(--ill-accent)" />
    </g>

    <!-- Fallback -->
    <g v-else>
      <circle cx="50" cy="60" r="20" fill="none" stroke="var(--ill-primary)" stroke-width="1.5" />
      <text x="50" y="65" text-anchor="middle" font-size="10" fill="var(--ill-secondary)">?</text>
    </g>
  </svg>
</template>

<style scoped>
.card-illustration {
  --ill-primary: var(--color-primary, #c8a84e);
  --ill-secondary: var(--color-text-muted, #8a8a8a);
  --ill-accent: var(--color-accent, #d4a843);
  --ill-bg: var(--color-card-bg, #1a1a2e);
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
}
</style>
