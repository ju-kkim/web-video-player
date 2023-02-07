import React, { useEffect, useState } from 'react';
import { VIDEO_INFO } from 'src/common/Constants';
import { useVideo } from 'src/context/video/context';
import { convertTime } from 'src/utils/rangeUtils';
import * as S from './style';

export default function Playbar() {
  const { VideoRef, runningTime, playTime } = useVideo();
  const [isSeek, setIsSeek] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [loadRange, setLoadRang] = useState(0);
  const playPercent = `${(playTime / runningTime) * 100}%`;
  const seekTimePercent = `${(seekTime / runningTime) * 100}%`;
  const loadRangePercent = `${(loadRange / runningTime) * 100}%`;

  useEffect(() => {
    const video = VideoRef.current;
    video?.addEventListener('progress', getLoadRange);
  }, []);

  return (
    <S.Wrapper>
      <S.BaseLine
        className="baseLine"
        onMouseMove={seekVideoTime}
        onMouseLeave={() => setIsSeek(false)}
        style={{ height: isSeek ? '4px' : '2px' }}
      >
        <S.PlayedLine style={{ width: playPercent }}></S.PlayedLine>
        <S.LoadedLine style={{ width: loadRangePercent }}></S.LoadedLine>
        {isSeek && (
          <S.HandleBtn type="button" style={{ left: playPercent }}>
            handle
          </S.HandleBtn>
        )}
        <S.RangeInput type="range" value={playTime} onInput={seekVideo} min={VIDEO_INFO.TIME.START} max={runningTime} />
        {isSeek && <S.SeekTime style={{ left: seekTimePercent }}>{convertTime(seekTime)}</S.SeekTime>}
      </S.BaseLine>
    </S.Wrapper>
  );

  function getLoadRange() {
    const video = VideoRef.current;
    if (video === null) return;
    const timeRange = video.buffered;
    if (!timeRange.length) return;
    const bufferdEnd = Math.floor(timeRange.end(timeRange.length - 1));
    setLoadRang(bufferdEnd);
  }

  function seekVideo(event: React.ChangeEvent<HTMLInputElement>) {
    const video = VideoRef.current;
    if (video === null) return;
    const range = event.target;
    video.currentTime = Number(range.value);
  }

  function seekVideoTime(event: React.MouseEvent<HTMLDivElement>) {
    const video = VideoRef.current;
    if (video === null) return;

    const targetPoint = event.clientX;
    const target = event.target as HTMLDivElement;
    const { left, right, width } = target.getBoundingClientRect();

    if (targetPoint < left || targetPoint > right) return;

    const targetTime = (runningTime * (targetPoint - left)) / width;
    setSeekTime(targetTime);
    setIsSeek(true);
  }
}
