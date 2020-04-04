import React, { Component } from "react";
import { Link } from "react-router-dom";
const Pokemon = (props) => {

  const { name, url } = props.pokemon;
  const id = url.substring(url.lastIndexOf("/") - 1)[0];
  const link = "/pokemon/" + id;
  const data = props.getData;
  return (
    <p>
      {name} :{" "}
      <Link to={link} pokeData={data} pokemon={props.pokemon}>
        <button>details</button>
      </Link>
    </p>
  );
};
export default Pokemon;
