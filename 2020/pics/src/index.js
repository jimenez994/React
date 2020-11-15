import React from "react";
import ReactDom from "react-dom";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
