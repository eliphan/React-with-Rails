import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <p>Which Video Games Are Most Popular Right Now?</p>
        <Link to="/all">
          <button className="css-button">Click here to find out</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
