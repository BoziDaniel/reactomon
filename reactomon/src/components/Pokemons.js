import React, { Component } from "react";
import Pokemon from "./Pokemon";

const Pokemons = (props) => {
  return this.props.pokemons.map((pokemon) => (
    <React.Fragment>
      <li>
        <Pokemon
          getId={this.props.getId}
          getData={this.props.getPokemonData}
          pokemon={pokemon}
        />
      </li>
    </React.Fragment>
  ));
};

export default Pokemons;
