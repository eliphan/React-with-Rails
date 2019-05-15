import React, { Component } from "react";
import { connect } from "react-redux";
import GameList from "../components/GameList";
import GameCard from "../components/GameCard";
import { fetchGames } from "../actions/index";
import SelectedGamesContainer from "./SelectedGamesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameShow from "./GameShow";

class GamesContainer extends Component {

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
          cover={this.props.games.cover}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games };
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
)(GamesContainer);
