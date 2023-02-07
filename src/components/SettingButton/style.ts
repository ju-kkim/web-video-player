import COLOR from 'src/common/Color';
import styled, { css } from 'styled-components';
import MIXINS from 'src/common/Mixins';
import FONT from 'src/common/Font';

const ModalWrap = styled.div`
  ${MIXINS.position({ type: 'absolute', right: '20px', bottom: '86px' })}
  width: 240px;
  padding: 4px 0;
  border-radius: 4px;
  background: ${COLOR.BLACK.Opacity[95]};
`;

const ItemBox = css`
  ${MIXINS.flexBox({ justifyContent: 'space-between' })}
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  color: ${COLOR.WHITE.Default};
  box-sizing: border-box;
`;

const ModalTitle = styled.div`
  ${ItemBox}
  gap: 8px;
  span {
    width: 100%;
    font-weight: ${FONT.WEIGHT.bold};
  }
`;

const BackButton = styled.button`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const OptionButton = styled.button`
  ${MIXINS.flexBox({})}
  flex-shrink: 0;

  span {
    font-size: ${FONT.SIZE.small};
    font-weight: ${FONT.WEIGHT.medium};
    color: ${COLOR.WHITE.Default};
  }
`;

const ItemButton = styled.button`
  ${ItemBox}
  gap: 16px;
`;

const Icon = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 100%;

  svg {
    width: 100%;
  }

  &.menuIcon {
    opacity: 0.5;
  }
`;

const ItemTitle = styled.span`
  width: 100%;
  text-align: left;
`;

export { ModalWrap, ItemBox, Icon, ItemTitle, ModalTitle, BackButton, OptionButton, ItemButton };
