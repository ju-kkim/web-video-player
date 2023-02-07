import React from 'react';
import Resolution from '../../Assets/icon/resolution_line.svg';
import Caption from '../../Assets/icon/caption_line.svg';
import Speed from '../../Assets/icon/speed.svg';
import Triangle from '../../Assets/icon/triangle_down.svg';
import * as S from './style';
import { setValueType } from 'src/context/player/context';

export default function SettingModal({ value }: { value: setValueType }) {
  const Icons = {
    Resolution,
    Caption,
    Speed,
  };
  return (
    <S.ModalWrap>
      {value.map((item) => {
        const ItemIcon = Icons[item.id];
        if (!ItemIcon) throw new Error(`${item.id} 아이콘이 없습니다.`);

        return (
          <S.ItemButton key={item.id}>
            <S.Icon className="menuIcon">
              <ItemIcon />
            </S.Icon>
            <S.ItemTitle>{item.value}</S.ItemTitle>
            <S.Icon>
              <Triangle />
            </S.Icon>
          </S.ItemButton>
        );
      })}
    </S.ModalWrap>
  );
}
