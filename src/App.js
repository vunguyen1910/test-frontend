import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=> <HomePage/>}/>
        <Route path="/login" render={()=> <Login />}/>
      </Switch>
    </div>
  );
}

export default App;
