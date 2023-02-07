import PretendardRegularWoff from './woff/Pretendard-Regular.woff';
import PretendardRegularWoff2 from './woff2/Pretendard-Regular.woff2';
import PretendardMediumWoff from './woff/Pretendard-Medium.woff';
import PretendardMediumWoff2 from './woff2/Pretendard-Medium.woff2';
import PretendardSemiBoldWoff from './woff/Pretendard-SemiBold.woff';
import PretendardSemiBoldWoff2 from './woff2/Pretendard-SemiBold.woff2';

const FONTFACE = `
  @font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-display: swap;
  src: local('Pretendard SemiBold'), 
      url(${PretendardSemiBoldWoff2}) format('woff2'), 
      url(${PretendardSemiBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), 
        url(${PretendardMediumWoff2}) format('woff2'),
        url(${PretendardMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), 
        url(${PretendardRegularWoff2}) format('woff2'),
        url(${PretendardRegularWoff}) format('woff');
  }
`;

export default FONTFACE;
