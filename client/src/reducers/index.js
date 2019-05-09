export default function combineReducers(
  state = {
    games: [],
    selectedGames: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { games: action.games };

    default:
      return state;
  }
}
