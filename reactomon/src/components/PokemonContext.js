import React, { useState,  createContext } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  

  return (
    <PokemonContext.Provider
      pokemons={[pokemons, setPokemons]}
      types={[types, setTypes]}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
