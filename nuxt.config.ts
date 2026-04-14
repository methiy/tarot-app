export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      title: '塔罗牌占卜 — 聆听命运的低语',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '输入你的生辰与问题，让塔罗牌为你揭示命运的指引' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Noto+Serif+SC:wght@400;600;700&family=Playfair+Display:wght@400;600;700&family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Varela+Round&display=swap',
        },
      ],
    },
  },
  css: [
    '~/styles/global.css',
    '~/styles/themes/mystic.css',
    '~/styles/themes/sakura.css',
    '~/styles/themes/capybara.css',
  ],
})
