import type { ZodiacSign } from '~/data/zodiac'
import { zodiacSigns } from '~/data/zodiac'

export function useZodiac() {
  function getZodiac(birthday: string): ZodiacSign | null {
    if (!birthday) return null

    const parts = birthday.split('-')
    if (parts.length < 3) return null

    const month = parseInt(parts[1], 10)
    const day = parseInt(parts[2], 10)
    if (isNaN(month) || isNaN(day)) return null

    const mmdd = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

    for (const sign of zodiacSigns) {
      const [start, end] = sign.dateRange

      // Handle year-crossing (Capricorn: 12-22 ~ 01-19)
      if (start > end) {
        if (mmdd >= start || mmdd <= end) return sign
      } else {
        if (mmdd >= start && mmdd <= end) return sign
      }
    }

    return null
  }

  return { getZodiac }
}
