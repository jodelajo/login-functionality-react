import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Nav from "./components/navbar/Nav";



function App() {
  return (
      <div className="page-wrapper">

          <Nav />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/log-in">
                  <Login />
              </Route>
              <Route path="/profile">
                  <Profile />
              </Route>
          </Switch>

      </div>
  );
}

export default App;
