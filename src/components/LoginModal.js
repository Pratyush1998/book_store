import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
      <Modal.Body>
        *This is not user authenticated, so any username and password will work*
        <NavLink to="/">
          <Button onClick={props.onChange}>Login</Button>
        </NavLink>
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
