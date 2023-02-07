import React from 'react';
import FullScreenButton from 'src/components/FullScreenButton';
import MoveButton from 'src/components/MoveButton';
import PlayButton from 'src/components/PlayButton';
import SettingButton from 'src/components/SettingButton';
import SubTitleButton from 'src/components/SubTitleButton';
import TimeInfo from 'src/components/TimeInfo';
import VolumeButton from 'src/components/VolumeButton';
import { usePlayer } from 'src/context/player/context';
import * as S from './style';

export default function ActionBar() {
  const { setIsVolumeSetMode } = usePlayer();

  return (
    <S.wrapper>
      <S.ActionLeftWrap onMouseLeave={() => setIsVolumeSetMode(false)}>
        <S.ActionButtonWrap>
          <PlayButton />
          <MoveButton direction="Backward" />
          <MoveButton direction="Forward" />
          <VolumeButton />
        </S.ActionButtonWrap>
        <TimeInfo />
      </S.ActionLeftWrap>
      <S.ActionButtonWrap>
        <SubTitleButton />
        <SettingButton />
        <FullScreenButton />
      </S.ActionButtonWrap>
    </S.wrapper>
  );
}
