import React, { ReactElement } from 'react';
import * as S from './style';

export default function IconButton({
  icon,
  onClick,
  testid,
}: {
  icon: ReactElement;
  onClick: React.MouseEventHandler;
  testid?: string;
}) {
  return (
    <S.IconButon type="button" onClick={onClick} data-testid={testid}>
      {icon}
    </S.IconButon>
  );
}
