import { SVGProps, memo } from 'react'
const IcComment = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.964 3.933c-4.441 0-8.035 3.615-8.035 8.066 0 4.453 3.594 8.068 8.035 8.068 1.471 0 2.85-.4 4.035-1.093l2.156.58a1.362 1.362 0 0 0 1.67-1.666l-.63-2.364A8.073 8.073 0 0 0 20 12c0-4.452-3.595-8.067-8.036-8.067Zm-6.242 8.066c0-3.468 2.798-6.274 6.242-6.274S18.207 8.531 18.207 12a6.277 6.277 0 0 1-.755 2.996.896.896 0 0 0-.078.658l.527 1.977-1.641-.442a.896.896 0 0 0-.88.06 6.18 6.18 0 0 1-3.416 1.027c-3.444 0-6.242-2.806-6.242-6.275Z"
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
const Memo = memo(IcComment)
export default Memo
