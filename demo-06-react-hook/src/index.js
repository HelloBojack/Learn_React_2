import React from "react";
import ReactDOM from "react-dom";

import Example01 from "./Example01";
import Example02 from "./Example02";

function ExampleGroup() {
  return (
    <div>
      <Example01></Example01>
      <Example02></Example02>
    </div>
  );
}
ReactDOM.render(<ExampleGroup></ExampleGroup>, document.getElementById("root"));
