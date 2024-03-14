import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from './NavBar';

const meta = {
    title: 'Components/NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavBar>

export default meta;
type Story = StoryObj<typeof meta>

export const Header: Story = {
    args: {
    }
}
