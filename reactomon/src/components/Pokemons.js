import React, { Component } from "react";
import Pokemon from "./Pokemon";

export class Pokemons extends Component {
  render() {
    return this.props.pokemons.map(pokemon => (
      <React.Fragment>
        <div>
          <Pokemon pokemon = {pokemon}/>
        </div>
      </React.Fragment>
    ));
  }
}

export default Pokemons;
//name={pokemon.name} url={pokemon.url} key={pokemon.url}