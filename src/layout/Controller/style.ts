import COLOR from 'src/common/Color';
import MIXINS from 'src/common/Mixins';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${MIXINS.position({ type: 'absolute', left: '0', right: '0', bottom: '0' })}
  padding-bottom: 10px;
  z-index: 1;

  &::before {
    content: '';
    ${MIXINS.position({ type: 'absolute', left: '0', right: '0', bottom: '0' })}
    height: 180px;
    background: linear-gradient(180deg, transparent, ${COLOR.BLACK.Opacity[60]} 100%);
    z-index: -1;
  }
`;
export { Wrapper };
