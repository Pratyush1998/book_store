import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./All.css";
class Books extends Component {


  add(id) {
    this.props.add(id)
  }

  remove(id) {
    this.props.remove(id)
  }
  render() {
    return (
      <div>
        Books
        <br />
        <Container>
          <Row>
            {LibraryBooks.map((props, index) => {
              if (this.props.items.cartItems.includes(props.id)) {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <p>{props.name}</p>

                      <div class="middle">
                        <button class="reserveButton" onClick={this.remove.bind(this, props.id)}>Remove From Cart</button>
                      </div>

                    </div>
                  </Col>
                )
              }
              else {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <p>{props.name}</p>

                      <div class="middle">
                        <button class="reserveButton" onClick={this.add.bind(this, props.id)}>Add To Cart</button>
                      </div>

                    </div>
                  </Col>
                )

              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
