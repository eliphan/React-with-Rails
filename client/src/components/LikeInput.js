import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";
import Like from "./Like";
import { increaseLike } from "../actions/index";
import { getLikes } from "../actions/index";

class LikeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleOnClick = event => {
    event.preventDefault();
    this.props.increaseLike({
      game_id: this.props.gameId,
      like_count: this.state.count + 1
    });
  };

  getLikes() {
    axios.get("/api/likes/").then(response => {
      this.setState({ like: response.data });
    });
  }

  // componentDidMount() {
  //   this.props.getLikes();
  // }

  render() {
    console.log(this.props);
    return (
      <div className="ui buttons">
        <Button inverted color="red" onClick={this.handleOnClick}>
          <Icon name="heart" />
          Like
        </Button>
        <Button basic color="red">
          <div>
            <Like
              likes={this.state.like || []}
              gameId={this.props.gameId || []}
            />
          </div>
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    like: state.like
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseLike: like => {
      dispatch(increaseLike(like));
    },
    getLikes: () => {
      dispatch(getLikes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeInput);
