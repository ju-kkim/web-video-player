import React from 'react';
import EffectIcon from 'src/components/EffectIcon';
import { usePlayer } from 'src/context/player/context';
import Video from '../../components/Video';
import Controller from '../Controller';
import * as S from './style';

export default function VideoPlayer() {
  const { PlayerRef } = usePlayer();

  return (
    <S.Wrapper ref={PlayerRef}>
      <Video />
      <EffectIcon />
      <Controller />
    </S.Wrapper>
  );
}
