import React from "react";
import { Button, Container } from "semantic-ui-react";
import "../index.css";

const Home = () => {
  return (
    <div className="home-container">
      <Container fluid>
        <p>Select a genre</p>
        <Button primary href="/all">
          All genres
        </Button>
        <Button primary href="rpg">
          RPG (WIP)
        </Button>

        <Button primary>WIP</Button>
      </Container>
    </div>
  );
};

export default Home;
