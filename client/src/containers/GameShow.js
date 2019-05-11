import React, { Component } from "react";
import GameCard from "../components/GameCard";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getGames } from "../actions/index";
class GameShow extends Component {
  setGame = () => {
    const selectedGameId = parseInt(this.props.match.params.gameId);

    const selectedGame = this.props.games.find(
      game => game.id === selectedGameId
    );
    this.setState({
      game: selectedGame
    });
  };
  componentDidMount() {
    this.props.getGames();
  }
  render() {
    return <div>app</div>;
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    game: state.game
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getGames: () => {
      dispatch(getGames());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameShow);
