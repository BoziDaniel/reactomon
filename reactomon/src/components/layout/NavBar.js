import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Reactomon</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        {" "}|{" "}
        <Link style={linkStyle} to="/types">
          Types
        </Link>
        {" "}|{" "}
        <Link style={linkStyle} to="/pokemons">
          Pokemons
        </Link>
      </header>
    );
  }
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
export default NavBar;
