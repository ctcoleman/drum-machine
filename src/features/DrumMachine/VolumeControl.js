import { React, Component } from "react";
import { Stack, Slider } from "@mui/material";
import { VolumeUp, VolumeDown } from "@mui/icons-material";

class VolumeControl extends Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide = (e, newValue) => {
    this.props.volumeControl(newValue);
    e.preventDefault();
  };

  render() {
    return (
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "40%",
        }}
      >
        <VolumeDown />
        <Slider
          aria-label="Volume"
          volume={this.props.volume}
          onChange={this.handleSlide}
        />
        <VolumeUp />
      </Stack>
    );
  }
}

export default VolumeControl;
