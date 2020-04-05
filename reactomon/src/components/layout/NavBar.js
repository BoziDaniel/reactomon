import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '../../elements/Button'
const NavBar = (props) => {
 
  return (
    <header style={headerStyle}>
      <h1>Reactomon</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>
      <Button>I do nothin</Button>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default NavBar;
