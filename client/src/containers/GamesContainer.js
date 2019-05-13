import React, { Component } from "react";
import { connect } from "react-redux";
import GameList from "../components/GameList";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import SelectedGamesContainer from "./SelectedGamesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameShow from "./GameShow";
import { fetchCovers } from "../actions/index";

class GamesContainer extends Component {
  constructor() {
    super();

    this.state = {
      games: [],
      covers: []
    };
  }
  handleClick = event => {
    event.preventDefault();
  };

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    console.log(this.props.games);
    return (
      <div className="ui container">
        <GameList
          games={this.props.games}
          summary={this.props.games.summary}
          covers={this.props.covers}
          onClick={this.handleClick}
        />
        <Route
          path="/game"
          render={routerProps => (
            <GameShow {...routerProps} games={this.props.games} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games, covers: state.covers };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => {
      dispatch(fetchGames());
    },
    fetchCovers: () => {
      dispatch(fetchCovers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesContainer);
