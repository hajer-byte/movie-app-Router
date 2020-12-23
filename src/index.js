import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function MovieApp() {
  return <App />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<MovieApp />, rootElement);
