import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Register(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [subject, setSubject] = useState("None");
  const [desc, setDesc] = useState("");
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState('')

  const history = useHistory()
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      event.preventDefault()
      setValidated(true);
      postCourse();
    }

  };
  const postCourse = async() => {
      const resp = await fetch('https://127.0.0.1:5000/course/create-post',{
          method : 'POST',
          headers:{
            Authorization: localStorage.getItem('token'),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              'name': name,
              'img' : img,
              'desc': desc,
              'subject': subject
          })
      } 
      )
      if (resp.ok){
        const data = await resp.json()
        if (data.success){
          setState('You has posted the course')
        }
        else setState('You hasnt posted the course')
      }
      else alert('False to post')
  }

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <p style={{color: 'red'}}>{state}</p>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Name of your course</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please input your course's name"
            onChange={e => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            You must insert your course's name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Image of your course</Form.Label>
          <Form.Control
            required
            type="url"
            placeholder="Please input your course's image"
            onChange={e => setImg(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            You must insert your course's image
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom03">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="select"
            onChange={e => setSubject(e.target.value)}
          >
            <option value="None">You must select your subject</option>
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="violin">Violin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="validationCustom04">
          <Form.Label>Description of your course here</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            maxLength="190"
            placeholder="Only 190 character"
            onChange={e => setDesc(e.target.value)}
            required
          />
        </Form.Group>
        
        <Button type="submit">Upload course</Button>
      </Form>
    </div>
  );
}
