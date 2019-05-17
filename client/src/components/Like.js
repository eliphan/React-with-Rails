import React from "react";
import GameCard from "./GameCard";
import { Button, Card, Image, Icon, Label, Header } from "semantic-ui-react";

const Like = props => {
  return (
    <div>
      {props.likes.map((like,id) => {
        if(like.game_id === props.gameId)
          return <div key={id}>{like.like_count}</div>
        }
      )}
    </div>
  )
}

export default Like;