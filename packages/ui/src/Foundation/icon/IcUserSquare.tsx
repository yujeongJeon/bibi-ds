import { SVGProps, memo } from 'react'
const IcUserSquare = (props: SVGProps<SVGSVGElement>) => (
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
                d="M11.992 17.582c-2.105 0-5.21-.296-5.21-1.406 0-1.11 1.459-3.498 5.21-3.498 3.752 0 5.21 2.388 5.21 3.498 0 1.11-3.105 1.406-5.21 1.406Zm0-11.156a2.605 2.605 0 1 1 0 5.21 2.605 2.605 0 0 1 0-5.21ZM19.105 3H4.895A1.895 1.895 0 0 0 3 4.895v14.21A1.894 1.894 0 0 0 4.895 21h14.21A1.894 1.894 0 0 0 21 19.105V4.895A1.894 1.894 0 0 0 19.105 3Z"
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
const Memo = memo(IcUserSquare)
export default Memo
