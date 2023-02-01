import { createGlobalStyle } from 'styled-components'
import PretendardLight from '../assets/Pretendard-Light.woff'
import PretendardMedium from '../assets/Pretendard-Medium.woff'
import PretendardBold from '../assets/Pretendard-Bold.woff'
import COLORS from './color'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        src: local('Pretendard-Light'), local('Pretendard-Light');
        font-style: normal;
        src: url(${PretendardLight}) format('opentype');
  }
  @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        src: local('Pretendard-Medium'), local('Pretendard-Medium');
        font-style: normal;
        src: url(${PretendardMedium}) format('opentype');
  }
  @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        src: local('Pretendard-Bold'), local('Pretendard-Bold');
        font-style: normal;
        src: url(${PretendardBold}) format('opentype');
  }
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: transparent;
    border: none;
}

::-webkit-scrollbar-thumb {
    background: ${COLORS.GRAYSCALE.GRAY_2};
    -webkit-border-radius: 1em;
    -webkit-box-shadow: none;
}

::-webkit-scrollbar-corner {
    background: #fff;
}
`

export default GlobalStyle
