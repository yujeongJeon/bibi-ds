import { SVGProps, memo } from 'react'
const IcLocation = (props: SVGProps<SVGSVGElement>) => (
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
                d="M12.02 12.992c-1.618 0-2.933-1.29-2.933-2.881 0-1.594 1.315-2.882 2.933-2.882 1.62 0 2.931 1.288 2.931 2.882 0 1.59-1.312 2.881-2.93 2.881Zm5.897-6.887a7.043 7.043 0 0 0-4.615-2.989 7.295 7.295 0 0 0-2.862.054 7.3 7.3 0 0 0-4.483 3.077c-1.075 1.636-1.41 3.639-.966 5.795.728 3.53 3.114 6.816 6.384 8.789.19.114.404.169.618.169.24 0 .479-.07.682-.209 3.257-2.218 5.635-5.56 6.359-8.938a7.448 7.448 0 0 0-1.117-5.748Z"
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
const Memo = memo(IcLocation)
export default Memo
