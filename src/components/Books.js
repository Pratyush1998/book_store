import React, { Component } from "react";
import LibraryBooks from "../data/LibraryBooks.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "react-bootstrap/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Rating from "@material-ui/lab/Rating";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./All.css";
import BookPreview from "./BookPreview";
import Modal from "react-bootstrap/Modal";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Engineering: true,
      Science: true,
      History: true,
      Economics: true,
      showMap: false,
      showModal: false,
      bookID: 999,
      title: ""
    };
    this.add = this.add.bind(this);
  }

  //flip the low state
  flipEngineering() {
    this.setState({ Engineering: !this.state.Engineering });
  }
  flipScience() {
    this.setState({ Science: !this.state.Science });
  }
  flipHistory() {
    this.setState({ History: !this.state.History });
  }
  flipEconomics() {
    this.setState({ Economics: !this.state.Economics });
  }

  showModal(id) {
    //TODO: Create map image modal
    this.state.bookID = id;
    this.state.title = LibraryBooks[id - 1].name
    this.setState({ showMap: true });
  }

  hideModal() {
    //TODO: Create map image modal
    this.setState({ showMap: false });
  }

  add(id) {
    this.props.add(id);
  }

  remove(id) {
    this.props.remove(id);
  }
  render() {
    var result;
    var bookID;

    const modalStyle = {
      width: "5000px",
      maxWidth: "100%",
      maxHeight: "100%",
    };

    var searchQuery = this.props.items.searchField;
    console.log(searchQuery);
    if (searchQuery === "") {
      result = LibraryBooks;
    } else {
      result = LibraryBooks;
      console.log(result);
      result = result.filter(
        (x) =>
          x.department.toUpperCase().includes(searchQuery.toUpperCase()) ||
          x.name.toUpperCase().includes(searchQuery.toUpperCase())
      );
      console.log(result);
    }
    if (!this.state.Engineering)
      result = result.filter((x) => !x.department.includes("Engineering"));
    if (!this.state.Science)
      result = result.filter((x) => !x.department.includes("Science"));
    if (!this.state.History)
      result = result.filter((x) => !x.department.includes("History"));
    if (!this.state.Economics)
      result = result.filter((x) => !x.department.includes("Economics"));

    console.log(result);
    return (
      <div style={{ marginBottom: "100px" }}>
        <Container>
          <Row>
            <Col xs={6} md={3} key="low">
              <FormControlLabel
                control={
                  <Checkbox
                    id="low"
                    checked={this.state.Engineering}
                    onChange={this.flipEngineering.bind(this)}
                  />
                }
                label="Engineering"
              />
            </Col>
            <Col xs={6} md={3} key="medium">
              <FormControlLabel
                control={
                  <Checkbox
                    id="medium"
                    checked={this.state.Science}
                    onChange={this.flipScience.bind(this)}
                  />
                }
                label="Science"
              />
            </Col>
            <Col xs={6} md={3} key="high">
              <FormControlLabel
                control={
                  <Checkbox
                    id="high"
                    checked={this.state.History}
                    onChange={this.flipHistory.bind(this)}
                  />
                }
                label="History"
              />
            </Col>

            <Col xs={6} md={3} key="critical">
              <FormControlLabel
                control={
                  <Checkbox
                    id="critical"
                    checked={this.state.Economics}
                    onChange={this.flipEconomics.bind(this)}
                  />
                }
                label="Economics"
              />
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            {result.map((props, index) => {
              if (this.props.items.cartItems.includes(props.id)) {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <h5>{props.name}</h5>
                      <Rating
                        name="half-rating-read"
                        defaultValue={props.rating}
                        precision={0.5}
                        readOnly
                      />

                      <div class="top">
                        <Button
                          variant="danger"
                          class="detailsButton"
                          onClick={this.showModal.bind(this, props.id)}
                        >
                          Show Details
                        </Button>
                      </div>
                      <Modal style={modalStyle} show={this.state.showMap}>
                        <Modal.Header
                          style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
                        >
                          <Modal.Title id="contained-modal-title-vcenter">{this.state.title}</Modal.Title>
                        </Modal.Header>
                        <BookPreview
                          add={this.add}
                          props={LibraryBooks[this.state.bookID - 1]}
                          cartItems={this.props.items.cartItems}
                        />
                        <Modal.Footer style={{ backgroundColor: "rgb(122, 0, 60)" }}>
                          <Button variant="outline-light" onClick={this.hideModal.bind(this)}>
                            Close
                        </Button>
                        </Modal.Footer>
                      </Modal>

                      <div class="middle">
                        <Button
                          variant="info"
                          class="reserveButton"
                          onClick={this.remove.bind(this, props.id)}
                        >
                          Remove From Cart
                        </Button>
                      </div>
                    </div>
                  </Col>
                );
              } else {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <h5>{props.name}</h5>
                      <Rating
                        name="half-rating-read"
                        defaultValue={props.rating}
                        precision={0.5}
                        readOnly
                      />

                      <div class="top">
                        <Button
                          variant="danger"
                          class="detailsButton"
                          onClick={this.showModal.bind(this, props.id)}
                        >
                          Show Details
                        </Button>
                      </div>
                      <Modal style={modalStyle} show={this.state.showMap}>
                        <Modal.Header
                          style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
                        >
                          <Modal.Title id="contained-modal-title-vcenter">{this.state.title}</Modal.Title>
                        </Modal.Header>
                        <BookPreview
                          add={this.add}
                          props={LibraryBooks[this.state.bookID - 1]}
                          cartItems={this.props.items.cartItems}
                        />
                        <Modal.Footer style={{ backgroundColor: "rgb(122, 0, 60)" }}>
                        <Button variant="outline-light" onClick={this.hideModal.bind(this)}>
                            Close
                        </Button>
                        </Modal.Footer>

                      </Modal>

                      <div class="middle">
                        <Button
                          variant="info"
                          class="reserveButton"
                          onClick={this.add.bind(this, props.id)}
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
