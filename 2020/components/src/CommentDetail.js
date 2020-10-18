import React from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
  var comment = props.comment;
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={comment.avatar}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {comment.userName}
          </a>
          <div className="metadata">
            <span>
              {/* Today at 6:00pm */}
              {comment.time}
            </span>
          </div>
        <div className="text"> {comment.text}</div>
        </div>
      </div>
  )
}
export default CommentDetail;     