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
        <div className="resetBtns">
          <button
            className="shoppings-reset count"
            onClick={this.props.onReset}
          >
            Reset Count
          </button>
          <button
            className="shoppings-reset all"
            onClick={this.props.onRefresh}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
}

export default Shoppings;
