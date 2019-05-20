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
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={GamesContainer} />
          <Route path="/games/:gameId" component={SelectedGamesContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
