import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import GameList from "../components/GameList";
import { fetchGames } from "../actions/index";

class GamesContainer extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  // componentDidMount() {
  //   // axios
  //   //   .get("/api/games")
  //   //   .then(response => {
  //   //     this.setState({ games: response.data });
  //   //   })
  //   //   .catch(error => console.log(error));

  // }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div className="ui container">
        <GameList games={this.props.games} summary={this.props.games.summary} />
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
