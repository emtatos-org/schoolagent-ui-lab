import './DashboardFocusList.css'
import { getMasteryLevel, MASTERY_COLORS } from '../constants/thresholds'
import type { AreaData } from '../data/mockDashboardData'

export interface DashboardFocusListProps {
  areas: AreaData[]
  onTrainClick?: (areaId: string) => void
}

export function DashboardFocusList({
  areas,
  onTrainClick,
}: DashboardFocusListProps) {
  return (
    <div className="dashboard-focus-list">
      <h3 className="dashboard-focus-list__title">Ditt fokus just nu</h3>
      <ul className="dashboard-focus-list__items">
        {areas.map((area) => {
          const masteryLevel = getMasteryLevel(area.mastery_ratio)
          const color = MASTERY_COLORS[masteryLevel]
          const percentage = Math.round(area.mastery_ratio * 100)

          return (
            <li key={area.area_id} className="dashboard-focus-list__item">
              <div className="dashboard-focus-list__info">
                <span className="dashboard-focus-list__name">{area.area_name}</span>
                <span
                  className="dashboard-focus-list__percentage"
                  style={{ color }}
                >
                  {percentage}%
                </span>
              </div>
              <button
                className="dashboard-focus-list__train-button"
                onClick={() => onTrainClick?.(area.area_id)}
              >
                TRÄNA
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
