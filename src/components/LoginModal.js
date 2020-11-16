import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import TextField from "@material-ui/core/TextField";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "rgb(122, 0, 60)", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center", justifyContent: "center" }}>
        *This is not user authenticated, so any username and password will work*
        <div
          style={{
            display: "inline-block",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "left",
          }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Username
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default" type="password">
                Password
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <form autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
          </form>
        </div>
        <br />
        <Button onClick={props.differentName}>Login</Button>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(122, 0, 60)" }}>
        <Button variant="outline-light" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
