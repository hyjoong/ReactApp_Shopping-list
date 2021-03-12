import React, { Component } from "react";
import Shopping from "./shopping";
import ShoppingAddForm from "./shoppingAddForm";

class Shoppings extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.item.map((item) => (
            <Shopping
              key={item.id}
              shoppingData={item}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="shoppings-reset" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Shoppings;
