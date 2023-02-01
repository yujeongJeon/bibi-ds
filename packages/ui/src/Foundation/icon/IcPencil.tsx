import { SVGProps, memo } from 'react'
const IcPencil = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.229 7.063-6.87 6.87-.937 3.494-.616 2.302a.38.38 0 0 0 .465.465l2.3-.617 3.496-.937 6.87-6.87-4.707-4.707h-.001Zm7.549.796-3.636-3.637a.758.758 0 0 0-1.072 0l-1.876 1.876 4.708 4.708 1.876-1.876a.756.756 0 0 0 0-1.072"
            fill={props.fill}
        />
    </svg>
)
const Memo = memo(IcPencil)
export default Memo
