import { SVGProps, memo } from 'react'
const IcNew = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx={12} cy={12} r={12} fill={props.fill} />
        <path d="M16 16.923h-1.722l-4.212-6.093h-.08v6.093H8v-9.59h1.748l4.186 6.093h.093V7.333H16v9.59Z" fill="#fff" />
    </svg>
)
const Memo = memo(IcNew)
export default Memo
