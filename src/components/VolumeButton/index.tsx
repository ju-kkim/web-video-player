import React, { useEffect, useState } from 'react';
import { usePlayer } from 'src/context/player/context';
import { useVideo } from 'src/context/video/context';
import IconButton from 'src/components/IconButton';
import VolumeFull from '../../Assets/icon/volumefullOn_solid.svg';
import VolumeOn from '../../Assets/icon/volumeOn_solid.svg';
import VolumeOff from '../../Assets/icon/volumeOff_solid.svg';
import * as S from './style';
import { VIDEO_INFO } from 'src/common/Constants';
import VolumeRange from './VolumeRange';

export default function VolumeButton() {
  const { VideoRef } = useVideo();
  const { setIsVolumeSetMode, setIsEffectIcon } = usePlayer();
  const [isVolumeOff, setIsVolumeOff] = useState(true);
  const [currentVolume, setCurrentVolume] = useState(VIDEO_INFO.VOLUME.MUTE);
  const Icon = getVolumeIcon();

  useEffect(setVideoVolume, [currentVolume]);

  useEffect(() => {
    if (isVolumeOff) return setIsEffectIcon({ icon: 'VolumeOff', isEffect: true });
    if (currentVolume === VIDEO_INFO.VOLUME.MAX) return setIsEffectIcon({ icon: 'VolumeFull', isEffect: true });
    setIsEffectIcon({ icon: 'VolumeOn', isEffect: true });
  }, [isVolumeOff, currentVolume]);

  return (
    <S.VolumeWrap onMouseOver={() => setIsVolumeSetMode(true)}>
      <IconButton icon={<Icon />} onClick={switchVolumeOff} />
      <VolumeRange volumeInfo={{ isVolumeOff, currentVolume, setCurrentVolume }} />
    </S.VolumeWrap>
  );

  function getVolumeIcon() {
    if (currentVolume === VIDEO_INFO.VOLUME.MAX) return VolumeFull;
    return isVolumeOff ? VolumeOff : VolumeOn;
  }

  function setVideoVolume() {
    const video = VideoRef.current;
    if (video === null) return;
    currentVolume === VIDEO_INFO.VOLUME.MUTE ? setIsVolumeOff(true) : setIsVolumeOff(false);
    video.volume = currentVolume;
  }

  function switchVolumeOff() {
    const video = VideoRef.current;
    if (video === null) return;
    setIsVolumeOff(!isVolumeOff);
    isVolumeOff ? (video.volume = currentVolume) : (video.volume = VIDEO_INFO.VOLUME.MUTE);
    if (currentVolume === VIDEO_INFO.VOLUME.MUTE) {
      setCurrentVolume(VIDEO_INFO.VOLUME.DEFAULT);
    }
  }
}
