import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const [data, setData] = useState(" ");
  const getPokemonId = () => {
    const {
      match: {
        params: { id },
      },
    } = props;
    return id;
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${getPokemonId()}/`)
      .then((res) => setData(res.data));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default PokemonDetail;
