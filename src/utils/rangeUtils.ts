import { Dispatch, SetStateAction } from 'react';

function convertTime(second: number) {
  const hour = Math.floor(second / 3600);
  const min = Math.floor((second % 3600) / 60);
  const sec = Math.floor(second % 60);
  const hourText = hour > 0 ? `${hour}:` : '';
  const minText = min > 0 ? `${min}:` : '00:';
  const secText = sec < 10 ? `0${sec}` : sec;

  return `${hourText}${minText}${secText}`;
}

function getPlayTimeRange({
  video,
  playTime,
  setPlayTime,
}: {
  video: HTMLVideoElement;
  playTime: number;
  setPlayTime: Dispatch<SetStateAction<number>>;
}) {
  const currentTime = Math.floor(video.currentTime);
  if (currentTime === playTime) return;
  setPlayTime(currentTime);
}

function getRunningTime({
  video,
  setRunningTime,
}: {
  video: HTMLVideoElement;
  setRunningTime: Dispatch<SetStateAction<number>>;
}) {
  const duration = Math.floor(video.duration);
  setRunningTime(duration);
}

export { convertTime, getPlayTimeRange, getRunningTime };
