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
import Forgot from './pages/Forgot'
import NewPass from './pages/NewPass'
import CreateCourse from './pages/CreateCourse'
import CourseSubject from './pages/CourseSubject'
import EditCourse from './pages/EditCourse';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [course, setCourse] = useState([])


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
  console.log(course,'course from app')
  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Switch>
        <Route path="/login" render={()=> <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
        <Route path="/register" render={() => <Register setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
        <Route path="/forgot-password" render={() => <Forgot />}/>
        <Route path="/new-password" render = {() => <NewPass/>}/>
        <Private path="/create-course" user={currentUser} component = {CreateCourse}/>} />
        <Route path="/course/:id/edit" render = {()=><EditCourse currentUser={currentUser} course={course}/>}/>

        <Route path="/course/:subject" render = {() => <CourseSubject currentUser={currentUser} setCourse={setCourse}/>} />
        <Route path="/" render={() => <HomePage />}/>
      </Switch>
    </div>
  );
}

export default App;
