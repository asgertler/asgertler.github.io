// import React from 'react';
import { JSXElementConstructor, ReactElement } from 'react'
import './button.sass'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  icon?: ReactElement<SVGElement, string | JSXElementConstructor<unknown>>
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  backgroundColor,
  icon,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      { icon ? icon : ''}
      {label}
    </button>
  )
}
