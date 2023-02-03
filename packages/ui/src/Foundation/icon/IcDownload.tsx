import { memo } from 'react'
import { TIconSize } from './size'

const IcDownload = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)" fill={props.fill}>
            <path d="M11.342 14.833a.928.928 0 0 0 .65.267.943.943 0 0 0 .65-.267L17 10.467a.92.92 0 0 0-1.3-1.3l-2.792 2.791V4.317a.914.914 0 0 0-.916-.917.914.914 0 0 0-.917.917v7.65l-2.8-2.792a.92.92 0 0 0-1.3 1.3l4.367 4.358Z" />
            <path d="M19.817 12.908a.914.914 0 0 0-.917.917v3.508c0 .6-.483 1.084-1.083 1.084H6.167c-.6 0-1.084-.484-1.084-1.084v-3.508a.914.914 0 0 0-.916-.917.914.914 0 0 0-.917.917v3.508a2.92 2.92 0 0 0 2.917 2.917h11.65a2.92 2.92 0 0 0 2.916-2.917v-3.508a.914.914 0 0 0-.916-.917Z" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcDownload)
export default Memo
