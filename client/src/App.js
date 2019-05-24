import React from "react";
import GamesContainer from "./containers/GamesContainer";
import SelectedGamesContainer from "./containers/SelectedGamesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

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
