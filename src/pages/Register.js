import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
export default function Register() {
  const [input, setInput] = useState({});
  const [validated, setValidated] = useState(false);
  const handelOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
  };
  console.log(input)
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "50px" }}>
        <Form noValidate validated={validated} onSubmit={(event)=>handleSubmit(event)} onChange={(e)=>handelOnChange(e)}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Full Name"
                name = "name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Description"
                name = 'desc'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Avata URL</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">URL</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Avata URL"
                  aria-describedby="inputGroupPrepend"
                  required
                  name = 'avata_url'
                />
                <Form.Control.Feedback type="invalid">
                  Please insert your avata URL
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" name='phone' required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Password</Form.Label>
              <Form.Control type="new-password" placeholder="Password" name="password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="new-password" placeholder="Confirm Password" name="confirm" required />
              <Form.Control.Feedback type="invalid">
                Please provide a right password.
              </Form.Control.Feedback>
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
    </div>
  );
}
