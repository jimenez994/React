import React from "react";
import ReactDom from "react-dom";
import Search from "./Search";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
