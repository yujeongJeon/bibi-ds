import { SVGProps, memo } from 'react'
const IcHome = (props: SVGProps<SVGSVGElement>) => (
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
                d="m19.385 9.38-6.878-5.469a.812.812 0 0 0-1.013 0l-6.88 5.47A1.628 1.628 0 0 0 4 10.655v7.67a1.954 1.954 0 0 0 1.954 1.953h4.418v-3.87a.814.814 0 0 1 .814-.813h1.629a.814.814 0 0 1 .814.814v3.87h4.417A1.954 1.954 0 0 0 20 18.323v-7.668a1.628 1.628 0 0 0-.615-1.274"
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
const Memo = memo(IcHome)
export default Memo
