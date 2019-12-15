import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
export default function NavBar(props) {
  const history = useHistory();

  const logOut = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    });
    if (resp.ok) {
      localStorage.clear("token");
      props.setCurrentUser(null);
      history.push("/");
    } else {
      alert("something wrong log out again");
    }
  };
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <Navbar.Brand className="Techme_vn_Class mt-5" style={{ color: "white"}}>
        <span>Techme.vn</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mt-5" style={{paddingLeft:"70%"}}>
          <Nav.Link className="Courses_gp_Class" style={{ color: "white" }}>
            <span>Courses</span>
          </Nav.Link>
          <Nav.Link className="Log_In_Class" style={{ color: "white" }}>
            <span>Log In</span>
          </Nav.Link>
          <Nav.Link
            className="Become_a_tutorr_Class"
            style={{ color: "white" }}
          >
            <span>Become a tutorr</span>
          </Nav.Link>
          <Nav.Link className="Contact_gs_Class" style={{ color: "white" }}>
            <span>Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
