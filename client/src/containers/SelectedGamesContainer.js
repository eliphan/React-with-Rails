import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedGamesContainer extends Component {
  constructor() {
    super();

    this.state = {
      game: []
    };
  }

  handleOnClick = event => {
    this.setState({ showComponent: true });
  };

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return <div>{this.state.showComponent ? <GameCard /> : null}</div>;
  }
}
const mapStateToProps = state => {
  return { game: state.game };
};

export default connect(mapStateToProps)(SelectedGamesContainer);
