import React, { ReactElement } from 'react';
import * as S from './style';

export default function IconButton({ icon, onClick }: { icon: ReactElement; onClick: React.MouseEventHandler }) {
  return (
    <S.IconButon type="button" onClick={onClick}>
      {icon}
    </S.IconButon>
  );
}
