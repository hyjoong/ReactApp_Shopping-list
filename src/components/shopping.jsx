import React, { Component } from "react";
import { BsFillPlusCircleFill } from "react-icons/io";

class Shopping extends Component {
  render() {
    //    console.log(this.props.shoppingData);
    const { name, count } = this.props.shoppingData;

    return (
      <li className="shopping">
        <span className="shopping-name">{name}</span>
        <span className="shopping-count">{count}</span>
        <button
          className="shopping-button shopping-increase"
          onClick={() => {
            this.props.onIncrement(this.props.shoppingData);
          }}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="shopping-button shopping-decrease"
          onClick={() => {
            this.props.onDecrement(this.props.shoppingData);
          }}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="shopping-button shopping-delete"
          onClick={() => {
            this.props.onDelete(this.props.shoppingData);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Shopping;
