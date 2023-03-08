import React from "react";
import Pizza from "./Pizza"
import pizzas from "../data/pizzas.json";

const App = () => {
  //   return <div>Hello</div>;
  return (
    <ul>
      {pizzas.map((pizza) => {
        return <Pizza key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
};

export default App;
