import React from "react";
import GameCard from "./GameCard";
import { Button, Card, Image, Icon, Label, Header } from "semantic-ui-react";

const GameList = props => {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        ALL GAMES
      </Header>
      {props.games.map(game => (
        <div className="card-deck" key={game.id}>
          <Card.Group centered itemsPerRow="2">
            <Card>
              <Card.Content>
                <Card.Header>{game.name}</Card.Header>
                <Image
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
                    game.cover.image_id
                  }.jpg`}
                  fluid
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
