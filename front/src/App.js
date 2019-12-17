import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import SignInUp from './components/SignInUp/SignInUp';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">


          <Route exact path="/" component={SignInUp} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/profile/calendar" component={Profile} />
          <Route exact path="/profile/playgrounds" component={Profile} />

        </div>
      </Router>
    );
  }
}
