import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function CourseSubject(props) {
  const { subject } = useParams();
  const [courseinSubject, setCourse] = useState([]);
  const [state, setState] = useState('');
  const currentUser = props.currentUser
  const getSourceSubject = async () => {
    const resp = await fetch(`https://127.0.0.1:5000/course/${subject}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data.data);
      setCourse(data.data);
      props.setCourse(data.data)

      console.log(data.data, 'course from coursesubject')
    } else alert("cant fetch");
  };


  const deleteCourse = async id => {
    const resp = await fetch(`https://127.0.0.1:5000/course/${id}/delete`,{
        method: 'DELETE',
        headers:{
            Authorization: `Token ${localStorage.getItem('token')}`,
        }
    });
    if(resp.ok){
        const data = await resp.json()
        setState(data.message)
        getSourceSubject()
    }
  };
  useEffect(() => {
    getSourceSubject();
  }, []);

  const courseRender = courseinSubject.map(course => {
    return (
      <Card className="mt-2">
        <Card.Img variant="top" src={course.img} />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>{course.desc}</Card.Text>
          <Link to={`/recouse/${course.id}`}>Watch ReCourse</Link>
            { currentUser ? 
                (currentUser.id === course.teacher_id ?
                    <>
                    <Button onClick={()=> deleteCourse(course.id)}>Delete</Button>
                    <Link to={`/course/${course.id}/edit`} className="btn btn-primary">Edit</Link> 
                    </>: ''  
                )
                : ''
            }
        </Card.Body>
      </Card>
    );
  });
  return <div className="container mt-5">
      {state}
      {courseRender}
      </div>;
}
