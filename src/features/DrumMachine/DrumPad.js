import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick = () => {
    const padSample = document.getElementById(this.props.triggerKey);
    this.props.displayControl(this.props.name);
    if (this.props.power) {
      padSample.volume = this.props.volume * 0.01;
      padSample.play();
    }
  };

  handleKeyPress = (e) => {
    const padSample = document.getElementById(this.props.triggerKey);
    if (e.key.toUpperCase() === this.props.triggerKey && this.props.power) {
      this.props.displayControl(this.props.name);
      padSample.volume = this.props.volume * 0.01;
      padSample.play();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <Card className="DrumPad">
        <CardActionArea onClick={this.handleClick}>
          <CardContent sx={{ textAlign: "center" }}>
            <audio
              id={this.props.triggerKey}
              className="clip"
              src={this.props.sample}
            />
            <Typography gutterBottom variant="h5">
              {this.props.triggerKey}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default DrumPad;
