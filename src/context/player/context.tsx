import React, { useState, createContext, Dispatch, SetStateAction, useRef, useContext } from 'react';

const effect: effectType = {
  icon: 'Pause',
  isEffect: false,
};

const INIT_VALUE = {
  isVolumeSetMode: false,
  effect,
};

const initSetValue: setValueType = [
  {
    id: 'Resolution',
    value: '720P',
  },
  {
    id: 'Caption',
    value: '자막없음',
  },
  {
    id: 'Speed',
    value: '1.0x',
  },
];

const PlayerContext = createContext<PlayerContextTypes | null>(null);

export function PlayerProvider({ children }: PlayerProviderTypes) {
  const PlayerRef = useRef<HTMLDivElement>(null);
  const [isVolumeSetMode, setIsVolumeSetMode] = useState(INIT_VALUE.isVolumeSetMode);
  const [isEffectIcon, setIsEffectIcon] = useState(INIT_VALUE.effect);
  const [isMainModal, setMainModal] = useState(false);
  const [settingValue, setValue] = useState(initSetValue);

  const value = {
    PlayerRef,
    isVolumeSetMode,
    setIsVolumeSetMode,
    isEffectIcon,
    setIsEffectIcon,
    isMainModal,
    setMainModal,
    settingValue,
    setValue,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === null) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}

type PlayerContextTypes = {
  PlayerRef: React.RefObject<HTMLDivElement>;
  isVolumeSetMode: boolean;
  setIsVolumeSetMode: Dispatch<SetStateAction<boolean>>;
  isEffectIcon: effectType;
  setIsEffectIcon: Dispatch<SetStateAction<effectType>>;
  isMainModal: boolean;
  setMainModal: Dispatch<SetStateAction<boolean>>;
  settingValue: setValueType;
  setValue: Dispatch<SetStateAction<setValueType>>;
};

type PlayerProviderTypes = {
  children: JSX.Element;
};

type effectType = {
  icon: 'Play' | 'Pause' | 'Replay' | 'VolumeFull' | 'VolumeOn' | 'VolumeOff' | 'Forward' | 'Backward';
  isEffect: boolean;
};

export type setValueType = { id: modalType; value: string }[];

export type modalType = 'Resolution' | 'Caption' | 'Speed';
