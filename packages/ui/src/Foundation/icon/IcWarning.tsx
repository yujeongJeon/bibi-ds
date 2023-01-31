import { SVGProps, memo } from 'react'
const IcWarning = (props: SVGProps<SVGSVGElement>) => (
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
                d="M12 17.417a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92Zm-.8-7.995a.8.8 0 0 1 1.6 0v4.004a.801.801 0 0 1-1.6 0V9.422Zm9.54 7.694L13.665 4.86c-.74-1.281-2.59-1.281-3.33 0L3.26 17.116c-.74 1.28.184 2.883 1.665 2.883h14.15c1.48 0 2.404-1.602 1.665-2.883Z"
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
const Memo = memo(IcWarning)
export default Memo
