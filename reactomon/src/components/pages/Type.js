import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Type extends Component {
  render() {
    const { name, url } = this.props.type;
    const id = url.substring(url.lastIndexOf("/") - 1)[0];
    const link = "/type/" + id;

    return (
      <React.Fragment>
        <p>
          {name} :{" "}
          <Link to={link}>
            <button>details</button>
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

export default Type;
