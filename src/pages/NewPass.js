import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
export default function Forgot() {
    const accessToken =
    window.location.search.split("=")[0] === "?token"
      ? window.location.search.split("=")[1]
      : null;
  const [input, setInput] = useState("");
  const [state, setState] = useState("");
    const [token, setToken] = useState(accessToken)
    console.log(token,"aaaaaa")
  const history = useHistory()
  
  if (accessToken == null) history.push('/')
  
  
  useEffect(() => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }, [])

  const getNewPass = async() => {
    if(input){
        const resp = await fetch("https://127.0.0.1:5000/new-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"password" : input,
                                  "token": token
                                  })
          });
    if (resp.ok){
        const data = await resp.json()
        history.push('/login')
    }
    }  
  }

  const handelChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handelSubmit = e => {
    e.preventDefault();
    getNewPass()
  };
  return (
    <Form
      className="container"
      onSubmit={e => handelSubmit(e)}
      onChange={e => handelChange(e)}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name="password" />
        <Form.Text className="text-muted">Input your new Password</Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
