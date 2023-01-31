import { SVGProps, memo } from 'react'
const IcRecommend = (props: SVGProps<SVGSVGElement>) => (
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
                d="m12.583 3.667 2.429 4.983 5.431.8c.533.078.746.741.36 1.122l-3.93 3.879.928 5.478c.09.538-.467.947-.943.693L12 18.037l-4.858 2.586c-.476.254-1.033-.157-.943-.694l.928-5.478-3.93-3.88c-.386-.38-.173-1.043.36-1.121l5.431-.8 2.43-4.983a.647.647 0 0 1 1.165 0Z"
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
const Memo = memo(IcRecommend)
export default Memo
