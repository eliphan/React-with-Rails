import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Header } from "semantic-ui-react";

const GameList = props => {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        ALL GAMES
      </Header>
      {props.games.map(game => (
        <div className="card-deck" key={game.id}>
          <Card.Group centered itemsPerRow="3">
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link key={game.id} to={`/games/${game.id}`}>
                    {game.name}
                  </Link>
                </Card.Header>
                <Image
                  src={`https://images.igdb.com/igdb/image/upload/t_1080p/${
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
