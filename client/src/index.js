import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import GamesContainer from "./containers/GamesContainer";
import SelectedGamesContainer from "./containers/SelectedGamesContainer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
