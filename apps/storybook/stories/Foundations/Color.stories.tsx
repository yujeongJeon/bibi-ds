import styled from 'styled-components'
import { COLORS, TYPOS } from 'ui'
import { Column, InlineColumn, Row } from '../../common/Component'

const Rectangle = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    width: 237px;
    height: 80px;
    margin: 0 0 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.span`
    ${TYPOS.PRETENDARD_CAPTION_MEDIUM}
    background-color: ${COLORS.GRAYSCALE['GRAY_0.1']};
    padding: 2.5px 6px;
    border-radius: 2px;
`

const ColorViewer = ({ color }: { color: string }) => (
    <Rectangle color={color}>
        <Text>{color}</Text>
    </Rectangle>
)

const ItemText = styled.span`
    ${TYPOS.PRETENDARD_HEAD4_BOLD}
    color: ${COLORS.GRAYSCALE.GRAY_8};
    padding: 4px 7px;
    background-color: ${COLORS.BACKGROUND.SECONDARY};
    border-radius: 2px;
    font-size: 14px;
`

const ListRow = styled(Row)`
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const List = ({ value }: { value: Record<string, string> }) => (
    <ListRow justifyContent={'flex-start'}>
        {Object.entries(value).map(([key, value]) => (
            <InlineColumn key={key}>
                <ColorViewer color={value} />
                <div
                    style={{
                        padding: '12px 0',
                    }}
                >
                    <ItemText>{key}</ItemText>
                </div>
            </InlineColumn>
        ))}
    </ListRow>
)

const Title = styled.div`
    ${TYPOS.PRETENDARD_HEAD2_BOLD}
    margin-bottom: 12px;
`

export const Color = () => (
    <>
        {Object.entries(COLORS)
            .sort(([key1], [key2]) => key1.split('_')[0].localeCompare(key2.split('_')[0]))
            .map(([key, value]) => (
                <Column key={key} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <Title>{key}</Title>
                    <List value={value} />
                </Column>
            ))}
    </>
)

export default {
    title: "Bibi's Design System/Foundation/Color",
    component: Color,
}
