// import React from 'react';
import { JSXElementConstructor, ReactElement } from 'react'
import './button.sass'

interface ButtonProps {
  backgroundColor?: string
  icon?: ReactElement<SVGElement, string | JSXElementConstructor<unknown>>
  label: string
  onClick?: () => void
  outlined?: boolean
  primary?: boolean
  type?: string
}

export const Button = ({
  backgroundColor,
  icon,
  label,
  outlined,
  primary,
  type,
  ...props
}: ButtonProps) => {
  const mode = type ? `--${type}` : primary ? '--primary' : '--secondary'
  return (
    <button
      type="button"
      className={['button', 'button' + mode, outlined ? 'button--outlined' : ''].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      { icon ? icon : ''}
      {label}
    </button>
  )
}
