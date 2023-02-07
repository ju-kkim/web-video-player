import COLOR from 'src/common/Color';
import MIXINS from 'src/common/Mixins';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${MIXINS.position({})}
  width: 100%;
  padding-top: 56.25%;
  background: ${COLOR.BLACK.Default};

  video {
    ${MIXINS.position({ type: 'absolute', top: '50%', left: '50%' })}
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export { Wrapper };
