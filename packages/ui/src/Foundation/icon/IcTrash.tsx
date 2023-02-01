import { SVGProps, memo } from 'react'
const IcTrash = (props: SVGProps<SVGSVGElement>) => (
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
                d="M16 7.2h4v1.6h-1.6v10.4a.8.8 0 0 1-.8.8H6.4a.8.8 0 0 1-.8-.8V8.8H4V7.2h4V4.8a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 .8.8v2.4Zm.8 1.6H7.2v9.6h9.6V8.8Zm-7.2 2.4h1.6V16H9.6v-4.8Zm3.2 0h1.6V16h-1.6v-4.8ZM9.6 5.6v1.6h4.8V5.6H9.6Z"
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
const Memo = memo(IcTrash)
export default Memo
