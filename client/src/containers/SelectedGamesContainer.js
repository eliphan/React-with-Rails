import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import { addLike } from "../actions/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LikeInput from "../components/LikeInput";

class SelectedGamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      game: [],
      like: []
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

    this.setState({
      like: this.state.like.count + 1
    });
    fetch("/api/likes", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        like: { game_id: obj.game_id, like_count: this.state.like.count + 1 }
      })
    }).then(res => res.json());
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setGame();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <GameCard
          game={this.state.game}
          cover={this.state.game.cover || []}
          platforms={this.state.game.platforms || []}
          screenshots={this.state.game.screenshots || []}
          genres={this.state.game.genres || []}
          onClick={this.handleClick}
          likes={this.state.like.count}
        />
        <LikeInput
          game={this.state.game}
          gameId={this.state.game.id}
          addLike={this.props.addLike}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    game: state.game,
    like: state.like,
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => {
      dispatch(fetchGames());
    },

    addLike: like => {
      dispatch(addLike(like));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedGamesContainer);
