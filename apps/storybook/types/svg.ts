import type { ReactElement, MemoExoticComponent } from 'react'
import { TIconSize } from 'ui'

export type TSvgReactNode = MemoExoticComponent<(props: { size: TIconSize; fill: string }) => ReactElement>
