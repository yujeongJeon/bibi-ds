import { SVGProps, memo } from 'react'
const IcDocument = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)" fillRule="evenodd" clipRule="evenodd" fill={props.fill}>
            <path d="M18 4H6a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h6.8v-4c0-1.102.898-2 2-2h4V4.8A.8.8 0 0 0 18 4Z" />
            <path d="M14 16v4l4.8-4.8h-4a.8.8 0 0 0-.8.8Z" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcDocument)
export default Memo
