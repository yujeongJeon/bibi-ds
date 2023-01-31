import { SVGProps, memo } from 'react'
const IcCommunity = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)" fillRule="evenodd" clipRule="evenodd" fill={props.fill}>
            <path d="M7.5 11.647a3.751 3.751 0 1 0 0-7.502 3.751 3.751 0 0 0 0 7.502Zm.5 6.181c0-1.264.771-3.135 2.48-4.552-.843-.297-1.828-.483-2.98-.483-5.04 0-7 3.438-7 5.035 0 1.6 4.173 2.024 7 2.024.471 0 .98-.013 1.501-.04C8.34 19.285 8 18.625 8 17.828Z" />
            <path d="M16.5 12.794c-5.04 0-7 3.437-7 5.035 0 1.598 4.173 2.024 7 2.024s7-.426 7-2.024-1.96-5.035-7-5.035Zm0-1.147a3.751 3.751 0 1 0 0-7.502 3.751 3.751 0 0 0 0 7.502Z" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcCommunity)
export default Memo
