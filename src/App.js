import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
//import './App.css';

import Navbar from "./component/navbar.component";
import ExerciseList from "./component/exercise-list.component";
import EditExercise from "./component/edit-exercise.component";
import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";

function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Route path="/" component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
