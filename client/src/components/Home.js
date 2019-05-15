import React from "react";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="ui container">
      <p>Select a genre</p>
      <Button primary href="/all">
        All genres
      </Button>
      <Button primary href="rpg">
        RPG (WIP)
      </Button>

      <Button primary>WIP</Button>
    </div>
  );
};

export default Home;
