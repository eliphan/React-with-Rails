export default function rootReducer(
  state = {
    games: [],
    game: [],
    likes: 0
  },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return { ...state, loading: true };
    case "FETCH_GAMES":
      return { games: action.games };

    case "INCREASE_LIKES":
      return { likes: state.likes + 1 };
    default:
      return state;
  }
}
