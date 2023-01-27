import React from 'react'
import { ThemeProvider } from 'styled-components'
import { COLORS, GlobalStyle, TYPOS } from 'ui'

const theme = {
    foundation: {
        colors: COLORS,
        typo: TYPOS,
    },
}

export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        </>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
