import { memo } from 'react'
import { TIconSize } from './size'

const IcShare = (props: { size: TIconSize, fill: string }) => (
    <svg
        width={props.size.width}
        height={props.size.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#icon__a)" fillRule="evenodd" clipRule="evenodd" fill={props.fill}>
            <path d="m8.278 9.676 2.795-2.796v7.65a.917.917 0 1 0 1.834 0V6.88l2.796 2.796a.912.912 0 0 0 1.494-.298A.917.917 0 0 0 17 8.38l-4.361-4.36a.92.92 0 0 0-1.296 0L6.98 8.378a.918.918 0 0 0 1.297 1.297Z" />
            <path d="M18.984 12.91a.918.918 0 0 0-.917.918v3.505c0 .598-.486 1.084-1.083 1.084H6.997a1.084 1.084 0 0 1-1.084-1.084v-3.506a.917.917 0 0 0-1.833 0v3.506a2.92 2.92 0 0 0 2.917 2.917h9.987a2.92 2.92 0 0 0 2.917-2.917v-3.506a.917.917 0 0 0-.917-.917" />
        </g>
        <defs>
            <clipPath id="icon__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(IcShare)
export default Memo
