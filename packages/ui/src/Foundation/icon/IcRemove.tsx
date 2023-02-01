import { SVGProps, memo } from 'react'
const IcRemove = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)">
            <circle cx={12} cy={12} r={10} fill={props.fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="m9.5 14.5 5-5-5 5Z" fill={props.fill} />
            <path d="m9.5 14.5 5-5" stroke="#fff" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="m14.5 14.5-5-5 5 5Z" fill={props.fill} />
            <path d="m14.5 14.5-5-5" stroke="#fff" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcRemove)
export default Memo
