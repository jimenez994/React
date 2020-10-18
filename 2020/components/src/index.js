import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';

const App = () => {
  var loop = () => {
    var comments = [];
    for (let i = 0; i < 16; i++) {
      var comment = {
        userName: faker.name.findName(),
        avatar: faker.image.avatar(),
        text: faker.lorem.sentence(),
        time: faker.date.recent().toLocaleDateString()
      }
      comments.push(
        <ApprovalCard  key={i}>
          <CommentDetail comment={comment} />
        </ApprovalCard>
      );
    }
    return comments;
  };
  return (
    <div className="ui container comments">
      {/* <ApprovalCard/> */}
        {loop()}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
