import React from "react";
import GameCard from "./GameCard";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";

const GameList = props => {
  return (
    <div className="ui container">
      <h1>GAMES</h1>
      {props.games.map(game => (
        <div className="card-deck" key={game.id}>
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
                <Button
                  fluid
                  color="blue"
                  key={game.id}
                  href={`/games/${game.id}`}
                >
                  Game Details
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      ))}
    </div>
  );
};

export default GameList;
