import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Form, Button } from "react-bootstrap";
export default function Login() {
  const [input, setInput] = useState({});
  const [currentUser, setCurrentUser] = useState({email: "",
                            name: "", 
                            desc: "", 
                            avata_url: "", 
                            phone: "", 
                            course_id: "",
                            ecourse_id: ""                                                 
});

  const handelOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const postUser = async () => {
    const resp = await fetch("https://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...input })
    });
    const data = await resp.json()
    setCurrentUser({email: data.email,
                    name: data.name, 
                    desc: data.desc, 
                    avata_url: data.avata_url, 
                    phone: data.phone 
    })
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    postUser();
  };

  console.log(currentUser)
  return (
    <div>
      <Navbar />
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
