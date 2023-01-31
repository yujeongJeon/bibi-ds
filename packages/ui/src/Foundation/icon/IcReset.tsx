import { SVGProps, memo } from 'react'
const IcReset = (props: SVGProps<SVGSVGElement>) => (
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
                d="M19.473 12.302a1 1 0 0 0-1.157.813 6.415 6.415 0 0 1-6.334 5.315A6.437 6.437 0 0 1 5.552 12a6.437 6.437 0 0 1 6.43-6.43 6.38 6.38 0 0 1 4.312 1.67l-.827.828a.825.825 0 0 0 .458 1.4l3.51.541a.826.826 0 0 0 .94-.942l-.54-3.51a.826.826 0 0 0-1.4-.458l-.727.728a8.37 8.37 0 0 0-5.726-2.256c-4.648 0-8.43 3.781-8.43 8.429s3.782 8.43 8.43 8.43a8.41 8.41 0 0 0 8.304-6.972 1 1 0 0 0-.814-1.156Z"
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
const Memo = memo(IcReset)
export default Memo
