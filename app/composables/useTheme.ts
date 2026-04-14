import type { ThemeName } from '~/types'

export type { ThemeName }

export function useTheme() {
  const currentTheme = useState<ThemeName>('theme', () => 'mystic')

  function setTheme(theme: ThemeName) {
    currentTheme.value = theme
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }

  // Initialize theme on client
  onMounted(() => {
    document.documentElement.setAttribute('data-theme', currentTheme.value)
  })

  return { currentTheme, setTheme }
}
