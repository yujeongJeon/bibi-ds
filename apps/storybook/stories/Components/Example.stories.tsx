import type { Meta, StoryObj } from '@storybook/react'
import { default as ExampleComp } from '../../components/Example'

type Story = StoryObj<typeof ExampleComp>

export const Example: Story = {}

export default {
    component: ExampleComp,
} as Meta<typeof ExampleComp>
