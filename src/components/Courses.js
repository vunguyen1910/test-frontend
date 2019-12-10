import React from "react";
import {Link} from 'react-router-dom'
export default function Courses() {
  return (
    <div style={{backgroundColor:'#D8D8D8'}}>
    <div className="container">
        <h1 style={{textAlign:'center', paddingTop:'50px', paddingBottom:'50px'}}>Courses</h1>
      <div className="card-deck" style={{paddingBottom:'50px'}}>
        <div className="card">
        <img src={ require('../img/hailey-reed-Martin+Sepia+crop.jpg') } className="card-img-top"/> 
          <div className="card-body">
            <h5 className="card-title text-center">Guitar</h5>
            <p className="card-text">
              You can learning guitar quick and easy
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">The all Free</li>
            <li className="list-group-item text-center">Teacher: Nguyễn Vũ</li>
          </ul>
          <div className="card-body">
          <Link to="/course/guitar" className="btn btn-primary btn-block">
              Learn
          </Link>
          </div>
        </div>
        <div className="card">
        <img src={ require('../img/piano-history.jpg') } className="card-img-top"/> 
          <div className="card-body">
            <h5 className="card-title text-center">Piano</h5>
            <p className="card-text">
              You can learning piano quick and easy
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">The all Free</li>
            <li className="list-group-item text-center">Teacher: Nguyễn Vũ</li>
          </ul>
          <div className="card-body">
            <Link to="/course/piano" className="btn btn-primary btn-block">
              Learn
            </Link>
          </div>
        </div>
        <div className="card">
        <img src={ require('../img/d1.jpg') } className="card-img-top"/> 
          <div className="card-body">
            <h5 className="card-title text-center">Violon</h5>
            <p className="card-text">
              You can learning Violon quick and easy
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">The all Free</li>
            <li className="list-group-item text-center">Teacher: Nguyễn Vũ</li>
          </ul>
          <div className="card-body">
          <Link to="/course/violin" className="btn btn-primary btn-block">
              Learn
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
