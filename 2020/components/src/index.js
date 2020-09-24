import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
const App = () => {
  var loop = () => {
    var comments = [];
    for (let i = 0; i < 16; i++) {
      comments.push(<CommentDetail key={i} />);
    }
    return comments;
  };
  return (
    <div className="ui container comments">
      <div className="ui three column divided grid">
        {loop()}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
