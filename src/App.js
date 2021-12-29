import './App.css';
import Home from './Pages/Home/Home';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Appointment from '../src/Pages/Home/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
//mahabub here
//mahabub noob

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
