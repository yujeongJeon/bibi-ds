import { SVGProps, memo } from 'react'
const IcThumbUpFill = (props: SVGProps<SVGSVGElement>) => (
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
                d="M10.286 3.778a.795.795 0 0 0-.777.632l-.002.009v.004l-.55 2.745-1.63 3.262a.751.751 0 0 0-.068.135l-.035.07H4.572a.794.794 0 0 0-.794.794v8c0 .438.355.794.794.794h3.32a.802.802 0 0 0 .215 0h9.037c.37 0 .68-.253.768-.596v-.005l2.286-9.14v-.002a.793.793 0 0 0-.77-.988h-6.062V6.287a2.516 2.516 0 0 0-2.485-2.508h-.595Z"
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
const Memo = memo(IcThumbUpFill)
export default Memo
