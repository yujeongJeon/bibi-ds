import { SVGProps, memo } from 'react'
const IcFill = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={12} cy={12} r={7.333} fill={props.fill} stroke={props.fill} strokeWidth={1.333} />
        <path fill="#fff" d="M11.333 7.778h1.333V14h-1.333zM11.333 14.889h1.333v1.333h-1.333z" />
    </svg>
)
const Memo = memo(IcFill)
export default Memo
