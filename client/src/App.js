import React from "react";
import GamesContainer from "./containers/GamesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = { games: [] };
  }

  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route exact path="/all" component={GamesContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
