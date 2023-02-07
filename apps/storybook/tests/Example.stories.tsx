import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import Example from '../components/Example'

type Story = StoryObj<typeof Example>

export const FilledSuccess: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const autoInput = canvas.getByTestId('auto-input')

        await userEvent.type(autoInput, 'yujeong', {
            delay: 100,
        })

        const item = canvas.getByText('yujeong')
        userEvent.click(item)

        const button = canvas.getByText('Fire Click Event')
        userEvent.click(button)

        await waitFor(() => {
            expect(document.getElementById('modal-title')).toBeTruthy()
        })

        const modalItems = document.querySelectorAll('[id^="modal-item"]')
        userEvent.hover(modalItems[0])
    },
}

export default {
    component: Example,
} as Meta<typeof Example>
