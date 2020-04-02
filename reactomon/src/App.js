import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import Pokemon from "./components/Pokemon"

class App extends Component {
  state = {
    pokemons: []
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      console.log(res.data.results);
      this.setState({ pokemons: res.data.results });
    });
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
                  <Pokemons pokemons = {this.state.pokemons} />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
