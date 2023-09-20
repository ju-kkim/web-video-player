import React from 'react';
import { useVideo } from 'src/context/video/context';
import { convertTime } from 'src/utils/rangeUtils';
import * as S from './style';
import { TEST_ID } from 'src/constants/testId';

export default function TimeInfo() {
  const { runningTime, playTime } = useVideo();

  return (
    <S.TimeInfo>
      <span data-testid={TEST_ID.RUNNING_TIME}>{convertTime(playTime)}</span>
      <span> / </span>
      <span data-testid={TEST_ID.PLAY_TIME}>{convertTime(runningTime)}</span>
    </S.TimeInfo>
  );
}
