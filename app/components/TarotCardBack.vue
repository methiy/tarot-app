<script setup>
const { currentTheme } = useTheme()
</script>

<template>
  <div class="card-back" :class="`card-back--${currentTheme}`">
    <div class="card-back__border">
      <!-- Mystic: pentagram star -->
      <div v-if="currentTheme === 'mystic'" class="card-back__design mystic-design">
        <div class="mystic-star">
          <div class="mystic-star__line" v-for="i in 5" :key="i" />
        </div>
        <div class="mystic-circle mystic-circle--outer" />
        <div class="mystic-circle mystic-circle--inner" />
      </div>

      <!-- Sakura: magic circle -->
      <div v-else-if="currentTheme === 'sakura'" class="card-back__design sakura-design">
        <div class="sakura-circle sakura-circle--outer" />
        <div class="sakura-circle sakura-circle--mid" />
        <div class="sakura-circle sakura-circle--inner" />
        <div class="sakura-star">
          <div class="sakura-star__point" v-for="i in 6" :key="i" />
        </div>
      </div>

      <!-- Capybara: cute dot pattern -->
      <div v-else class="card-back__design capybara-design">
        <div class="capybara-dots">
          <div class="capybara-dot" v-for="i in 9" :key="i" />
        </div>
        <div class="capybara-circle capybara-circle--outer" />
        <div class="capybara-circle capybara-circle--inner" />
        <div class="capybara-emoji">🫧</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-back {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-card, var(--shadow-lg));
  cursor: pointer;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.card-back:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover, var(--shadow-lg));
}

.card-back__border {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--color-card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.card-back__design {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* ======= MYSTIC THEME ======= */
.card-back--mystic {
  background: linear-gradient(135deg, #2d1b4e, #1a0a2e);
}

.mystic-star {
  position: relative;
  width: 80px;
  height: 80px;
}

.mystic-star__line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #c9a84c, transparent);
  transform-origin: center;
}

.mystic-star__line:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); }
.mystic-star__line:nth-child(2) { transform: translate(-50%, -50%) rotate(36deg); }
.mystic-star__line:nth-child(3) { transform: translate(-50%, -50%) rotate(72deg); }
.mystic-star__line:nth-child(4) { transform: translate(-50%, -50%) rotate(108deg); }
.mystic-star__line:nth-child(5) { transform: translate(-50%, -50%) rotate(144deg); }

.mystic-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.4);
}

.mystic-circle--outer {
  width: 120px;
  height: 120px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mystic-circle--inner {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(201, 168, 76, 0.6);
}

/* ======= SAKURA THEME ======= */
.card-back--sakura {
  background: linear-gradient(135deg, #F4A6C0, #C3A6D8);
}

.sakura-circle {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sakura-circle--outer {
  width: 130px;
  height: 130px;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.sakura-circle--mid {
  width: 100px;
  height: 100px;
  border: 1.5px solid rgba(245, 215, 110, 0.6);
}

.sakura-circle--inner {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.sakura-star {
  position: relative;
  width: 80px;
  height: 80px;
}

.sakura-star__point {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, rgba(245, 215, 110, 0.7), transparent);
  transform-origin: center;
}

.sakura-star__point:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); }
.sakura-star__point:nth-child(2) { transform: translate(-50%, -50%) rotate(30deg); }
.sakura-star__point:nth-child(3) { transform: translate(-50%, -50%) rotate(60deg); }
.sakura-star__point:nth-child(4) { transform: translate(-50%, -50%) rotate(90deg); }
.sakura-star__point:nth-child(5) { transform: translate(-50%, -50%) rotate(120deg); }
.sakura-star__point:nth-child(6) { transform: translate(-50%, -50%) rotate(150deg); }

/* ======= CAPYBARA THEME ======= */
.card-back--capybara {
  background: linear-gradient(135deg, #F5C87A, #F2A65A);
}

.capybara-dots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  position: relative;
  z-index: 1;
}

.capybara-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
}

.capybara-dot:nth-child(5) {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.5);
  margin: -2px;
}

.capybara-circle {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.capybara-circle--outer {
  width: 130px;
  height: 130px;
  border: 2px solid rgba(92, 64, 51, 0.15);
}

.capybara-circle--inner {
  width: 90px;
  height: 90px;
  border: 1.5px solid rgba(92, 64, 51, 0.1);
}

.capybara-emoji {
  position: absolute;
  bottom: 24px;
  font-size: 1.6rem;
}
</style>
