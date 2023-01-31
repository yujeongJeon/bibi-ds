import { SVGProps, memo } from 'react'
const IcSearch = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.703 11.176a5.727 5.727 0 1 1-11.454 0 5.727 5.727 0 0 1 11.454 0Zm-1.029 5.425a7.176 7.176 0 1 1 .994-1.054l3.557 3.428L19.2 20l-3.526-3.4Z"
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
const Memo = memo(IcSearch)
export default Memo
