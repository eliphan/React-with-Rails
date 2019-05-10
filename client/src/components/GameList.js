import React from "react";
import GameCard from "./GameCard";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";

const GameList = props => {
  return (
    <div className="ui container">
      <h1>GAMES</h1>
      {props.games.map((game, index) => (
        <div className="ui container" key={index}>
          <Card.Group centered itemsPerRow="2">
            <Card>
              <Card.Content>
                <Card.Header>{game.name}</Card.Header>
                <Image
                  fluid
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  rounded
                />
                <Card.Description>{game.summary}</Card.Description>
                <br />
                <Button fluid color="blue" onClick={() => <GameCard />}>
                  Game Details
                </Button>
              </Card.Content>
              <Card.Content extra>
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
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      ))}
    </div>
  );
};

export default GameList;
