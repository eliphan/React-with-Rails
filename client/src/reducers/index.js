import cuid from "cuid";
export const cuidFn = cuid;

export default function rootReducer(
  state = {
    games: [],
    game: [],
    like: [],
    count: 0
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
    case "INCREASE_COUNT":
     const count = { count: action.count };
     return {...state.count, count: state.count + 1 }
    default:
      return state;
  }
}
