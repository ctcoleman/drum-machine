import { React, Component } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import DrumPad from './DrumPad';

class DrumPads extends Component {
  constructor(props) {
    super(props)
    this.renderDrumPads = this.renderDrumPads.bind(this);
  }
  renderDrumPads = () => {
    for (let i=0; i<=9; i++) {
      return <DrumPad />
    }
  }
  render() {
    return (
      <ImageList sx={{
          padding: "20px",    
        }}
        cols={3}
        gap={10}
        className="DrumpPads"
      >
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
        <ImageListItem>
          <DrumPad /> 
        </ImageListItem>
        <ImageListItem>
          <DrumPad />
        </ImageListItem>
      </ImageList>
    );
  }
};

export default DrumPads;
