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
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
          props.cover.image_id
        }.jpg`}
        centered
      />
      <Divider />
      <br />
      {props.screenshots.map((sc, id) => (
        <div key={id}>
          <Image
            centered
            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${
              sc.image_id
            }.jpg`}
          />
        </div>
      ))}
      <Divider />
      <div>
        Rating: {props.game.aggregated_rating}/100
        <br />
        Platforms:{" "}
        {props.platforms.map((p, id) => (
          <span key={id}>{p.abbreviation} </span>
        )) || []}
        <br />
        Genre:{" "}
        {props.genres.map((g, id) => (
          <span key={id}>{g.name} </span>
        ))}
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
