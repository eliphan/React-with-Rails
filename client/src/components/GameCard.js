import React from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import StarRating from "./StarRating";

const GameCard = props => {
  console.log(props);
  return (
    <div className="ui container">
      <h1>{props.game.name}</h1>
      <Image
        alt="An example alt"
        centered
        size="large"
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
      />
      <div>
        Rating:
        <StarRating rating={props.game.aggregated_rating} />
        {props.game.aggregated_rating}/100
        <Divider />
        {props.game.summary}
        <br />
      </div>
      <Divider />
      <div className="ui buttons">
        <Button color="red" onClick={props.onClick}>
          <Icon name="heart" />
          Like
        </Button>
        <Button basic color="red">
          {props.likes}
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
