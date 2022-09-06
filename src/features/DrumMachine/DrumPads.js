import { React, Component } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import DrumPad from "./DrumPad";

import samples from "../../data.js";

class DrumPads extends Component {
  render() {
    return (
      <ImageList
        sx={{
          padding: "20px",
        }}
        cols={3}
        gap={10}
        className="DrumpPads"
      >
        {samples.map((el) => {
          return (
            <ImageListItem className="drum-pad" id={el.name} key={el.name}>
              <DrumPad
                displayControl={this.props.displayControl}
                power={this.props.power}
                volume={this.props.volume}
                triggerKey={el.key}
                sample={el.soundLink}
                name={el.name}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
}

export default DrumPads;
