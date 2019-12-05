import React,{useState, useEffect} from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login'
import Register from './pages/Register';
import Navbar from "./components/Navbar";
import Private from './components/Private'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getUser()
    window.history.replaceState({}, document.title, window.location.pathname);
  }, [])
  const getUser = async () =>{
    const local = localStorage.getItem("token");
    const accessToken =
    window.location.search.split("=")[0] === "?api_key"
      ? window.location.search.split("=")[1]
      : null;
      const token = local || accessToken



    const resp = await fetch("https://127.0.0.1:5000/getuser",{
        headers: {
          Authorization: `Token ${token}`
        }
    });
    if (resp.ok){
      const data = await resp.json()
      localStorage.setItem('token', token)
      setCurrentUser(data)
    } else {
      localStorage.clear('token')
      setCurrentUser(null)
    }
    setLoaded(true)
  }
  if (!loaded) return <h1>loading</h1>
  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Switch>
        <Route path="/login" render={()=> <Login setCurrentUser={setCurrentUser}/>}/>
        <Route path="/register" render={() => <Register setCurrentUser={setCurrentUser}/>}/>
        <Private path="/" user={currentUser} component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
