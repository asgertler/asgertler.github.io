import './button.sass'

interface ButtonProps {
  icon?: JSX.Element
  label: string
  onClick?: () => void
  outlined?: boolean
  primary?: boolean
  transparent?: boolean
  type?: string
}

export const Button = ({
  icon,
  label,
  onClick,
  outlined,
  primary,
  transparent,
  type,
  ...props
}: ButtonProps) => {
  const mode = type ? `--${type}` : primary ? '--primary' : '--secondary'
  return (
    <button
      type="button"
      className={[
        'button', 
        'button' + mode, 
        outlined && 'button--outlined', 
        icon && 'button--icon',
        transparent && 'button--transparent'
      ].join(' ')}
      onClick={onClick}
      {...props}
    >
      <div className='button--icon--icon'>{icon && icon}</div>{label}
    </button>
  )
}
