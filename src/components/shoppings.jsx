import React, { Component } from "react";
import Shopping from "./shopping";

class Shoppings extends Component {
  state = {
    shoppings: [
      { name: "Apple", count: 0 },
      { name: "Banana", count: 0 },
      { name: "Kiwi", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.shoppings.map((item) => (
          <Shopping shoppingData={item} />
        ))}
      </ul>
    );
  }
}

export default Shoppings;
