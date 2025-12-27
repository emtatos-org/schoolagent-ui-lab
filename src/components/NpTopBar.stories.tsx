import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { NpTopBar } from './NpTopBar'

const meta = {
  title: 'Components/NpTopBar',
  component: NpTopBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onBackClick: fn(),
    onLogoutClick: fn(),
  },
} satisfies Meta<typeof NpTopBar>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default desktop view showing the NP training top bar with
 * "Tillbaka till ämnesval" (left) and "Logga ut" (right) buttons.
 */
export const Desktop: Story = {
  args: {
    backLabel: 'Tillbaka till ämnesval',
    logoutLabel: 'Logga ut',
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

/**
 * Mobile view (375px width) showing the responsive layout.
 * Buttons remain on the same row with adjusted padding and font sizes.
 */
export const Mobile: Story = {
  args: {
    backLabel: 'Tillbaka till ämnesval',
    logoutLabel: 'Logga ut',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [375],
    },
  },
}
