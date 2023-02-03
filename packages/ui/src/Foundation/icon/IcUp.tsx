import { memo } from 'react'
import { TIconSize } from './size'

const IcUp = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.748 16.2 19 14.926 12 7.8l-7 7.126L6.25 16.2 12 10.348l5.748 5.852Z"
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
const Memo = memo(IcUp)
export default Memo
