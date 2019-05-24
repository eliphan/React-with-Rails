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
import { increaseLike } from "../actions/index";
import { Button, Icon } from "semantic-ui-react";
import Like from "../components/Like";

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

  handleOnClick = event => {
    event.preventDefault();
    this.props.increaseLike({
      game_id: this.props.game.game.id,
      like_count: 1
    });
  };

  // getGame = () => {
  //   const selectedGameId = parseInt(this.props.match.params.gameId);
  //   const selectedGame = this.props.games.find(
  //     game => game.id === selectedGameId
  //   );
  // };

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
  //   if (this.props.like !== prevProps.like) {
  //     this.props.getLikes();
  //   }
  // }
  // getGame = () => {
  //   const selectedGameId = parseInt(this.props.match.params.gameId);

  //   const selectedGame = this.props.games.find(
  //     game => game.id === selectedGameId
  //   );
  // };

  render() {
    return (
      <div>
        <GameCard
          game={this.props.game.game || []}
          cover={this.props.game.game.cover || []}
          platforms={this.props.game.game.platforms || []}
          screenshots={this.props.game.game.screenshots || []}
          genres={this.props.game.game.genres || []}
        />
        <LikeInput
          game={this.props.game.game}
          gameId={this.props.game.game.id}
          onClick={this.handleOnClick}
        />
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
    },
    increaseLike: like => {
      dispatch(increaseLike(like));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectedGamesContainer)
);
