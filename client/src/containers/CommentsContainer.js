import React from "react";
import CommentInput from "../components/CommentInput";
import Comments from "../components/Comments";

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      comments: ["Great", "ZGood", "Nice"]
    };
  }

  handleOnChange = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

  // handleReduxOnsubmit = event => {
  //   event.preventDefault();
  //  this.props.addComment({
  //   game_id: this.props.game.id, //props passed down from selectedGameContainer
  //   content: this.state.input
  // });
  //   this.setState({
  //     input: ""
  //   });
  // };

  handleOnSubmit = event => {
    event.preventDefault();
    //destructive way
    // const comments = this.state.comments;
    // comments.push(this.state.input);
    // this.setState({
    //   input: "", //reset input field
    //   comments //comments: comments -because identical key-value can be passed in only once
    // });
    // non-destructive way
    this.setState({
      comments: [...this.state.comments, this.state.input],
      input: ""
    });
    //non-destructive way with id
    //  const comment = {id: Math.random(), content: this.state.input}
    //  this.setState({
    //    comments: [...this.state.comments, comment],
    //    input: ""
    //  })
  };

  handleSort = event => {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments].sort()
    });
  };

  render() {
    return (
      <div className="container">
        Comments:{" "}
        <CommentInput
          input={this.state.input}
          onChange={event => this.handleOnChange(event)}
          onSubmit={event => this.handleOnSubmit(event)}
        />
        <button onClick={this.handleSort}>Sort</button>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentsContainer;
