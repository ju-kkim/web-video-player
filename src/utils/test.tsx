import React from 'react';
import { render } from '@testing-library/react';
import { PlayerProvider } from 'src/context/player/context';
import { VideoProvider } from 'src/context/video/context';

export function renderProvider(children: JSX.Element) {
  return render(
    <PlayerProvider>
      <VideoProvider>{children}</VideoProvider>
    </PlayerProvider>,
  );
}
