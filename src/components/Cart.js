import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        Cart
        <br />
        {this.props.input_prop}
      </div>
    );
  }
}

export default Cart;
