import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

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
    // var cors = 3;
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({ latitude: "Latitude: " + position.coords.latitude }),
      (err) => this.setState({ errorMessage: "Error: " + err.message })
    );
  }
  render() {
    var content;

    if (this.state.latitude) {
      content = <h2>hello there: {this.state.latitude}</h2>;
    } else if (this.state.errorMessage) {
      content = <h2>{this.state.errorMessage}</h2>;
    } else {
      content = <div className="ui active centered inline loader"></div>;
    }

    return (
      <div>
        {content}
        <SeasonDisplay latitude={this.state.latitude}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
