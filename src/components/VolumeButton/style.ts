import COLOR from 'src/common/Color';
import MIXINS from 'src/common/Mixins';
import styled from 'styled-components';

const VolumeWrap = styled.div`
  ${MIXINS.flexBox({})}
`;

const VolumeRangeWrap = styled.div`
  transition: 0.3s;
  overflow: hidden;
`;

const VolumeRangeBox = styled.div`
  padding: 11px 5px;
  cursor: pointer;
`;

const BaseLine = styled.div`
  ${MIXINS.position({})}
  width: 60px;
  height: 2px;
  background: ${COLOR.WHITE.Opacity[50]};
`;

const ActiveLine = styled.div`
  ${MIXINS.position({ type: 'absolute', top: '0', left: '0' })}
  height: 100%;
  background: ${COLOR.WHITE.Default};
  transition: 0.3s;
`;

const HandleBtn = styled.button`
  ${MIXINS.position({ type: 'absolute', top: '50%' })}
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${COLOR.WHITE.Default};
  transition: 0.3s;
`;

export { VolumeWrap, VolumeRangeWrap, VolumeRangeBox, BaseLine, ActiveLine, HandleBtn };
