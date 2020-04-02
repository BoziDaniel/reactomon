import React, { Component } from "react";

export class Pokemon extends Component {
    
  render() {
      const {name, url} = this.props.pokemon
    return (
      <div className="pokemon">
        <React.Fragment>
          <p>{name}</p>
          <a href {...url}>{url}</a>
        </React.Fragment>
      </div>
    );
  }
}
export default Pokemon;
