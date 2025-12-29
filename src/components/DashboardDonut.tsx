import './DashboardDonut.css'
import { getMasteryLevel, MASTERY_COLORS } from '../constants/thresholds'

export interface DashboardDonutProps {
  percentage: number
  subtitle: string
  size?: number
}

export function DashboardDonut({
  percentage,
  subtitle,
  size = 200,
}: DashboardDonutProps) {
  const masteryLevel = getMasteryLevel(percentage / 100)
  const color = MASTERY_COLORS[masteryLevel]
  
  const strokeWidth = size * 0.12
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  const center = size / 2

  return (
    <div className="dashboard-donut" style={{ width: size, height: size }}>
      <svg
        className="dashboard-donut__svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="dashboard-donut__background"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="dashboard-donut__progress"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ stroke: color }}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <div className="dashboard-donut__content">
        <span className="dashboard-donut__percentage" style={{ color }}>
          {Math.round(percentage)}%
        </span>
        <span className="dashboard-donut__subtitle">{subtitle}</span>
      </div>
    </div>
  )
}
