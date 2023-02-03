import { memo } from 'react'
import { TIconSize } from './size'

const IcCancel = (props: { size: TIconSize, fill: string }) => (
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
                d="M12 10.75 7.625 6.375l-1.25 1.25L10.75 12l-4.375 4.375 1.25 1.25L12 13.25l4.375 4.375 1.25-1.25L13.25 12l4.375-4.375-1.25-1.25L12 10.75Z"
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
const Memo = memo(IcCancel)
export default Memo
