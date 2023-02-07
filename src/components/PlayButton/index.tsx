import React, { useEffect } from 'react';
import { usePlayer } from 'src/context/player/context';
import { useVideo } from 'src/context/video/context';
import IconButton from 'src/components/IconButton';
import Play from '../../Assets/icon/play_solid.svg';
import Pause from '../../Assets/icon/pause_solid.svg';
import Replay from '../../Assets/icon/replay.svg';

export default function PlayButton() {
  const { VideoRef, isPlay, isEnd, setIsEnd } = useVideo();
  const { setIsEffectIcon } = usePlayer();
  const Icon = getPlayIcon();

  useEffect(() => {
    document.addEventListener('keydown', controlSpaceKey);
    VideoRef.current?.addEventListener('click', () => controlVideoPlayback());
  }, []);

  useEffect(setEffectIcon, [isPlay]);

  return <IconButton icon={<Icon />} onClick={controlVideoPlayback} />;

  function getPlayIcon() {
    if (isEnd) return Replay;
    return isPlay ? Pause : Play;
  }

  function controlSpaceKey(event: KeyboardEvent) {
    if (event.code !== 'Space' || event.target !== document.body || event.repeat) return;
    controlVideoPlayback();
  }

  function setEffectIcon() {
    if (isPlay) {
      setIsEffectIcon({ icon: 'Play', isEffect: true });
    } else {
      setIsEffectIcon({ icon: 'Pause', isEffect: true });
    }
  }

  function controlVideoPlayback() {
    const video = VideoRef.current;
    if (video === null) return;
    video.paused ? video.play() : video.pause();
    replayVideo();
  }

  function replayVideo() {
    if (!isEnd) return;
    setIsEnd(false);
    VideoRef.current?.play();
    return;
  }
}
