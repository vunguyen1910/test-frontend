import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import { Form, Button } from "react-bootstrap";
import {Redirect, useHistory} from 'react-router-dom'
export default function Login() {
  const [input, setInput] = useState({});
  const [userExits, setUserExits] = useState(localStorage.getItem('token'))
  const [currenUser, setCurrenUser] = useState({})
  const history = useHistory()

  const checkUserExits = () => {
    if (userExits){
      return history.push("/")
    }
  }
  const handelOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const postUser = async () => {
    const resp = await fetch("https://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    });
    const data = await resp.json()
    setCurrenUser(data)
    localStorage.setItem('token', data.token)
    history.push("/")
  };
  const handleSubmit = e => {
    e.preventDefault()
    postUser();
  };
  checkUserExits()
  return (
    <div>
      <Navbar currenUser={currenUser}/>
      <div
        className="text-center container w-50"
        style={{ marginTop: "100px" }}
      >
        <Form
          onChange={e => {
            handelOnChange(e);
          }}
          onSubmit={e => handleSubmit(e)}
        >
          <img
            className="mb-4"
            src={require("../img/login.png")}
            alt=""
            width="72"
            height="72"
          />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="pass" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
