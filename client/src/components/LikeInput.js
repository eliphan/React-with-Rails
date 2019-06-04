import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import Like from "./Like";
import { increaseLike } from "../actions/index";
import { getLikes } from "../actions/index";

class LikeInput extends Component {
  componentDidMount() {
    this.props.getLikes();
  }

  render() {
    return (
      <div className="ui buttons">
        <Button inverted color="red" onClick={this.props.onClick}>
          <Icon name="heart" />
          Like
        </Button>
        <Button basic color="red">
          <div>
            <Like
              likes={this.props.like || []}
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
    getLikes: () => {
      dispatch(getLikes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeInput);
