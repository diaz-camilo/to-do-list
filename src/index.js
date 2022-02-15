// In index.js
import React from "react";
import ReactDOM from "react-dom";
import MyList from "./MyList";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const toDos = [
  { isChecked: false, name: "Buy Ice-cream" },
  { isChecked: false, name: "Open Ice-cream" },
  { isChecked: false, name: "Eat Ice-cream" },
];

ReactDOM.render(<MyList theList={toDos} />, document.getElementById("root"));
