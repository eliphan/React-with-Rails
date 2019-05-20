import React from "react";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <p>Select a genre</p>
        <Link to="/all">
          <button className="css-button">All genres</button>
        </Link>
        <button className="css-button">RPG (WIP)</button>
        <button className="css-button">WIP</button>
      </div>
    </div>
  );
};

export default Home;
