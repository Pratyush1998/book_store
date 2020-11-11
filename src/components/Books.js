import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import homepage from '../components/images/algorithms.jpg'
import cosmos from '../components/images/cosmos.jpg'

class Books extends Component {
  
  render() {
    var imageName = require('./images/algorithms.jpg');
    return (
      <div>
        Books
        <br />
        {LibraryBooks.map((props, src) => {
            return  <img src={props.src} alt = {props.alt} width={200} height={200}/>
        })}
      </div>
    );
  }
}

export default Books;
