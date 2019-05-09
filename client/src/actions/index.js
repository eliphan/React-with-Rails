export function fetchGames() {
  return dispatch => {
    dispatch({ type: "LOADING_GAMES" });
    return fetch("/api/games")
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: "FETCH_GAMES", games: responseJson });
      });
  };
}

export const selectGame = game => {
  return {
    type: "SELECT_GAME",
    game
  };
};

export const addSelectedGame = game => {
  return {
    type: "ADD_SELECTED_GAME",
    game
  };
};
