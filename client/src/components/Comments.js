import React from "react";

const Comments = props => {
  return (
    <ul>
      {props.comments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  );
};

export default Comments;
