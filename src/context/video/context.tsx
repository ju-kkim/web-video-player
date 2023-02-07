import React, { useState, createContext, Dispatch, SetStateAction, useRef, useContext } from 'react';
import { VIDEO_INFO } from '../../common/Constants';

const INIT_VALUE = {
  runningTime: VIDEO_INFO.TIME.START,
  playTime: VIDEO_INFO.TIME.START,
};

const VideoContext = createContext<VideoContextTypes | null>(null);

export function VideoProvider({ children }: VideoProviderTypes) {
  const VideoRef = useRef<HTMLVideoElement>(null);
  const [runningTime, setRunningTime] = useState(INIT_VALUE.runningTime);
  const [playTime, setPlayTime] = useState(INIT_VALUE.playTime);
  const [isPlay, setIsPlay] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const value = {
    VideoRef,
    runningTime,
    setRunningTime,
    playTime,
    setPlayTime,
    isPlay,
    setIsPlay,
    isEnd,
    setIsEnd,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (context === null) {
    throw new Error('usePlayer must be used within a VideoProvider');
  }
  return context;
}

type VideoContextTypes = {
  VideoRef: React.RefObject<HTMLVideoElement>;
  runningTime: number;
  setRunningTime: Dispatch<SetStateAction<number>>;
  playTime: number;
  setPlayTime: Dispatch<SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: Dispatch<SetStateAction<boolean>>;
  isEnd: boolean;
  setIsEnd: Dispatch<SetStateAction<boolean>>;
};

type VideoProviderTypes = {
  children: JSX.Element;
};
