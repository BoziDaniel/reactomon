import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = { data: [] };
  getPokemonId = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return id;
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.getPokemonId()}/`)
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    const abilities = this.state.data.abilies;
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default PokemonDetail;
