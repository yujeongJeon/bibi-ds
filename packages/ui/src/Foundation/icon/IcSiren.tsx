import { SVGProps, memo } from 'react'
const IcSiren = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19.703 18.173a.892.892 0 0 0-.879-.739h-.444V10.38l-.003-.192a6.38 6.38 0 0 0-12.757.192v7.055h-.445a.892.892 0 0 0-.879.739L3.98 20H20.02l-.317-1.827Zm-8.39-9.824a.688.688 0 0 1 1.374 0v2.838a.688.688 0 1 1-1.375 0V8.35ZM12 13.023A.904.904 0 1 1 12 14.83a.904.904 0 0 1 0-1.808Z"
            fill={props.fill}
        />
    </svg>
)
const Memo = memo(IcSiren)
export default Memo
