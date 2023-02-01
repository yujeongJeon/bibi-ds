import { SVGProps, memo } from 'react'
const IcTransfer = (props: SVGProps<SVGSVGElement>) => (
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
                d="M3 12c0 4.99 4.01 9 9 9s9-4.01 9-9-4.01-9-9-9-9 4.01-9 9Zm4.5 0c0-.49.327-.818.818-.818h5.4L11.836 9.3a.79.79 0 0 1 0-1.145.79.79 0 0 1 1.146 0l3.273 3.272a.79.79 0 0 1 0 1.146l-3.273 3.272a.743.743 0 0 1-.573.246.743.743 0 0 1-.573-.246.79.79 0 0 1 0-1.145l1.882-1.882h-5.4A.82.82 0 0 1 7.5 12Z"
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
const Memo = memo(IcTransfer)
export default Memo
