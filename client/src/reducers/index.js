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
      return { games: action.games };

    case "ADD_LIKE":
      const like = { game: action.game, count: action.count, id: cuidFn() };
      return { ...state.like, like };
    default:
      return state;
  }
}
