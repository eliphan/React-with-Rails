export default function combineReducers(
  state = {
    games: [],
    game: [],
    covers: [],
    likes: 0
  },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { games: action.games };
    case "FETCH_COVERS":
      return { covers: action.covers };
    case "INCREASE_LIKES":
      return { likes: state.likes + 1 };
    default:
      return state;
  }
}
