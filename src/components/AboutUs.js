import React from "react";
import { Row, Col, Image } from "react-bootstrap";
export default function AboutUs() {
  return (
    <div className="AboutUs container">
      <Row className="h-50 w-100">
        <Col
          md="6"
          className="align-items-center justify-content-center text-center"
          style={{ alignSelf: "center"}}
        >
          <Image src={ require('../img/Music-on-brain.jpg') } className="img-fluid"/>
        </Col>
        <Col
          md="6"
          className="align-items-center justify-content-center"
          style={{ alignSelf: "center", paddingLeft:"100px" }}
        >
          <h2>Now you can learn Music</h2>
          <p>
            In these lessons, you'll learn the basics of music making. No prior
            experience or equipment is required; you'll do everything right here
            in your browser. To get started, check out the boxes below. Each one
            contains a small piece of music. Click a box to turn it on or off.
          </p>
          <ul style={{listStyleType:"none"}}>
              <li>
                  Learning music
              </li>
              <li>
                  Learn fast
              </li>
              <li>
                  Learn easy
              </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
