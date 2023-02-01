import { SVGProps, memo } from 'react'
const IcBack = (props: SVGProps<SVGSVGElement>) => (
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
                d="M16.2 6.252 14.926 5 7.8 12l7.126 7 1.274-1.252L10.348 12 16.2 6.252Z"
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
const Memo = memo(IcBack)
export default Memo
