import React, { useState } from 'react';
import IconButton from 'src/components/IconButton';
import CaptionOn from '../../Assets/icon/captionOn_solid.svg';
import CaptionOff from '../../Assets/icon/captionOff_solid.svg';

export default function SubTitleButton() {
  const [isSutTitle, setIsSubTitle] = useState(true);
  return <IconButton icon={isSutTitle ? <CaptionOn /> : <CaptionOff />} onClick={() => setIsSubTitle(!isSutTitle)} />;
}
