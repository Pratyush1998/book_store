import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import homepage from "./images/homepage.jpg";
import "./All.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={9}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={homepage}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={3}>Hello</Col>
        </Row>
        <div id="featured_books">
          <h5>Featured books for your course</h5>
        </div>
        <div id="featured_books_options">
          <Row>
            <Col lg={3} md={6}>
              Book1
            </Col>
            <Col lg={3} md={6}>
              Book2
            </Col>
            <Col lg={3} md={6}>
              Book3
            </Col>
            <Col lg={3} md={6}>
              Book4
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
