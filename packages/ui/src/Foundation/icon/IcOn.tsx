import { SVGProps, memo } from 'react'
const IcOn = (props: SVGProps<SVGSVGElement>) => (
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
                d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-1.4a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2Z"
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
const Memo = memo(IcOn)
export default Memo
