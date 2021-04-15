import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Nav from "./components/Nav";



function App() {
  return (
      <Router>
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
      </Router>
  );
}

export default App;
