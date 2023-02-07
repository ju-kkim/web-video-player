import styled from 'styled-components';
import MIXINS from 'src/common/Mixins';
import COLOR from 'src/common/Color';

const TimeInfo = styled.div`
  ${MIXINS.flexBox({})}
  gap: 2px;
  color: ${COLOR.WHITE.Opacity[80]};
  font-weight: 500;
`;

export { TimeInfo };
