import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function LoginModal(props) {
  const [validated, setValidated] = React.useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      props.differentName();
    }
    setValidated(true);
  };

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
        <br />
        <div
          style={{
            display: "inline-block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <h5>Username</h5>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Username"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <h5>Password</h5>
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button type="submit">Login</Button>
          </Form>
        </div>
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
