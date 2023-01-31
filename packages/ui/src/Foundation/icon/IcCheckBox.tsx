import { SVGProps, memo } from 'react'
const IcCheckBox = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)">
            <circle cx={12} cy={12} r={9.6} fill={props.fill} />
            <path d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0Z" fill="#fff" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 19.8a7.8 7.8 0 1 0 0-15.6 7.8 7.8 0 0 0 0 15.6Zm0 1.8a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Z"
                fill={props.fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.236 10.236 11.4 15.073l-3.636-3.637 1.272-1.272 2.364 2.363 3.564-3.563 1.272 1.272Z"
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
const Memo = memo(IcCheckBox)
export default Memo
