import React from 'react'
import { colorSet } from 'ui'

const Rectangle = ({ color }) => (
    <div
        style={{
            backgroundColor: color,
            width: 237,
            height: 80,
            margin: '0 0 7px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '13px',
        }}
    >
        {color}
    </div>
)

const List = ({ value }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 30,
        }}
    >
        {Object.entries(value).map(([key, value]) => (
            <div
                key={key}
                style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Rectangle color={value} />
                <div
                    style={{
                        padding: '12px 0',
                    }}
                >
                    <span
                        style={{
                            padding: '4px 7px',
                            backgroundColor: '#f2f4f6',
                            borderRadius: '2px',
                            fontSize: '14px',
                        }}
                    >
                        {key}
                    </span>
                </div>
            </div>
        ))}
    </div>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Color = () => (
    <>
        {Object.entries(colorSet)
            .sort(([key1], [key2]) => key1.split('_')[0].localeCompare(key2.split('_')[0]))
            .map(([key, value]) => (
                <div
                    key={key}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <h3>{key}</h3>
                    <List value={value} />
                </div>
            ))}
    </>
)

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Bibi's Design System/Foundation/Color",
    component: Color,
}
