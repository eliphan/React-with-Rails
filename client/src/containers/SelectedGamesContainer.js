import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import { getLikes } from "../actions/index";
import NavBar from "../components/NavBar";
import LikeInput from "../components/LikeInput";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { setGame } from "../actions/index";

class SelectedGamesContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    // const selectedGameId = parseInt(this.props.match.params.gameId);
    // const selectedGame = this.props.games.find(
    //   game => game.id === selectedGameId
    // );

    this.props.setGame({
      game: this.props.games.find(
        game => game.id === parseInt(this.props.match.params.gameId)
      )
    });
  }

  getGame = () => {
    const selectedGameId = parseInt(this.props.match.params.gameId);
    const selectedGame = this.props.games.find(
      game => game.id === selectedGameId
    );
  };
  // componentDidMount() {
  //   this.props.fetchGames();
  // }

  // setGame = () => {
  //   const selectedGameId = parseInt(this.props.match.params.gameId);
  //   const selectedGame = this.props.games.find(
  //     game => game.id === selectedGameId
  //   );
  //   this.setState({
  //     game: selectedGame
  //   });
  // };

  // componentDidUpdate(prevProps) {
  //   if (this.props.game !== prevProps.game) {
  //     this.setGame();
  //   }
  // }
  getGame = () => {
    const selectedGameId = parseInt(this.props.match.params.gameId);

    const selectedGame = this.props.games.find(
      game => game.id === selectedGameId
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <GameCard
          game={this.props.game || []}
          cover={this.props.game.cover || []}
          platforms={this.props.game.platforms || []}
          screenshots={this.props.game.screenshots || []}
          genres={this.props.game.genres || []}
          onClick={this.handleClick}
        />
        <LikeInput game={this.props.game} gameId={this.props.game.id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    game: state.game,
    like: state.like
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLikes: () => {
      dispatch(getLikes());
    },
    setGame: game => {
      dispatch(setGame(game));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectedGamesContainer)
);
