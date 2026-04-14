import type { ZodiacSign } from '~/types'
import { zodiacSigns } from '~/data/zodiac'

export function useZodiac() {
  function getZodiac(birthday: string): ZodiacSign | null {
    if (!birthday) return null

    const parts = birthday.split('-')
    if (parts.length < 3) return null

    const month = parseInt(parts[1], 10)
    const day = parseInt(parts[2], 10)

    if (isNaN(month) || isNaN(day)) return null

    for (const sign of zodiacSigns) {
      const { startMonth, startDay, endMonth, endDay } = sign.dateRange

      // Handle year-crossing sign (Capricorn: Dec 22 - Jan 19)
      if (startMonth > endMonth) {
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay)
        ) {
          return sign
        }
      } else {
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)
        ) {
          return sign
        }
      }
    }

    return null
  }

  return { getZodiac }
}
