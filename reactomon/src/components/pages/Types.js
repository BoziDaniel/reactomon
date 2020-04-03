import React, { Component } from "react";
import Type from "./Type";
export class Types extends Component {
  render() {
    return this.props.types.map(type => (
      <React.Fragment>
        <ul>
          <li>
            <Type type={type} />
          </li>
        </ul>
      </React.Fragment>
    ));
  }
}

export default Types;
