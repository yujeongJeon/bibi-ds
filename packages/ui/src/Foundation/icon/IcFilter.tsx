import { SVGProps, memo } from 'react'
const IcFilter = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 6.25a.75.75 0 0 0-.446 1.353l3.643 2.692v5.227c0 .245.119.474.32.614l2.107 1.478a.75.75 0 0 0 1.18-.614v-6.705l3.642-2.692A.75.75 0 0 0 17 6.25H7Z"
                fill={props.fill}
            />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcFilter)
export default Memo
