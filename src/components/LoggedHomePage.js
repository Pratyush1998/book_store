import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import homepage from "./images/homepage.jpg";
import LoginModal from "./LoginModal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./All.css";

class LoggedHomePage extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: "5px" }}>
          <Col lg={9} style={{ paddingRight: "1px" }}>
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
          <Col
            lg={3}
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: "0px",
              }}
            >
              <h3>Hello, Welcome to your customized Page</h3>
              <br />
              <h5>Please enjoy books for your Course</h5>
            </div>
          </Col>
        </Row>
        <div id="featured_books">
          <h4>Recommended books for Your Course</h4>
        </div>
        <div id="featured_books_options">
          <Row style={{ marginBottom: "60px" }}>
            <Col lg={3} sm={6}>
              <div className="bookGrid columns">
                <div className="images">
                  <Image
                    src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                    alt="Algorithms"
                    rounded
                  />
                </div>
                <h5>Algorithms</h5>

                <div class="middle">
                  <NavLink to="/books">
                    <Button variant="outline-info" size="lg">
                      View books
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="bookGrid columns">
                <div className="images">
                  <Image
                    src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                    alt="Algorithms"
                    rounded
                  />
                </div>
                <h5>Algorithms</h5>

                <div class="middle">
                  <NavLink to="/books">
                    <Button variant="outline-info" size="lg">
                      View books
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="bookGrid columns">
                <div className="images">
                  <Image
                    src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                    alt="Algorithms"
                    rounded
                  />
                </div>
                <h5>Algorithms</h5>

                <div class="middle">
                  <NavLink to="/books">
                    <Button variant="outline-info" size="lg">
                      View books
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="bookGrid columns">
                <div className="images">
                  <Image
                    src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                    alt="Algorithms"
                    rounded
                  />
                </div>
                <h5>Algorithms</h5>

                <div class="middle">
                  <NavLink to="/books">
                    <Button variant="outline-info" size="lg">
                      View books
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LoggedHomePage;
