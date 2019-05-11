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

export function fetchCovers() {
  return dispatch => {
    dispatch({ type: "LOADING_GAMES" });
    return fetch("/api/covers")
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: "FETCH_COVERS", covers: responseJson });
      });
  };
}

export const getGames = games => {
  return {
    type: "GET_GAMES",
    games: games
  };
};
