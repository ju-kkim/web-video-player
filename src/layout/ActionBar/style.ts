import styled from 'styled-components';
import COLOR from 'src/common/Color';
import MIXINS from 'src/common/Mixins';

const wrapper = styled.div`
  ${MIXINS.flexBox({ justifyContent: 'space-between' })}
  padding: 8px 20px;
`;

const ActionLeftWrap = styled.div`
  ${MIXINS.flexBox({})}
  gap: 12px;
`;

const ActionButtonWrap = styled.div`
  ${MIXINS.flexBox({})}
  gap: 16px;
`;

const VolumeRange = styled.input`
  margin-left: 8px;
  -webkit-appearance: none;
  width: 60px;
  height: 2px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: ${COLOR.WHITE.Default};
    border-radius: 50%;
    cursor: pointer;
  }
`;
export { wrapper, ActionLeftWrap, ActionButtonWrap, VolumeRange };
