import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";
import GameList from "../components/GameList";
import { fetchGames } from "../actions/index";
import axios from "axios";

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
      <div class="ui container">
        <GameList />
        <GameCard
          games={this.props.games}
          summary={this.props.games.summary}
          first_release_date={this.props.games.first_release_date}
        />
      </div>
    );
  }
  //   return (
  //     <div>
  //       <h1>GAMES</h1>
  //       {this.state.games.map((game, index) => (
  //         <div key={game.id}>
  //           <ul>
  //             <li>
  //               <h3>{game.name}</h3>
  //             </li>
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
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
