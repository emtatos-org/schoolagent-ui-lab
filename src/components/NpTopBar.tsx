import './NpTopBar.css'

export interface NpTopBarProps {
  onBackClick?: () => void
  onLogoutClick?: () => void
  backLabel?: string
  logoutLabel?: string
}

export function NpTopBar({
  onBackClick,
  onLogoutClick,
  backLabel = 'Tillbaka till ämnesval',
  logoutLabel = 'Logga ut',
}: NpTopBarProps) {
  return (
    <div className="np-top-bar">
      <button
        className="np-top-bar__button np-top-bar__button--back"
        onClick={onBackClick}
      >
        {backLabel}
      </button>
      <button
        className="np-top-bar__button np-top-bar__button--logout"
        onClick={onLogoutClick}
      >
        {logoutLabel}
      </button>
    </div>
  )
}
