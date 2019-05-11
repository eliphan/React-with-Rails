import React from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const GameCard = props => {
  console.log(props);
  return (
    <div className="ui container">
      <h1>{props.game.name}</h1>
      <p>
        Rating: {props.game.aggregated_rating}/100
        <Divider />
        {props.game.summary}
        <br />
      </p>
      <Divider />
      <div className="ui buttons">
        <Button as="div" labelPosition="left">
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
