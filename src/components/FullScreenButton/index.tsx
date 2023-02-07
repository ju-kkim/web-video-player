import React, { useEffect, useState } from 'react';
import IconButton from 'src/components/IconButton';
import { usePlayer } from 'src/context/player/context';
import Maximize from '../../Assets/icon/maximize_solid.svg';
import Minimize from '../../Assets/icon/minimize_solid.svg';

export default function FullScreenButton() {
  const { PlayerRef } = usePlayer();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
  }, []);

  return <IconButton icon={isFullScreen ? <Minimize /> : <Maximize />} onClick={changeScreenMoe} />;

  function onFullScreenChange() {
    if (document.fullscreenElement) return;
    setIsFullScreen(false);
  }

  function changeScreenMoe() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      PlayerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    }
  }
}
