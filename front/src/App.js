import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import League from './components/League';
import Login from './components/Login';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <nav className="main-nav">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
          </nav> */}

          <Route exact path="/" component={League} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />

        </div>
      </Router>
    );
  }
}
