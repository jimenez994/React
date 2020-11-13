import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     errorMessage: null,
  //   };
  // }
  state = {
    latitude: null,
    errorMessage: null,
  };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: "Error: " + err.message })
    );
  }

  renderContent() {
    if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else if (this.state.errorMessage) {
      return <h2>{this.state.errorMessage}</h2>;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
