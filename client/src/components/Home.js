import React from "react";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <p>Select a genre</p>
      <Button primary href="/all">
        All genres
      </Button>
      <Button primary href="rpg">
        RPG
      </Button>

      <Button primary>Primary</Button>
    </div>
  );
};

export default Home;
