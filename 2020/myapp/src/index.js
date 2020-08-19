// import the react and reactDom libraries
import React from "react";
import ReactDom from "react-dom";

// Create a react component
const App = () => {
  return (
    <div>
      <h1>This is iron men</h1>
    </div>
  );
};

// take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
