import React from "react";
import ReactDOM from "react-dom";

//JSX
function MyApp() {
  return (
    <ul>
      <li>Buy Juice</li>
      <li>Walk Dog</li>
      <li>Laith</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
