import { SVGProps, memo } from 'react'
const IcQuestion = (props: SVGProps<SVGSVGElement>) => (
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
                d="M14.949 10.564c-.235 1.022-.939 1.472-1.453 1.802-.533.34-.717.482-.717.964a.736.736 0 0 1-1.473 0c0-1.313.807-1.828 1.396-2.206.468-.298.716-.474.812-.89.082-.36.017-.68-.197-.948-.28-.35-.78-.578-1.274-.578-.8 0-1.452.652-1.452 1.452a.736.736 0 0 1-1.473 0 2.927 2.927 0 0 1 2.925-2.924c.94 0 1.87.433 2.426 1.133.493.618.663 1.398.48 2.195Zm-2.893 6.332a.981.981 0 1 1 0-1.963.981.981 0 0 1 0 1.963ZM12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 0-18Z"
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
const Memo = memo(IcQuestion)
export default Memo
