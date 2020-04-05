import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import Types from "./components/pages/Types";
import PokemonDetail from "./components/pages/PokemonDetail";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);


  const theme1 = {
    font: 'sans-serif',
    background: "yellow",
    color: 'black',

  };

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

  return (
    <ThemeProvider theme = {theme1}>
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
                      getId={getId}
                      getPokemonData={getPokemonData}
                      pokemons={pokemons}
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
    </ThemeProvider>
  );
};

export default App;
