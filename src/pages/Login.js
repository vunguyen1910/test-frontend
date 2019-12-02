import React from "react";
import Navbar from "../components/Navbar";
export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="text-center container" style={{marginTop:"100px"}}>
        <form className="form-signin">
          <img
            className="mb-4"
            src={ require('../img/login.png') }
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2019</p>
        </form>
      </div>
    </div>
  );
}
