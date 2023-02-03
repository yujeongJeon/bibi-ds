export const svgTemplate = ({ interfaces, componentName, jsx, exports }: any, { tpl }: any) => {
    return tpl`
import { memo } from 'react'
import { TIconSize } from './size'
${'\n'}

${interfaces};


const ${componentName} = (props: {size: TIconSize; fill: string}) => (
  ${jsx}
);
 
${exports};
`
}
