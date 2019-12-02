import React from 'react'
import {Row, Col} from "react-bootstrap"
export default function MasterHead() {
    return (
        <header className="masterHead">
        <div className="container h-100">
          <Row className="h-100 align-items-center justify-content-center text-center">
            <Col lg="10" style={{ alignSelf: "flex-end" }}>
              <h1 className="text-uppercase text-white font-weight-bold">
                Knowledge is Power
              </h1>
              <hr className="divider my-4"></hr>
            </Col>
            <Col lg="8" style={{ alignSelf: "baseline" }}>
              <p className="description-header">
                  Any successfull career starts with good education
              </p>
            </Col>
          </Row>
        </div>
      </header>
    )
}
