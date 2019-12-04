import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const userExits = localStorage.getItem("token");
  const logOut = async() => {
    localStorage.clear();
    const resp = await fetch("https://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${userExits}`
      },
      body: JSON.stringify({userExits})
    });
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
            {userExits ? (
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
            ) : (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="./register">
                Become a tutor
              </Link>
            </li>
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
