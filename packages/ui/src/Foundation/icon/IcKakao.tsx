import { memo } from 'react'
import { TIconSize } from './size'

const IcKakao = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)">
            <path
                d="M12 3.2c-5.258 0-9.52 3.36-9.52 7.506 0 2.68 1.782 5.032 4.462 6.36-.145.503-.937 3.236-.968 3.45 0 0-.02.162.085.223.105.062.228.014.228.014.3-.042 3.473-2.271 4.022-2.659.549.078 1.114.119 1.691.119 5.258 0 9.52-3.361 9.52-7.507C21.52 6.561 17.258 3.2 12 3.2Z"
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
const Memo = memo(IcKakao)
export default Memo
