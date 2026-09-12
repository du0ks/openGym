// Pure helpers over S.foodLog — mirrors the style of history.js's bodyweight helpers, but
// foodLog holds many entries per day (like workouts) rather than one upserted value per day
// (like bodyweight), so the day view is a sum, not a lookup.
import { todayISO } from './format.js'

export const foodEntriesFor = (S, iso) => (S.foodLog || []).filter(e => e.d === iso)

export function dayTotals(S, iso) {
  const entries = foodEntriesFor(S, iso)
  return entries.reduce((t, e) => ({
    kcal: t.kcal + (e.kcal || 0),
    protein: t.protein + (e.protein || 0),
    carbs: t.carbs + (e.carbs || 0),
    fat: t.fat + (e.fat || 0)
  }), { kcal: 0, protein: 0, carbs: 0, fat: 0 })
}

export const todayTotals = S => dayTotals(S, todayISO())

// Daily kcal totals over the food log's date range, oldest first — for a history chart.
export function kcalSeries(S) {
  const byDay = {}
  for (const e of S.foodLog || []) byDay[e.d] = (byDay[e.d] || 0) + (e.kcal || 0)
  return Object.keys(byDay).sort().map(d => ({ t: new Date(d + 'T12:00:00').getTime(), y: byDay[d], d }))
}

export const hasNutritionTarget = S => S.targetKcal != null || S.targetProtein != null || S.targetCarbs != null || S.targetFat != null
