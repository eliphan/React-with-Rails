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
        games: state.games,
        game: { ...state.game, game: action.game }
      };
    case "ADD_LIKE":
      return {
        ...state.like,
        like: action.like
        // game_id: action.game_id,
        // like_count: action.like_count
      };
    case "GET_LIKES":
      return {
        ...state,
        like: action.like
      };

    default:
      return state;
  }
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
