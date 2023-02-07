import React, { useEffect, useState } from 'react';
import * as S from './style';
import Playbar from 'src/components/Playbar';
import ActionBar from '../ActionBar';
import { useVideo } from 'src/context/video/context';
import { usePlayer } from 'src/context/player/context';
import { COMTROL_TIME } from 'src/common/Constants';

export default function Controller() {
  const { PlayerRef } = usePlayer();
  const { VideoRef } = useVideo();
  const [isControllerShow, setIsControllerShow] = useState(true);
  const [controllerTime, setControllerTime] = useState(COMTROL_TIME.START);

  useEffect(() => {
    const video = VideoRef.current;
    const player = PlayerRef.current;
    video?.addEventListener('play', initStartTime);
    video?.addEventListener('pause', initEndTime);
    video?.addEventListener('ended', initEndTime);
    player?.addEventListener('mousemove', initStartTime);
  }, []);

  useEffect(timer, [controllerTime]);

  return (
    <S.Wrapper style={{ display: isControllerShow ? 'block' : 'none' }}>
      <Playbar />
      <ActionBar />
    </S.Wrapper>
  );

  function timer() {
    const counter = setInterval(() => {
      if (controllerTime === COMTROL_TIME.END) {
        setIsControllerShow(false);
        clearInterval(counter);
      } else {
        setIsControllerShow(true);
        setControllerTime(controllerTime + 1);
      }
    }, COMTROL_TIME.DISTANCE);
    return () => clearInterval(counter);
  }

  function initStartTime() {
    setIsControllerShow(true);
    setControllerTime(COMTROL_TIME.START);
  }

  function initEndTime() {
    setIsControllerShow(true);
    setControllerTime(COMTROL_TIME.END);
  }
}
