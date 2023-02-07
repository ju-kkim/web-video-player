import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { VIDEO_INFO } from 'src/common/Constants';
import { usePlayer } from 'src/context/player/context';
import * as S from './style';

type volumeInfoType = {
  isVolumeOff: boolean;
  currentVolume: number;
  setCurrentVolume: Dispatch<SetStateAction<number>>;
};

export default function VolumeRange({ volumeInfo }: { volumeInfo: volumeInfoType }) {
  const { isVolumeSetMode } = usePlayer();
  const [isMouseMove, setIsMouseMove] = useState(false);
  const range = useRef<HTMLDivElement>(null);
  const { isVolumeOff, currentVolume, setCurrentVolume } = volumeInfo;
  const volumeRangeValue = isVolumeOff ? 0 : `${currentVolume * 100}%`;

  return (
    <S.VolumeRangeWrap style={{ width: isVolumeSetMode ? '70px' : 0, paddingLeft: isVolumeSetMode ? '11px' : 0 }}>
      <S.VolumeRangeBox ref={range} onMouseDown={startDrag} onMouseMove={moveDrag} onMouseUp={endDrag}>
        <S.BaseLine>
          <S.ActiveLine style={{ width: volumeRangeValue }} />
          <S.HandleBtn style={{ left: volumeRangeValue }} type="button"></S.HandleBtn>
        </S.BaseLine>
      </S.VolumeRangeBox>
    </S.VolumeRangeWrap>
  );

  function startDrag(event: React.MouseEvent<HTMLDivElement>) {
    if (isMouseMove) return;
    dragHandler({ type: 'start', event });
  }

  function moveDrag(event: React.MouseEvent<HTMLDivElement>) {
    if (!isMouseMove) return;
    dragHandler({ type: 'move', event });
  }

  function endDrag(event: React.MouseEvent<HTMLDivElement>) {
    if (!isMouseMove) return;
    dragHandler({ type: 'end', event });
  }

  function dragHandler({ type, event }: { type: 'start' | 'move' | 'end'; event: React.MouseEvent<HTMLDivElement> }) {
    if (!range.current) return;
    const rangeInfo = range.current.getBoundingClientRect();
    const { width, left, right } = rangeInfo;
    const targetPoint = event.clientX;
    const targetRange = (targetPoint - left) / width;
    const value = calcRangePercent(targetRange);
    const DISTANCE = 3;
    setCurrentVolume(value);

    switch (type) {
      case 'start':
        setIsMouseMove(true);
        checkforceQuit();
        break;
      case 'move':
        checkforceQuit();
        break;
      case 'end':
        setIsMouseMove(false);
        break;
      default:
        throw new Error(`${type}은 dragHandler에 없습니다.`);
    }

    function checkforceQuit() {
      const isRangeStart = targetPoint <= left + DISTANCE;
      const isRangeEnd = targetPoint >= right - DISTANCE;
      if (!isRangeStart && !isRangeEnd) return;
      if (isRangeStart) setCurrentVolume(VIDEO_INFO.VOLUME.MUTE);
      if (isRangeEnd) setCurrentVolume(VIDEO_INFO.VOLUME.MAX);
      dragHandler({ type: 'end', event });
    }
  }
}

function calcRangePercent(num: number): number {
  const calcValue = Math.round(num * 10) / 10;
  if (calcValue > VIDEO_INFO.VOLUME.MAX) return VIDEO_INFO.VOLUME.MAX;
  if (calcValue < VIDEO_INFO.VOLUME.MUTE) return VIDEO_INFO.VOLUME.MUTE;
  return calcValue;
}
