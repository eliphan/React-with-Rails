import React from "react";

const GameCard = props => {
  return (
    <div>
      <h1>GAMES</h1>
      {props.games.map((game, index) => (
        <div key={game.id}>
          <ul>
            <li>
              <h3>{game.name}</h3>

              <p>{game.summary}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
