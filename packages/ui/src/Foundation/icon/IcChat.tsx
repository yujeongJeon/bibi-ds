import { SVGProps, memo } from 'react'
const IcChat = (props: SVGProps<SVGSVGElement>) => (
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
                d="M3.25 12c0-4.83 3.898-8.75 8.714-8.75 4.816 0 8.715 3.92 8.715 8.75 0 1.401-.33 2.729-.914 3.905l.728 2.728a1.27 1.27 0 0 1-1.558 1.553l-2.506-.674a8.639 8.639 0 0 1-4.465 1.238c-4.816 0-8.714-3.92-8.714-8.75Zm4.785.975a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95ZM12.91 12a.975.975 0 1 1-1.95 0 .975.975 0 0 1 1.95 0Zm2.925.975a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95Z"
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
const Memo = memo(IcChat)
export default Memo
