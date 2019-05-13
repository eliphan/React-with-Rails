import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import { getGame } from "../actions/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { increaseLikes } from "../actions/index";

class SelectedGamesContainer extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      game: [],
      likes: 0
    };
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  setGame = () => {
    const selectedGameId = parseInt(this.props.match.params.gameId);
    const selectedGame = this.props.games.find(
      game => game.id === selectedGameId
    );
    this.setState({
      game: selectedGame
    });
  };

  handleClick = event => {
    this.setState({
      likes: this.state.likes + 1
    });
    console.log(event.type);
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setGame();
    }
  }

  render() {
    return (
      <div>
        <GameCard
          game={this.state.game}
          onClick={this.handleClick}
          likes={this.state.likes}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games, game: state.game, likes: state.likes };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => {
      dispatch(fetchGames());
    },
    increaseLikes: () => {
      dispatch(increaseLikes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedGamesContainer);
