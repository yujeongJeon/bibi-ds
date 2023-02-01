import { SVGProps, memo } from 'react'
const IcCamera = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <mask
            id="icon__a"
            style={{
                maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={2}
            y={2}
            width={20}
            height={20}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M22 22H2V2h20v20Z" fill="#fff" />
        </mask>
        <g mask="url(#icon__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 2.833v2.5H2V7h2.5v2.5h1.667V7h2.5V5.333h-2.5v-2.5H4.5Zm2.5 5v2.5H4.5v8.334c0 .916.75 1.666 1.667 1.666H19.5c.916 0 1.666-.75 1.666-1.666v-10C21.166 7.75 20.416 7 19.5 7h-2.642l-1.525-1.667H9.5v2.5H7Zm5.833 10c2.3 0 4.167-1.866 4.167-4.166 0-2.3-1.867-4.167-4.167-4.167a4.168 4.168 0 0 0-4.166 4.167c0 2.3 1.866 4.166 4.166 4.166Zm0-1.5a2.664 2.664 0 0 1-2.666-2.666A2.664 2.664 0 0 1 12.833 11a2.664 2.664 0 0 1 2.667 2.667 2.664 2.664 0 0 1-2.667 2.666Z"
                fill={props.fill}
            />
        </g>
    </svg>
)
const Memo = memo(IcCamera)
export default Memo
