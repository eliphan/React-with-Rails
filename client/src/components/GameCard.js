import React from "react";
import { Image, Header, Rating } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const GameCard = props => {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        {props.game.name}
      </Header>

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
        Rating: <Rating icon="star" defaultRating={3} maxRating={5} />{" "}
        {parseInt(props.game.aggregated_rating)}/100
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
    </div>
  );
};

export default GameCard;
