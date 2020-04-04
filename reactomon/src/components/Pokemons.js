import React, { Component } from "react";
import Pokemon from "./Pokemon";

const Pokemons = (props) => {
  return props.pokemons.map((pokemon) => (
    <React.Fragment>
      <li>
        <Pokemon
          getId={props.getId}
          getData={props.getPokemonData}
          pokemon={pokemon}
        />
      </li>
    </React.Fragment>
  ));
};

export default Pokemons;
