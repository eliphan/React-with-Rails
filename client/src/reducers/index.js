export default function combineReducers(
  state = {
    games: [],
    game: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { games: action.games };
    case "GET_GAME":
      return { ...state.game, [action.game.id]: action.game };
    case "CREATE_GAME":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
