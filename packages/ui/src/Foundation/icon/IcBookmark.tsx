import { SVGProps, memo } from 'react'
const IcBookmark = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99 5.849c0-.495.353-.849.848-.849h10.324c.495 0 .848.354.848.849V18.08c0 .354-.353.566-.636.354l-4.95-2.828a.901.901 0 0 0-.848 0l-4.95 2.828c-.283.142-.637-.07-.637-.354V5.85Z"
            fill={props.fill}
        />
    </svg>
)
const Memo = memo(IcBookmark)
export default Memo
