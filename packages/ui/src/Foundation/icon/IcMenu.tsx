import { SVGProps, memo } from 'react'
const IcMenu = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 6.25h14v1.5H5v-1.5ZM5 11.25h14v1.5H5v-1.5ZM5 16.25h9v1.5H5v-1.5Z" fill={props.fill} />
    </svg>
)
const Memo = memo(IcMenu)
export default Memo
