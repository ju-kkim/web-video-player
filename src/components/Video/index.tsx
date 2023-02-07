import React, { useEffect } from 'react';
import { useVideo } from 'src/context/video/context';
import { getPlayTimeRange, getRunningTime } from 'src/utils/rangeUtils';
import VIDEO from '../../Assets/video/Big_Buck_Bunny.mp4';

export default function Video() {
  const { VideoRef, setIsPlay, isEnd, setIsEnd, playTime, setPlayTime, setRunningTime } = useVideo();

  useEffect(() => {
    const video = VideoRef.current;
    if (video === null) return;
    video.addEventListener('playing', () => setIsPlay(true));
    video.addEventListener('ended', () => setIsEnd(true));
    video.addEventListener('seeked', setVideoAfterSeek);
    video.addEventListener('pause', () => {
      if (video.ended) return;
      setIsPlay(false);
    });
    video.addEventListener('timeupdate', () => {
      getPlayTimeRange({ video: video, playTime, setPlayTime });
    });
    video.addEventListener('loadedmetadata', () => {
      getRunningTime({ video: video, setRunningTime });
    });
  }, []);

  return (
    <video ref={VideoRef} height="100%" autoPlay={true} style={{ opacity: isEnd ? '0.5' : '1' }}>
      <source src={VIDEO} type="video/mp4" />
    </video>
  );

  function setVideoAfterSeek() {
    const video = VideoRef.current;
    setIsEnd(false);
    video?.play();
  }
}
