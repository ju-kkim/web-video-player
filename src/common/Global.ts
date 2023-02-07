import { createGlobalStyle } from 'styled-components';
import FONTFACE from 'src/Assets/font';
import FONT from './Font';
import MIXINS from './Mixins';

const GlobalStyle = createGlobalStyle`
  ${FONTFACE}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font: normal 400 10px/1 'Pretendard', sans-serif;
  }
  body {
    font-size: ${FONT.SIZE.medium};
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
  }
  input {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    font: inherit;
  }

  #root {
    ${MIXINS.position({})}
  }
`;

export default GlobalStyle;
