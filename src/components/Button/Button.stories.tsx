import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { MdCancel, MdCheckCircle, MdDelete, MdEmail } from 'react-icons/md'

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
    primary: true,
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    primary: false,
  }
}

export const Icon: Story = {
  args: {
    icon: <MdEmail />,
    label: 'Contact',
    primary: true,
  }
}

export const Info: Story = {
  args: {
    label: 'Info',
    outlined: false,
    type: 'info',
  }
}

export const Success: Story = {
  args: {
    label: 'Success',
    outlined: false,
    type: 'success',
  }
}

export const Caution: Story = {
  args: {
    label: 'Caution',
    outlined: false,
    type: 'caution',
  }
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    outlined: false,
    type: 'warning',
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger',
    outlined: false,
    type: 'danger',
  }
}
