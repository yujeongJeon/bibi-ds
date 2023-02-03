import { memo } from 'react'
import { TIconSize } from './size'

const IcHeart = (props: { size: TIconSize, fill: string }) => (
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
                d="M11.084 20.052a1.656 1.656 0 0 0 1.83 0c1.768-1.167 5.618-3.956 7.276-7.077 2.186-4.118-.381-8.225-3.775-8.225-1.934 0-3.098 1.01-3.741 1.88a.833.833 0 0 1-1.348 0c-.644-.87-1.808-1.88-3.742-1.88-3.394 0-5.96 4.107-3.774 8.225 1.657 3.12 5.508 5.91 7.274 7.077Z"
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
const Memo = memo(IcHeart)
export default Memo
