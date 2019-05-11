import React from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";

const GameCard = props => {
  console.log(props);
  return (
    <div className="ui container">
      <h1>Card</h1>
      <h3>{props.game.name}</h3>
      <div className="ui buttons">
        <Button as="div" labelPosition="left">
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            2,048
          </Label>
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
