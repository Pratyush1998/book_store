import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./map.css";
import "./All.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      time: new Date().toLocaleString(),
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validated: true,
    });
  };
  render() {
    return (
      <div>
        <Row style={{ marginBottom: "60px", marginTop: "20px" }}>
          <Col lg={6}>
            <p>
              <strong>Phone Number:</strong> 905-525-9140
            </p>
            <p>
              <strong>Address:</strong> 1280 Main Street West Hamilton, ON L8S
              4L6
            </p>
            <h3>Library Timings (EST):</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>24 Hours</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>24 Hours</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>24 Hours</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>24 Hours</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>24 Hours</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00am to 9:00pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>11:00am to 7:00pm</td>
                </tr>
              </tbody>
            </Table>
            <h6>Current Time : {this.state.time}</h6>
          </Col>
          <Col lg={6} style={{ backgroundColor: "rgb(220,220,220)" }}>
            <div id="form">
              <h3>Queries</h3>
              <br />
              For any other questions, comments or clarifications, please fill
              out the form underneath:
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Contact Number"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <div style={{ marginBottom: "110px", marginTop: "20px" }}>
          <h4>Come Visit Us</h4>
          <img
            src="https://i.ibb.co/tchv92D/Microsoft-Teams-image.png"
            alt="Microsoft-Teams-image"
            border="0"
          />
        </div>
      </div>
    );
  }
}

export default ContactUs;
