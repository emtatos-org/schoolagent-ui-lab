import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from './Button'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Default Card',
    description: 'This is a default card with a gray background.',
  },
}

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    description: 'This card has a border instead of a background.',
    variant: 'outlined',
  },
}

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    description: 'This card has a shadow for depth.',
    variant: 'elevated',
  },
}

export const WithContent: Story = {
  args: {
    title: 'Card with Content',
    description: 'This card includes additional content below.',
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args}>
      <Button label="Learn More" variant="primary" />
    </Card>
  ),
}
