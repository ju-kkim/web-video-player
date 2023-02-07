import React from 'react';
import { usePlayer } from 'src/context/player/context';
import { useVideo } from 'src/context/video/context';
import IconButton from 'src/components/IconButton';
import Forward from '../../Assets/icon/10forward_24.svg';
import Backward from '../../Assets/icon/10Backward_24.svg';
import { VIDEO_INFO } from 'src/common/Constants';

type directionType = 'Forward' | 'Backward';

export default function MoveButton({ direction }: { direction: directionType }) {
  const { VideoRef, runningTime } = useVideo();
  const { setIsEffectIcon } = usePlayer();
  const Icon = direction === 'Forward' ? Forward : Backward;

  return <IconButton icon={<Icon />} onClick={moveVideo} />;

  function moveVideo() {
    if (VideoRef.current === null) return;
    const videoCurrentTime = Math.floor(VideoRef.current.currentTime);
    let moveTime: number;

    switch (direction) {
      case 'Forward':
        setIsEffectIcon({ icon: 'Forward', isEffect: true });
        const forwardMoveTime = videoCurrentTime + VIDEO_INFO.TIME.MOVE;
        moveTime = forwardMoveTime >= runningTime ? runningTime : forwardMoveTime;
        break;
      case 'Backward':
        setIsEffectIcon({ icon: 'Backward', isEffect: true });
        moveTime = videoCurrentTime <= VIDEO_INFO.TIME.MOVE ? 0 : videoCurrentTime - VIDEO_INFO.TIME.MOVE;
        break;
    }
    VideoRef.current.currentTime = moveTime;
  }
}
