import React, { Component } from "react";

class Books extends Component {
  render() {
    return (
      <div>
        Books
        <br />
        {this.props.input_prop}
      </div>
    );
  }
}

export default Books;
