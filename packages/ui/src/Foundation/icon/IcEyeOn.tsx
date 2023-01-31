import { SVGProps, memo } from 'react'
const IcEyeOn = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#icon__a)" fillRule="evenodd" clipRule="evenodd" fill={props.fill}>
            <path d="M12.104 9.688a2.418 2.418 0 0 0-2.416 2.416 2.418 2.418 0 0 0 2.416 2.417 2.418 2.418 0 0 0 2.417-2.417 2.418 2.418 0 0 0-2.417-2.416Z" />
            <path d="M12.104 16.27c-2.333 0-4.166-1.916-4.166-4.166 0-2.25 1.916-4.166 4.166-4.166 2.25 0 4.167 1.916 4.167 4.166 0 2.25-1.834 4.167-4.167 4.167Zm9.167-5.25c-2.167-3.332-5.584-5.332-9.167-5.332s-7 2-9.166 5.333a2.034 2.034 0 0 0 0 2.166c2.166 3.334 5.583 5.334 9.166 5.334 3.584 0 7-2 9.167-5.334.5-.666.5-1.5 0-2.166Z" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcEyeOn)
export default Memo
