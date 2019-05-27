import cuid from "cuid";
export const cuidFn = cuid;

export default function rootReducer(
  state = {
    games: [],
    game: [],
    like: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { ...state, games: action.games };
    case "SET_GAME":
      return {
        ...state,
        games: action.games,

        ...state,
        game: action.game
      };
    case "ADD_LIKE":
      return {
        ...state,
        like: [...state.like, action.like]
      };
    case "GET_LIKES":
      return {
        ...state,
        like: [...state.like, action.like]
      };

    default:
      return state;
  }
}
