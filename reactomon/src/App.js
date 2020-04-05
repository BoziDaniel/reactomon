import React, { useEffect, useContext } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import Types from "./components/pages/Types";
import PokemonDetail from "./components/pages/PokemonDetail";
import { ThemeProvider } from "styled-components";
import { PokemonProvider, PokemonContext } from "./components/PokemonContext";

const App = () => {
  const theme1 = {
    font: "sans-serif",
    background: "yellow",
    color: "black",
  };

  return (
    <ThemeProvider theme={theme1}>
      <PokemonProvider>
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
                      <Pokemons />
                    </ul>
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/types"
                render={(props) => (
                  <React.Fragment>
                    <Types/>
                  </React.Fragment>
                )}
              />
              <Route exact path="/pokemon/:id" component={PokemonDetail} />
            </div>
          </div>
        </Router>
      </PokemonProvider>
    </ThemeProvider>
  );
};

export default App;
