module.exports = {
    stories: [
        { directory: '../stories', titlePrefix: "Bibi's design system" },
        { directory: '../tests', titlePrefix: 'Tests' },
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-coverage',
    ],
    framework: '@storybook/react',
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    features: {
        interactionsDebugger: true,
    },
}
