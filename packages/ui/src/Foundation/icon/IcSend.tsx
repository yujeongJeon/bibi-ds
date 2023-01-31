import { SVGProps, memo } from 'react'
const IcSend = (props: SVGProps<SVGSVGElement>) => (
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
                d="M2.008 19.816a.5.5 0 0 0 .697.458l18.223-7.813a.5.5 0 0 0 0-.92L2.705 3.729a.5.5 0 0 0-.697.46l-.007 5.47a.5.5 0 0 0 .434.497l10.134 1.35c.578.078.578.915 0 .992L2.435 13.848a.5.5 0 0 0-.434.497l.007 5.47Z"
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
const Memo = memo(IcSend)
export default Memo
