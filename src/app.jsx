import React, { Component } from "react";
import Shoppings from "./components/shoppings";
import "./app.css";
import Navbar from "./components/navbar";
import ShoppingAddForm from "./components/shoppingAddForm";

class App extends Component {
  state = {
    shoppings: [
      { id: 1, name: "Apple", count: 3 },
      { id: 2, name: "Banana", count: 5 },
      { id: 3, name: "Kiwi", count: 10 },
    ],
  };
  handleIncrement = (shoppingData) => {
    const tmpArr = [...this.state.shoppings];
    const idx = tmpArr.indexOf(shoppingData);
    tmpArr[idx].count += 1;
    this.setState({ shoppings: tmpArr });
  };

  handleDecrement = (shoppingData) => {
    const tmpArr = [...this.state.shoppings];
    const idx = tmpArr.indexOf(shoppingData);
    const count = tmpArr[idx].count - 1;
    tmpArr[idx].count = count < 0 ? 0 : count;
    this.setState({ shoppings: tmpArr });
  };

  handleDelete = (shoppingData) => {
    const tmpArr = this.state.shoppings.filter(
      (item) => item.id !== shoppingData.id
    );
    this.setState({ shoppings: tmpArr });
  };

  handleAdd = (name) => {
    const tmpArr = [
      ...this.state.shoppings,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({ shoppings: tmpArr });
  };

  handleReset = () => {
    const tmpArr = this.state.shoppings.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({   shoppings: tmpArr });
  };

  render() {
    return (
      <>
        <section className="list">
          <Navbar
            totalCount={
              this.state.shoppings.filter((item) => item.count > 0).length
            }
          />
          <ul className="items">
            <Shoppings
              item={this.state.shoppings}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
            />
          </ul>
          <ShoppingAddForm onAdd={this.handleAdd} />
        </section>
      </>
    );
  }
}

export default App;
