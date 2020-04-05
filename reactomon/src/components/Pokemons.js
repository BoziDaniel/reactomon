import React, { useEffect, useContext } from "react";
import Pokemon from "./Pokemon";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

const Pokemons = (props) => {
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [types, setTypes] = useContext(PokemonContext);

  const getPokemonData = (url) =>
    axios.get(url).then((resp) => {
      return resp.data;
    });
  const getId = (url) => url.substring(url.lastIndexOf("/") - 1)[0];
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemons(res.data.results);
      axios.get("https://pokeapi.co/api/v2/type").then((res) => {
        setTypes(res.data.results);
      });
    });
    pokemons.map((pokemon) =>
      axios.get(pokemon.url).then((res) => (pokemon.details = res))
    );
  }, []);
  return pokemons.map((pokemon) => (
    <Pokemon
      getId={props.getId}
      getData={props.getPokemonData}
      pokemon={pokemon}
    />
  ));
};

export default Pokemons;
