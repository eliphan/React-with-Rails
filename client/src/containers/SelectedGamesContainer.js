import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import { getGame } from "../actions/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

class SelectedGamesContainer extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      game: []
    };
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  setGame = () => {
    const selectedGameId = parseInt(this.props.match.params.gameId);
    console.log(typeof selectedGameId);
    const selectedGame = this.props.games.find(
      game => game.id === selectedGameId
    );
    this.setState({
      game: selectedGame
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setGame();
    }
  }

  render() {
    console.log(this.state.game);

    return (
      <div>
        <GameCard game={this.state.game} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games, game: state.game };
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
)(SelectedGamesContainer);
