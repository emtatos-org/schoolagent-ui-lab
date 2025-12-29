import './DashboardAreaGrid.css'
import { getMasteryLevel, MASTERY_COLORS } from '../constants/thresholds'
import type { AreaData } from '../data/mockDashboardData'

export interface DashboardAreaGridProps {
  areas: AreaData[]
  onAreaClick?: (areaId: string) => void
}

export function DashboardAreaGrid({
  areas,
  onAreaClick,
}: DashboardAreaGridProps) {
  return (
    <div className="dashboard-area-grid">
      {areas.map((area) => {
        const masteryLevel = getMasteryLevel(area.mastery_ratio)
        const color = MASTERY_COLORS[masteryLevel]
        const percentage = Math.round(area.mastery_ratio * 100)

        return (
          <div
            key={area.area_id}
            className="dashboard-area-grid__card"
            onClick={() => onAreaClick?.(area.area_id)}
          >
            <span className="dashboard-area-grid__name">{area.area_name}</span>
            <span
              className="dashboard-area-grid__percentage"
              style={{ color }}
            >
              {percentage}%
            </span>
            <div className="dashboard-area-grid__bar">
              <div
                className="dashboard-area-grid__bar-fill"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
