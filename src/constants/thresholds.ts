export const MASTERY_THRESHOLDS = {
  RED: 0.50,
  YELLOW: 0.75,
} as const

export type MasteryLevel = 'red' | 'yellow' | 'teal'

export function getMasteryLevel(ratio: number): MasteryLevel {
  if (ratio < MASTERY_THRESHOLDS.RED) {
    return 'red'
  }
  if (ratio < MASTERY_THRESHOLDS.YELLOW) {
    return 'yellow'
  }
  return 'teal'
}

export const MASTERY_COLORS = {
  red: '#ef4444',
  yellow: '#eab308',
  teal: '#14b8a6',
} as const
