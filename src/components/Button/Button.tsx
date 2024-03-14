import './button.sass'

interface ButtonProps {
  icon?: JSX.Element
  label: string
  onClick?: () => void
  outlined?: boolean
  primary?: boolean
  type?: string
}

export const Button = ({
  icon,
  label,
  onClick,
  outlined,
  primary,
  type,
  ...props
}: ButtonProps) => {
  const mode = type ? `--${type}` : primary ? '--primary' : '--secondary'
  return (
    <button
      type="button"
      className={['button', 'button' + mode, outlined && 'button--outlined', icon && 'button--icon'].join(' ')}
      onClick={onClick}
      {...props}
    >
      <div className='button--icon--icon'>{icon && icon}</div>{label}
    </button>
  )
}
