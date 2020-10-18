import React from "react";
// import CommentDetail from "./CommentDetail";
const ApprovalCard = (props) => {
  return (
    // <div className="ui cards">
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approval</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ApprovalCard;
