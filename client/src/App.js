import React from "react";
import { connect } from "react-redux";
import GamesContainer from "./containers/GamesContainer";
import SelectedGamesContainer from "./containers/SelectedGamesContainer";
import GameShow from "./containers/GameShow";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Button } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route exact path="/all" component={GamesContainer} />
            <Route path="/games/:gameId" component={SelectedGamesContainer} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    games: state.games,
    game: state.game,
    covers: state.covers
  };
};
export default connect(mapStateToProps)(App);
