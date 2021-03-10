import React from "react";
import "./app.css";
import Shoppings from "./components/shoppings";

function App() {
  return (
    <>
      <section className="list">
        <header className="header" />
        <ul className="items">
          <Shoppings />
        </ul>
      </section>
    </>
  );
}

export default App;
