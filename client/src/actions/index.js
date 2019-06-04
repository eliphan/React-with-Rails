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
        dispatch({ type: "ADD_LIKE", like: response.data });
      });
  };
}

export function getLikes() {
  return dispatch => {
    axios.get("/api/likes/").then(response => {
      dispatch({ type: "GET_LIKES", like: response.data });
    });
  };
}

export function setGame(game) {
  return dispatch => {
    dispatch({ type: "LOADING_GAMES" });
    return fetch("/api/games")
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: "SET_GAME", game: game, games: responseJson });
      });
  };
}

// export function addComment(comment) {
//   return dispatch => {
//     axios
//       .post("/api/comments",
//         headers: { "Content-Type": "application/json" },
//         comment: {
//           game_id: JSON.stringify(comment.game_id),
//           content: JSON.stringify(comment.content)
//         }
//       })
//       .then(resp => resp.json())
//       .then(comment => dispatch({ type: "ADD_COMMENT", comment }));
//   };
// }

// export function getComments() {
//   return dispatch => {
//     axios.get("/api/comments").then(response => {
//       dispatch({ type: "GET_COMMENTS", comments: response.data });
//     });
//   };
// }
