import COLOR from 'src/common/Color';
import FONT from 'src/common/Font';
import MIXINS from 'src/common/Mixins';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${MIXINS.position({})}
  padding: 10px 20px;
`;

const BaseLine = styled.div`
  ${MIXINS.position({})}
  width: 100%;
  height: 2px;
  transition: 0.3s;
  background: ${COLOR.WHITE.Opacity[25]};
`;

const PlayedLine = styled.div`
  ${MIXINS.position({ type: 'absolute', top: '0', left: '0' })}
  height: 100%;
  background: ${COLOR.WHITE.Default};
`;

const LoadedLine = styled.div`
  ${MIXINS.position({ type: 'absolute', top: '0', left: '0' })}
  height: 100%;
  background: ${COLOR.WHITE.Opacity[40]};
`;

const HandleBtn = styled.button`
  ${MIXINS.position({ type: 'absolute', top: '50%', left: '0' })}
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${COLOR.WHITE.Default};
  font-size: 0;
  color: transparent;
`;

const RangeInput = styled.input`
  cursor: pointer;
  ${MIXINS.position({ type: 'absolute', top: '50%', left: '-8px', right: '-8px' })}
  transform: translateY(-50%);
  height: 2px;
  z-index: 2;
  opacity: 0;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;

const SeekTime = styled.span`
  ${MIXINS.position({ type: 'absolute', bottom: '14px' })}
  transform: translateX(-50%);
  padding: 0 6px;
  border-radius: 4px;
  font-size: ${FONT.SIZE.large};
  font-weight: ${FONT.WEIGHT.bold};
  line-height: 26px;
  color: ${COLOR.WHITE.Default};
  background: ${COLOR.BLACK.Opacity[95]};

  &::after {
    content: '';
    ${MIXINS.position({ type: 'absolute', top: '100%', left: '50%' })}
    width: 2px;
    height: 4px;
    margin-top: 10px;
    background: #fff;
  }
`;

export { Wrapper, BaseLine, PlayedLine, LoadedLine, HandleBtn, RangeInput, SeekTime };
