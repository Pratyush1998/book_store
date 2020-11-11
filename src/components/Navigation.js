import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./All.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from "./Books";
import ContactUs from "./ContactUs";
import About from "./About";
import Cart from "./Cart";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [2, 3]
    }
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar id="navigation_bar" expand="lg">
              <Navbar.Brand style={{ color: "white" }}>
                <AccountBalanceIcon fontSize="default" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    size="sm"
                    style={{ width: "350px" }}
                  />
                  <Button variant="outline-light" size="sm">
                    Search
                  </Button>
                </Form>

                <Nav className="mr-auto">
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/"
                    exact
                    style={{
                      color: "white",
                      "margin-left": "10%",
                      fontSize: "17px",
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/about"
                    style={{
                      color: "white",
                      "margin-left": "10%",
                      fontSize: "17px",
                    }}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/books"
                    style={{
                      color: "white",
                      "margin-left": "10%",
                      fontSize: "17px",
                    }}
                  >
                    Books
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/contact_us"
                    style={{
                      color: "white",
                      "margin-left": "10%",
                      fontSize: "17px",
                    }}
                  >
                    ContactUs
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/cart"
                    style={{
                      color: "white",
                      "margin-left": "10%",
                    }}
                  >
                    <ShoppingCartIcon fontSize="default" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route
                path="/about"
                render={() => (
                  <About input_prop="This is an input prop to about tab" />
                )}
              />
              <Route
                path="/books"
                render={() => (
                  <Books input_prop="This is an input prop to books tab" />
                )}
              />
              <Route
                path="/contact_us"
                render={() => (
                  <ContactUs input_prop="This is an input prop to contact us tab" />
                )}
              />
              <Route
                path="/cart"
                render={() => (
                  <Cart items={this.state.cartItems} />
                )}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
