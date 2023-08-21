import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Namaste React🍲"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);