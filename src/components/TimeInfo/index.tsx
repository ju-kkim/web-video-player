import React from 'react';
import { useVideo } from 'src/context/video/context';
import { convertTime } from 'src/utils/rangeUtils';
import * as S from './style';

export default function TimeInfo() {
  const { runningTime, playTime } = useVideo();

  return (
    <S.TimeInfo>
      <span>{convertTime(playTime)}</span>
      <span> / </span>
      <span>{convertTime(runningTime)}</span>
    </S.TimeInfo>
  );
}
