import React, { Component, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import Types from "./components/pages/Types";
import PokemonDetail from "./components/pages/PokemonDetail";
import useHttp from "./hooks/http";

const App = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  setPokemons(useHttp("https://pokeapi.co/api/v2/pokemon", []));

  setTypes(useHttp("https://pokeapi.co/api/v2/type"), []);

  const getPokemonData = (url) =>
    axios.get(url).then((resp) => {
      return resp.data;
    });

  const getId = (url) => url.substring(url.lastIndexOf("/") - 1)[0];

  setPokemons(
    pokemons.map((pokemon) =>
      axios.get(pokemon.url).then((res) => (pokemon.details = res))
    )
  );
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavBar />
          <Route
            exact
            path="/pokemons"
            render={(props) => (
              <React.Fragment>
                <ul>
                  <Pokemons
                    getId={this.getId}
                    getPokemonData={this.getPokemonData}
                    pokemons={this.state.pokemons}
                  />
                </ul>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/types"
            render={(props) => (
              <React.Fragment>
                <Types types={types} />
              </React.Fragment>
            )}
          />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
        </div>
      </div>
    </Router>
  );
};

export default App;
