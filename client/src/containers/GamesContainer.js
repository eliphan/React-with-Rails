import React, { Component } from "react";
import { connect } from "react-redux";
import GameList from "../components/GameList";
import { fetchGames } from "../actions/index";
import { Route } from "react-router-dom";
import SelectedGamesContainer from "./SelectedGamesContainer";
import { Link } from "react-router-dom";

class GamesContainer extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <GameList games={this.props.games} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => {
      dispatch(fetchGames());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesContainer);
