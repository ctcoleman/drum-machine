import { React, Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography } from "@mui/material";
import DrumPads from "./DrumPads";
import PowerControl from "./PowerControl";
import VolumeControl from "./VolumeControl";
import Display from "./Display";

class DrumMachine extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          volume: "50",
          power: true,
          sound: ""
      }
      
      this.volumeControl = this.volumeControl.bind(this);
      this.powerControl = this.powerControl.bind(this);
      this.displayControl = this.displayControl.bind(this);
  }
  
  volumeControl = (volume) => {
      this.setState({
          volume,
          power: this.state.power,
          sound: this.state.sound
      })
      console.log(volume)
  }
  
  powerControl = (power) => {
      this.setState({
          volume: this.state.volume,
          power,
          sound: this.state.sound
      })
  }
  
  displayControl = (sound) => {
      this.setState({
          volume: this.state.volume,
          power: this.state.power,
          sound
      })
  }
  
  render() {
    return (
        <div id="DrumMachine">
        <Card className="drumMachineCard" sx={{ margin: "10vh auto" }}>
            <CardHeader title="Drum Machine" />
            <CardContent id="drum-machine">
                <DrumPads displayControl={this.displayControl} volume={this.state.volume} power={this.state.power} />
            </CardContent>
            <CardActions className="controls">
                <PowerControl power={this.state.power} togglePower={this.powerControl} />
                <Display sound={this.state.sound} />
                <VolumeControl volume={this.state.volume} volumeControl={this.volumeControl}/>
            </CardActions>
        </Card>
        </div>
    );   
  }
};

export default DrumMachine;
