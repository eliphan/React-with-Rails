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

export function fetchRPGGames() {
  return dispatch => {
    dispatch({ type: "LOADING_GAMES" });
    return fetch("/api/rpg")
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: "FETCH_GAMES", games: responseJson });
      });
  };
}

export const getGAME = game => {
  return {
    type: "GET_GAME",
    game: game
  };
};
