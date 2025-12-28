import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { DashboardPage } from './DashboardPage'
import { mockAreas, mockAreasLowMastery } from '../data/mockDashboardData'

const meta = {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    focusCount: {
      control: { type: 'number', min: 1, max: 5 },
    },
  },
  args: {
    onTrainClick: fn(),
    onAreaClick: fn(),
  },
} satisfies Meta<typeof DashboardPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    areas: mockAreas,
    focusCount: 3,
  },
}

export const LowMastery: Story = {
  args: {
    areas: mockAreasLowMastery,
    focusCount: 3,
  },
}
