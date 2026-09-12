import { describe, it, expect } from 'vitest'
import { foodEntriesFor, dayTotals, kcalSeries, hasNutritionTarget } from './nutrition.js'

const S = {
  foodLog: [
    { d: '2026-08-20', name: 'Oats', kcal: 300, protein: 10, carbs: 50, fat: 5, t: 1 },
    { d: '2026-08-20', name: 'Chicken', kcal: 400, protein: 40, carbs: 0, fat: 15, t: 2 },
    { d: '2026-08-21', name: 'Rice', kcal: 200, protein: 4, carbs: 44, fat: 0, t: 3 }
  ]
}

describe('foodEntriesFor', () => {
  it('returns only entries for the given day', () => {
    expect(foodEntriesFor(S, '2026-08-20').length).toBe(2)
    expect(foodEntriesFor(S, '2026-08-21').length).toBe(1)
    expect(foodEntriesFor(S, '2026-08-22').length).toBe(0)
  })
})

describe('dayTotals', () => {
  it('sums kcal and macros across all entries for a day', () => {
    expect(dayTotals(S, '2026-08-20')).toEqual({ kcal: 700, protein: 50, carbs: 50, fat: 20 })
  })
  it('returns zeros for a day with no entries', () => {
    expect(dayTotals(S, '2026-08-22')).toEqual({ kcal: 0, protein: 0, carbs: 0, fat: 0 })
  })
  it('is fine with a missing foodLog', () => {
    expect(dayTotals({}, '2026-08-20')).toEqual({ kcal: 0, protein: 0, carbs: 0, fat: 0 })
  })
})

describe('kcalSeries', () => {
  it('groups by day, sorted oldest first', () => {
    const series = kcalSeries(S)
    expect(series.map(p => p.d)).toEqual(['2026-08-20', '2026-08-21'])
    expect(series[0].y).toBe(700)
    expect(series[1].y).toBe(200)
  })
})

describe('hasNutritionTarget', () => {
  it('is false when no target is set', () => {
    expect(hasNutritionTarget({ targetKcal: null, targetProtein: null, targetCarbs: null, targetFat: null })).toBe(false)
  })
  it('is true when any one target is set', () => {
    expect(hasNutritionTarget({ targetKcal: 2200 })).toBe(true)
    expect(hasNutritionTarget({ targetProtein: 150 })).toBe(true)
  })
})
