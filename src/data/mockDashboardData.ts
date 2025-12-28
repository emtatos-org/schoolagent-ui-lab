export interface AreaData {
  area_id: string
  area_name: string
  mastery_ratio: number
  last_updated_at: string
}

export const mockAreas: AreaData[] = [
  { area_id: 'area-1', area_name: 'Algebra', mastery_ratio: 0.82, last_updated_at: '2025-12-28T10:00:00Z' },
  { area_id: 'area-2', area_name: 'Geometri', mastery_ratio: 0.75, last_updated_at: '2025-12-28T09:30:00Z' },
  { area_id: 'area-3', area_name: 'Statistik', mastery_ratio: 0.68, last_updated_at: '2025-12-27T14:00:00Z' },
  { area_id: 'area-4', area_name: 'Sannolikhet', mastery_ratio: 0.45, last_updated_at: '2025-12-27T11:00:00Z' },
  { area_id: 'area-5', area_name: 'Funktioner', mastery_ratio: 0.91, last_updated_at: '2025-12-28T08:00:00Z' },
  { area_id: 'area-6', area_name: 'Ekvationer', mastery_ratio: 0.78, last_updated_at: '2025-12-26T16:00:00Z' },
  { area_id: 'area-7', area_name: 'Derivata', mastery_ratio: 0.55, last_updated_at: '2025-12-25T12:00:00Z' },
  { area_id: 'area-8', area_name: 'Integraler', mastery_ratio: 0.42, last_updated_at: '2025-12-24T10:00:00Z' },
  { area_id: 'area-9', area_name: 'Trigonometri', mastery_ratio: 0.88, last_updated_at: '2025-12-28T07:00:00Z' },
  { area_id: 'area-10', area_name: 'Vektorer', mastery_ratio: 0.63, last_updated_at: '2025-12-27T09:00:00Z' },
  { area_id: 'area-11', area_name: 'Matriser', mastery_ratio: 0.35, last_updated_at: '2025-12-23T15:00:00Z' },
  { area_id: 'area-12', area_name: 'Logaritmer', mastery_ratio: 0.72, last_updated_at: '2025-12-26T11:00:00Z' },
  { area_id: 'area-13', area_name: 'Talteori', mastery_ratio: 0.85, last_updated_at: '2025-12-28T06:00:00Z' },
  { area_id: 'area-14', area_name: 'Kombinatorik', mastery_ratio: 0.58, last_updated_at: '2025-12-25T14:00:00Z' },
  { area_id: 'area-15', area_name: 'Gränsvärden', mastery_ratio: 0.48, last_updated_at: '2025-12-24T08:00:00Z' },
  { area_id: 'area-16', area_name: 'Serier', mastery_ratio: 0.79, last_updated_at: '2025-12-27T13:00:00Z' },
]

export const mockAreasLowMastery: AreaData[] = [
  { area_id: 'area-1', area_name: 'Algebra', mastery_ratio: 0.32, last_updated_at: '2025-12-28T10:00:00Z' },
  { area_id: 'area-2', area_name: 'Geometri', mastery_ratio: 0.45, last_updated_at: '2025-12-28T09:30:00Z' },
  { area_id: 'area-3', area_name: 'Statistik', mastery_ratio: 0.28, last_updated_at: '2025-12-27T14:00:00Z' },
  { area_id: 'area-4', area_name: 'Sannolikhet', mastery_ratio: 0.15, last_updated_at: '2025-12-27T11:00:00Z' },
  { area_id: 'area-5', area_name: 'Funktioner', mastery_ratio: 0.51, last_updated_at: '2025-12-28T08:00:00Z' },
  { area_id: 'area-6', area_name: 'Ekvationer', mastery_ratio: 0.38, last_updated_at: '2025-12-26T16:00:00Z' },
  { area_id: 'area-7', area_name: 'Derivata', mastery_ratio: 0.25, last_updated_at: '2025-12-25T12:00:00Z' },
  { area_id: 'area-8', area_name: 'Integraler', mastery_ratio: 0.12, last_updated_at: '2025-12-24T10:00:00Z' },
  { area_id: 'area-9', area_name: 'Trigonometri', mastery_ratio: 0.48, last_updated_at: '2025-12-28T07:00:00Z' },
  { area_id: 'area-10', area_name: 'Vektorer', mastery_ratio: 0.33, last_updated_at: '2025-12-27T09:00:00Z' },
  { area_id: 'area-11', area_name: 'Matriser', mastery_ratio: 0.05, last_updated_at: '2025-12-23T15:00:00Z' },
  { area_id: 'area-12', area_name: 'Logaritmer', mastery_ratio: 0.42, last_updated_at: '2025-12-26T11:00:00Z' },
  { area_id: 'area-13', area_name: 'Talteori', mastery_ratio: 0.55, last_updated_at: '2025-12-28T06:00:00Z' },
  { area_id: 'area-14', area_name: 'Kombinatorik', mastery_ratio: 0.28, last_updated_at: '2025-12-25T14:00:00Z' },
  { area_id: 'area-15', area_name: 'Gränsvärden', mastery_ratio: 0.18, last_updated_at: '2025-12-24T08:00:00Z' },
  { area_id: 'area-16', area_name: 'Serier', mastery_ratio: 0.39, last_updated_at: '2025-12-27T13:00:00Z' },
]

export function calculateOverallMastery(areas: AreaData[]): number {
  if (areas.length === 0) return 0
  const sum = areas.reduce((acc, area) => acc + area.mastery_ratio, 0)
  return sum / areas.length
}

export function getLowestMasteryAreas(areas: AreaData[], count: number = 3): AreaData[] {
  return [...areas].sort((a, b) => a.mastery_ratio - b.mastery_ratio).slice(0, count)
}

export function getMasteryMessage(ratio: number): string {
  if (ratio >= 0.75) return 'Bra jobbat!'
  if (ratio >= 0.50) return 'På god väg!'
  return 'Fortsätt träna!'
}
