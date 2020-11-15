import React from "react";
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

function Home(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Row>
        <Col lg={9}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={homepage} alt="First slide" />
              <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={homepage} alt="First slide" />
              <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={3}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically
          </Button>

          <LoginModal
            show={modalShow}
            onChange={props.change}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      <div id="featured_books">
        <h5>Featured Categories</h5>
      </div>
      <div id="featured_books_options">
        <Row style={{ marginBottom: "60px" }}>
          <Col lg={4} sm={6}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header
                  style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
                >
                  <div>
                    <h3>History</h3>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="images">
                      <Image
                        src="https://i.ibb.co/zFxM553/worldwar1.jpg"
                        rounded
                      />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>World War 1</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>On Liberty</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <NavLink to="/books">
                      <Button variant="outline-dark" size="sm">
                        View More
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col lg={4} sm={6}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header
                  style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
                >
                  <div>
                    <h3>Engineering</h3>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="images">
                      <Image
                        src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                        rounded
                      />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Book1</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Book2</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <NavLink to="/books">
                      <Button variant="outline-dark" size="sm">
                        View More
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

          <Col lg={4} sm={6}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header
                  style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
                >
                  <div>
                    <h3>Engineering</h3>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="images">
                      <Image
                        src="https://i.ibb.co/4TT3Fyx/algorithms.jpg"
                        rounded
                      />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Book1</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Book2</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <NavLink to="/books">
                      <Button variant="outline-dark" size="sm">
                        View More
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
