import { SVGProps, memo } from 'react'
const IcBackArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)" stroke={props.fill} strokeWidth={1.5}>
            <path d="M5 11.9h13.767M11.293 17.8 5 11.9 11.392 6" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcBackArrow)
export default Memo
