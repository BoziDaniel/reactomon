import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Pokemon extends Component {
  //  getData= (url)=>axios.get(url).then(res=>this.setState({pokemonData: res.data}))

  render() {
    const { name, url } = this.props.pokemon;
    const id = url.substring(url.lastIndexOf("/") - 1)[0];
    const link = "/pokemon/" + id;
    const data = this.props.getData;
    return (
      <p>
        {name} :{" "}
        <Link to={link} pokeData={data} pokemon={this.props.pokemon}>
          <button>details</button>
        </Link>
      </p>
    );
  }
}
export default Pokemon;
