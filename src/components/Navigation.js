import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar id="navigation_bar" expand="lg">
              <Navbar.Brand href="#home" style={{ color: "white" }}>
                <AccountBalanceIcon fontSize="large" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    style={{ width: "350px" }}
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>

                <Nav className="mr-auto">
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/live"
                    style={{
                      color: "white",
                      "margin-left": "20%",
                      fontSize: "22px",
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/live"
                    style={{
                      color: "white",
                      "margin-left": "20%",
                      fontSize: "22px",
                    }}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/live"
                    style={{
                      color: "white",
                      "margin-left": "20%",
                      fontSize: "22px",
                    }}
                  >
                    Books
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/live"
                    style={{
                      color: "white",
                      "margin-left": "20%",
                      fontSize: "22px",
                    }}
                  >
                    ContactUs
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to="/live"
                    style={{
                      color: "white",
                      "margin-left": "20%",
                    }}
                  >
                    <ShoppingCartIcon fontSize="large" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
