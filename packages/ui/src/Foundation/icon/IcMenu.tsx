import { memo } from 'react'
import { TIconSize } from './size'

const IcMenu = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 6.25h14v1.5H5v-1.5ZM5 11.25h14v1.5H5v-1.5ZM5 16.25h9v1.5H5v-1.5Z" fill={props.fill} />
    </svg>
)
const Memo = memo(IcMenu)
export default Memo
