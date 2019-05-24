import axios from "axios";

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

export function increaseLike(like) {
  return dispatch => {
    axios
      .post("/api/likes", {
        headers: { "Content-Type": "application/json" },
        like: {
          game_id: JSON.stringify(like.game_id),
          like_count: 1
        }
      })
      .then(response => {
        dispatch({ type: "ADD_LIKE", like: response });
        console.log(response);
      });
  };
}

export function getLikes() {
  return dispatch => {
    axios.get("/api/likes/").then(response => {
      dispatch({ type: "GET_LIKES", like: response });
    });
  };
}
// setGame = () => {
//   const selectedGameId = parseInt(this.props.match.params.gameId);
//   const selectedGame = this.props.games.find(
//     game => game.id === selectedGameId
//   );
//   this.setState({
//     game: selectedGame
//   });
// };

export function setGame(game) {
  return dispatch => {
    dispatch({ type: "LOADING_GAMES" });
    return fetch("/api/games")
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: "FETCH_GAMES", games: responseJson });
      })
      .then(res => {
        dispatch({ type: "SET_GAME", game: game });
      });
  };
}
