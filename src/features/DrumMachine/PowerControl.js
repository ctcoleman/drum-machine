import { React } from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

function PowerControl({ power, togglePower }) {
  const handleToggle = (e, newValue) => {
    togglePower(newValue);
  };

  return (
    <FormGroup id="PowerControl">
      <FormControlLabel
        control={<Switch defaultChecked />}
        onChange={handleToggle}
        value={power}
        label="Power"
      />
    </FormGroup>
  );
}

export default PowerControl;
