import { SVGProps, memo } from 'react'
const IcReComment = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)" fill={props.fill}>
            <path d="M4.5 4H6v12H4.5z" />
            <path d="M18.5 14.5V16h-14v-1.5z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m13.5 11.094.91-.894 5.09 5-5.09 5-.91-.894 4.18-4.106-4.18-4.106Z"
            />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcReComment)
export default Memo
