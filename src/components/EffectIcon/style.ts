import COLOR from 'src/common/Color';
import MIXINS from 'src/common/Mixins';
import styled, { keyframes } from 'styled-components';

const EffectWrap = styled.div`
  ${MIXINS.position({ type: 'absolute', top: '50%', left: '50%' })}
  transform: translate(-50%, -50%);
`;

const IconAnimation = keyframes`
  0% { opacity: 0.5; transform: scale(0.8) }
  50% { opacity: 1;}
  100% { opacity: 0; transform: scale(1) }
  
`;

const EffectIcon = styled.div`
  ${MIXINS.flexBox({ justifyContent: 'center' })}
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: ${COLOR.BLACK.Opacity[75]};
  opacity: 0.5;
  transform: scale(0.8);
  transform-origin: center;
  animation: ${IconAnimation} 0.8s ease-out;

  svg {
    transform: scale(2);
  }
`;

export { EffectWrap, EffectIcon };
