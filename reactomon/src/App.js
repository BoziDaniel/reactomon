import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import Types from "./components/pages/Types";
import PokemonDetail from "./components/pages/PokemonDetail";

class App extends Component {
  state = {
    pokemons: [],
    types: [],
    pokemonData: []
  };

  getPokemonData = (url)=>axios.get(url).then(resp=>{return resp.data})
  getId= url => url.substring(url.lastIndexOf('/') -1)[0];
  
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      this.setState({ pokemons: res.data.results });
      axios.get("https://pokeapi.co/api/v2/type").then(res => {
        this.setState({ types: res.data.results });
      });
    });
    const pokemons = this.state.pokemons;
    pokemons.map(pokemon =>
      axios.get(pokemon.url).then(res => (pokemon.details = res))
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar />
            <Route
              exact
              path="/pokemons"
              render={props => (
                <React.Fragment>
                  <ul>
                    <Pokemons getId = {this.getId} getPokemonData={this.getPokemonData} pokemons={this.state.pokemons} />
                  </ul>
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/types"
              render={props => (
                <React.Fragment>
                  <Types types={this.state.types} />
                </React.Fragment>
              )}
            />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
            
            
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
