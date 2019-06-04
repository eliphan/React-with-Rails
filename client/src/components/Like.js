import React from "react";

const Like = props => {
  return (
    <div>
      {props.likes
        .filter(e => e.game_id === props.gameId)
        .map(e => e.like_count)
        .reduce((sum, value) => sum + value, 0)}
    </div>
  );
};

export default Like;
