import { React, useState } from 'react';
import { Stack, Slider } from '@mui/material';
import { VolumeUp, VolumeDown } from '@mui/icons-material';

import './VolumeControl.css';

function VolumeControl() {
  const [volume, setVolume] = useState(50);

  const handleSlide = (e, newVolume) => setVolume(newVolume);

  return(
    <Stack id="VolumeControl">
      <VolumeDown />
      <Slider aria-label="Volume" volume={ volume } onChange={handleSlide} />
      <VolumeUp />
    </Stack>
  );
};

export default VolumeControl;
