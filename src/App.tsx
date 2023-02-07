import React from 'react';
import VideoPlayer from './layout/VideoPlayer';
import { PlayerProvider } from './context/player/context';
import { VideoProvider } from './context/video/context';

export default function App() {
  return (
    <PlayerProvider>
      <VideoProvider>
        <VideoPlayer />
      </VideoProvider>
    </PlayerProvider>
  );
}
