import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import LikeInput from "../components/LikeInput";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { setGame } from "../actions/index";
import { increaseLike } from "../actions/index";
import Like from "../components/Like";
import CommentsContainer from "./CommentsContainer";

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
        <CommentsContainer />
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
    setGame: game => {
      dispatch(setGame(game));
    },
    increaseLike: like => {
      dispatch(increaseLike(like));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedGamesContainer);
