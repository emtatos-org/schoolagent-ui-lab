import './DashboardPage.css'
import { DashboardDonut } from './DashboardDonut'
import { DashboardFocusList } from './DashboardFocusList'
import { DashboardAreaGrid } from './DashboardAreaGrid'
import type { AreaData } from '../data/mockDashboardData'
import { calculateOverallMastery, getLowestMasteryAreas, getMasteryMessage } from '../data/mockDashboardData'

export interface DashboardPageProps {
  areas: AreaData[]
  focusCount?: number
  onTrainClick?: (areaId: string) => void
  onAreaClick?: (areaId: string) => void
}

export function DashboardPage({
  areas,
  focusCount = 3,
  onTrainClick,
  onAreaClick,
}: DashboardPageProps) {
  const overallMastery = calculateOverallMastery(areas)
  const overallPercentage = Math.round(overallMastery * 100)
  const masteryMessage = getMasteryMessage(overallMastery)
  const focusAreas = getLowestMasteryAreas(areas, focusCount)

  return (
    <div className="dashboard-page">
      <div className="dashboard-page__header">
        <DashboardDonut
          percentage={overallPercentage}
          subtitle={masteryMessage}
          size={200}
        />
        <DashboardFocusList
          areas={focusAreas}
          onTrainClick={onTrainClick}
        />
      </div>
      <div className="dashboard-page__grid-section">
        <h2 className="dashboard-page__section-title">Alla områden</h2>
        <DashboardAreaGrid
          areas={areas}
          onAreaClick={onAreaClick}
        />
      </div>
    </div>
  )
}
