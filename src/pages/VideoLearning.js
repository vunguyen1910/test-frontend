import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function VideoLearning() {
  const [recourse, setReCourse] = useState([]);
  const [url, setURL] = useState("");
  const { id } = useParams();
  const getReCourse = async () => {
    const resp = await fetch(`https://127.0.0.1:5000/recourse/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (resp.ok) {
      const data = await resp.json();
      setReCourse(data.data);
      setURL(recourse.url);
      console.log(data.data, "fetch data");
    } else alert("cant fetch");
  };
  useEffect(() => {
    getReCourse();
  }, []);
  const getCourseByID = recourse.filter(course => {
    if (course.id == id) return true;
  })[0];

  const cutVideo = getCourseByID && getCourseByID.url.split("=")[1];
  console.log(cutVideo, "cutted");
  return (
    <div>
      <Row
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          marginTop: "20px",
          height: 0,
          marginLeft: "20px",
          marginRight: "20px"
        }}
      >
        <Col>
          <iframe
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "50vw",
              height: "50vh"
            }}
            src={`https://www.youtube.com/embed/${cutVideo}`}
            frameBorder="0"
          />
          <div style={{borderBottom: "5px ridge rgba(99,99,99,0.34)", borderRadius: "20px"}}>
          <h1 className="ml-5">{getCourseByID && getCourseByID.title}</h1>
          <p className="ml-5">{getCourseByID && getCourseByID.desc}</p>
          </div>
        </Col>
        <Col>
            <h2>Document here if you want to read</h2>
        </Col>
      </Row>
    </div>
  );
}
