import styled from 'styled-components'
import { COLORS } from 'ui'
import { TSvgReactNode } from '../types/svg'
import { Column, Row } from './Flex'

function IconController({ targetIcon: TargetIcon }: { targetIcon: TSvgReactNode }) {
    return (
        <ModalContainer>
            <Controllers>
                <Column>Width & Color Controller</Column>
                <Column>Code section</Column>
            </Controllers>
            <Preview>{TargetIcon && <TargetIcon width={24} height={24} fill={COLORS.GRAYSCALE.GRAY_10} />}</Preview>
        </ModalContainer>
    )
}

const ModalContainer = styled(Row)`
    padding: 60px 20px 20px 20px;
`

const Controllers = styled(Column)`
    width: 460px;
`

const Preview = styled(Column)`
    width: 200px;
    height: 200px;
`

export default IconController
