import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <header className="header">
          <i className="fas fa-shopping-cart"></i>
          Shopping List
        </header>
        <div className="navCount">
          Quantity of shopping items :
          <span className="navbarCount">{this.props.totalCount}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
