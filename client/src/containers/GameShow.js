import React, { Component } from "react";
import GameCard from "../components/GameCard";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

export default connect(mapStateToProps)(GameShow);
