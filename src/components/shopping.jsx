import React, { Component } from "react";
import { BsFillPlusCircleFill } from "react-icons/io";

class Shopping extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (e) => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    //const shoppingName =
    const { name, count } = this.props.shoppingData;
    return (
      <li className="shopping">
        <span className="shopping-name">{name}</span>
        <span className="shopping-count">{count}</span>
        <button
          className="shopping-button shopping-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="shopping-button shopping-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="shopping-button shopping-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Shopping;
