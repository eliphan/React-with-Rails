import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" value={props.input} onChange={props.onChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CommentInput;
