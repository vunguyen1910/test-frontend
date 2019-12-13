import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Navbar(props) {
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
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Learning Music
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            {props.currentUser ? (
              <>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-course">Create the Course</Link>
              </li>
              </>
            ) : (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {props.currentUser ? (
              <li className="nav-item">
                <Link className="nav-link" to="./register">
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="./register">
                  Become a tutor
                </Link>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
