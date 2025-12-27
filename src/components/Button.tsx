import './Button.css'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
