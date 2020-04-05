import React, { Component } from "react";
import { Link } from "react-router-dom";
const Pokemon = (props) => {
  const { name, url } = props.pokemon;
  const id = url.substring(url.lastIndexOf("/") - 1)[0];
  const link = "/pokemon/" + id;
  const data = props.getData;
  const card = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    width: "120px",
  };
  return (
    <div style={card}>
      <h4>
        <b> {name}</b>
      </h4>
      <p>
        <Link to={link} pokeData={data} pokemon={props.pokemon}>
          <button>details</button>
        </Link>
      </p>
    </div>
  );
};
export default Pokemon;
