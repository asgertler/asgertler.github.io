import type { Meta, StoryObj } from '@storybook/react'
import { NamePlate } from './NamePlate'
import Logo from '../../imgs/ag-logo_grn-blu.png'

const meta = {
    title: 'Components/NamePlate',
    component: NamePlate,
    parameters: {
    layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NamePlate>

export default meta;
type Story = StoryObj<typeof meta>

export const Main: Story = {
    args: {
        logo: Logo,
        name: 'Aaron Gertler',
    }
}
