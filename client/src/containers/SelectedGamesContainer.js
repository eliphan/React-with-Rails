import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import { getGame } from "../actions/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { increaseLikes } from "../actions/index";
import LikeInput from "../components/LikeInput";

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
    event.preventDefault();
    const selectedGameId = parseInt(this.props.match.params.gameId);
    const obj = { game_id: selectedGameId };
    console.log(obj);
    this.setState({
      likes: this.state.likes + 1
    });
    fetch("/api/likes", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        game_id: obj.game_id,
        count: this.state.likes + 1
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
          cover={this.state.game.cover || []}
          onClick={this.handleClick}
          likes={this.state.likes}
        />
        <LikeInput
          game={this.state.game}
          likes={this.state.likes}
          onClick={this.handleClick}
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedGamesContainer);
