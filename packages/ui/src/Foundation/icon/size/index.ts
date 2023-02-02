import sizeSet from '../../../json/size.json'

const ICON_SIZE = sizeSet

export type TIconSize = (typeof ICON_SIZE)[keyof typeof ICON_SIZE]

export default ICON_SIZE
