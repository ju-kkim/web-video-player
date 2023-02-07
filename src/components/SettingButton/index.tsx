import React from 'react';
import IconButton from 'src/components/IconButton';
import { usePlayer } from 'src/context/player/context';
import Setting from '../../Assets/icon/setting_solid.svg';
import SettingModal from './SettingModal';

export default function SettingButton() {
  const { isMainModal, setMainModal, settingValue } = usePlayer();

  return (
    <>
      <IconButton
        icon={<Setting />}
        onClick={() => {
          setMainModal(!isMainModal);
        }}
      />
      {isMainModal && <SettingModal value={settingValue} />}
    </>
  );
}
