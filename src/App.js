import { React, Component } from "react";
import "./App.css";
import DrumMachine from "./features/DrumMachine/DrumMachine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
