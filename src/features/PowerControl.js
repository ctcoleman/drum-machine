import { React, useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

function PowerControl() {
  const [power, setPower] = useState(true);

  const handleToggle = (e, newValue) => {
    setPower(newValue);
  }

  return(
    <FormGroup id="PowerControl">
      <FormControlLabel control={<Switch defaultChecked />} onChange={handleToggle} value={ power } label="Power" />
    </FormGroup>
  );
};

export default PowerControl;
