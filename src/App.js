import { React, Component } from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import './App.css';
import DrumMachine from './features/DrumMachine';
import PowerControl from './features/PowerControl';
import VolumeControl from './features/VolumeControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card className="drumMachineCard">
          <CardContent>
            <DrumMachine />
          </CardContent>
          <CardActions className="controls">
            <PowerControl />
            <VolumeControl />
          </CardActions>
        </Card>
      </div>
    );
  }
};

export default App;
