import React, { useEffect } from 'react';
import Play from '../../Assets/icon/play_solid.svg';
import Pause from '../../Assets/icon/pause_solid.svg';
import Replay from '../../Assets/icon/replay.svg';
import VolumeFull from '../../Assets/icon/volumefullOn_solid.svg';
import VolumeOn from '../../Assets/icon/volumeOn_solid.svg';
import VolumeOff from '../../Assets/icon/volumeOff_solid.svg';
import Forward from '../../Assets/icon/10forward_24.svg';
import Backward from '../../Assets/icon/10Backward_24.svg';
import { usePlayer } from 'src/context/player/context';
import { EFFECT_ICON_TIME } from 'src/common/Constants';
import * as S from './style';

export default function EffectIcon() {
  const { isEffectIcon, setIsEffectIcon } = usePlayer();
  const Icons = {
    Play,
    Pause,
    Replay,
    VolumeFull,
    VolumeOn,
    VolumeOff,
    Forward,
    Backward,
  };
  const Icon = Icons[isEffectIcon.icon];
  if (!Icon) throw new Error(`${isEffectIcon.icon} 아이콘이 없습니다.`);

  useEffect(initEffect, [isEffectIcon]);

  return (
    <>
      {isEffectIcon.isEffect && (
        <S.EffectWrap>
          <S.EffectIcon>
            <Icon />
          </S.EffectIcon>
        </S.EffectWrap>
      )}
    </>
  );

  function initEffect() {
    if (!isEffectIcon.isEffect) return;
    setTimeout(() => {
      setIsEffectIcon({ icon: isEffectIcon.icon, isEffect: false });
    }, EFFECT_ICON_TIME);
  }
}
