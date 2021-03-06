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
    <div>
      <Navbar expand="lg" bg="dark">
        <Link
          className="Techme_vn_Class ml-5 navbar-brand"
          style={{ color: "white" }}
          to="/"
        >
          <span>Learning Music</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ paddingLeft: "70%" }}>
            <Nav.Link className="Courses_gp_Class" style={{ color: "white" }} href="#course">
              <span>Courses</span>
            </Nav.Link>
            {props.currentUser ? (
              <>
                <Nav.Link
                  className="Log_In_Class nav-link"
                  style={{ color: "white" }}
                  onClick={() => logOut()}
                >
                  <span>Log out</span>
                </Nav.Link>
              </>
            ) : (
              <>
                <Link
                  className="Log_In_Class nav-link"
                  style={{ color: "white" }}
                  to="/login"
                >
                  <span>Log In</span>
                </Link>
                <Link
                  className="Become_a_tutorr_Class nav-link"
                  style={{ color: "white" }}
                  to="/register"
                >
                  <span>Become a tutorr</span>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
