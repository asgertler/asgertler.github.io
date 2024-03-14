import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { 
  MdCheckCircle, 
  MdDelete, 
  MdEmail, 
  MdError, 
  MdInfo, 
  MdOutlineWarning,
  MdQuestionMark
} from 'react-icons/md'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
    outlined: false,
    primary: true,
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    outlined: false,
    primary: false,
  }
}

export const Icon: Story = {
  args: {
    icon: <MdEmail />,
    label: 'Contact',
    outlined: false,
    primary: true,
  }
}

export const Info: Story = {
  args: {
    icon: <MdInfo />,
    label: 'Info',
    outlined: false,
    type: 'info',
  }
}

export const Success: Story = {
  args: {
    icon: <MdCheckCircle />,
    label: 'Success',
    outlined: false,
    type: 'success',
  }
}

export const Caution: Story = {
  args: {
    icon: <MdError />,
    label: 'Caution',
    outlined: false,
    type: 'caution',
  }
}

export const Warning: Story = {
  args: {
    icon: <MdOutlineWarning />,
    label: 'Warning',
    outlined: false,
    type: 'warning',
  }
}

export const Danger: Story = {
  args: {
    icon: <MdDelete />,
    label: 'Danger',
    outlined: false,
    type: 'danger',
  }
}

export const Transparent: Story = {
  args: {
    icon: <MdQuestionMark />,
    label: 'Transparent',
    transparent: true,
  }
}
