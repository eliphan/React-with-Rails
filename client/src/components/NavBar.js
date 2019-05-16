import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Icon } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        activeStyle={{
          color: "gray"
        }}
      >
        <Icon name="home" size="small" /> Home
      </NavLink>
    </div>
  );
};

export default NavBar;
