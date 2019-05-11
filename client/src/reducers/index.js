export default function combineReducers(
  state = {
    games: [],
    game: []
  },
  action
) {
  let covers;
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { games: action.games };
    case "FETCH_COVERS":
      return { ...state.games }.concat(covers);
    case "GET_GAMES":
      return { games: action.games };
    case "CREATE_GAME":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
