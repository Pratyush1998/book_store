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
import Books from "./Books";
import ContactUs from "./ContactUs";
import About from "./About";
import Cart from "./Cart";
import Checkout from "./Checkout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./All.css";
import LoggedHomePage from "./LoggedHomePage";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      searchField: "",
      loggedInUser: false,
    };
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.changeHomePage = this.changeHomePage.bind(this);
  }
  delete(id) {
    console.log("exexcuting delete in navigation");
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((el) => el !== id),
    }));
  }

  add(id) {
    console.log("adding item in navigation");
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.concat(id),
    }));
  }

  searchBar() {
    return (e) => console.log(e.target.value);
  }

  changeHomePage() {
    console.log("aa");
    this.setState({
      loggedInUser: true,
    });
  }

  renderhomepage = () => {
    if (this.state.loggedInUser == false) {
      return <Home change={this.changeHomePage} />;
    } else {
      return <LoggedHomePage />;
    }
  };

  render() {
    console.log(this.state);
    console.log(this.state.searchField);
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
                    onChange={(e) =>
                      this.setState({ searchField: e.target.value })
                    }
                  />
                  <NavLink to="/books">
                    <Button variant="outline-light" size="sm">
                      Search
                    </Button>
                  </NavLink>
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
              <Route exact path="/" render={this.renderhomepage} />
              <Route
                path="/about"
                render={() => (
                  <About input_prop="This is an input prop to about tab" />
                )}
              />
              <Route
                path="/books"
                render={() => (
                  <Books
                    add={this.add}
                    remove={this.delete}
                    items={this.state}
                    input_prop="This is an input prop to books tab"
                  />
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
                render={() => <Cart action={this.delete} items={this.state} />}
              />
              <Route path="/checkout" render={() => <Checkout></Checkout>} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
