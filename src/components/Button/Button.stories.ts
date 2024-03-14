import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary',
  }
}

export const Icon: Story = {
  args: {
    primary: true,
    label: 'Icon',
  }
}

export const Info: Story = {
  args: {
    type: 'info',
    label: 'Info',
    outlined: false,
  }
}

export const Success: Story = {
  args: {
    type: 'success',
    label: 'Success',
    outlined: false,
  }
}

export const Caution: Story = {
  args: {
    type: 'caution',
    label: 'Caution',
    outlined: false,
  }
}

export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning',
    outlined: false,
  }
}

export const Danger: Story = {
  args: {
    type: 'danger',
    label: 'Danger',
    outlined: false,
  }
}
