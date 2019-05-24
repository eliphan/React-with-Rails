const Like = props => {
  return props.likes
    .filter(e => e.game_id === props.gameId)
    .map(e => e.like_count)
    .reduce((sum, value) => sum + value, 0);
};

export default Like;
