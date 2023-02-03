import { memo } from 'react'
import { TIconSize } from './size'

const IcOption = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)" fill={props.fill}>
            <circle cx={12} cy={6.5} r={1.5} />
            <circle cx={12} cy={12} r={1.5} />
            <circle cx={12} cy={17.5} r={1.5} />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcOption)
export default Memo
