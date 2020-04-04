import React from "react";
import Type from "./Type";
const Types = (props) => {
  return props.types.map((type) => (
    <React.Fragment>
      <ul>
        <li>
          <Type type={type} />
        </li>
      </ul>
    </React.Fragment>
  ));
};

export default Types;
