import { SVGProps, memo } from 'react'
const IcUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)" stroke={props.fill} strokeWidth={1.5}>
            <path d="M12.1 6v11.767M6.2 11.379 12.1 6l5.9 5.463" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcUp)
export default Memo
