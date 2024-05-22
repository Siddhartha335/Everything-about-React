import React from "react";
import "./App.css";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <>
      <h1>Healthy foods</h1>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
