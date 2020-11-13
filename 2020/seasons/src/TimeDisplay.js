import React from "react";

class TimeDisplay extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div><h3>{this.state.time}</h3></div>;
  }
}

export default TimeDisplay;
