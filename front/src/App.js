import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import SignInUp from './components/SignInUp/SignInUp';
import CreateLeague from './components/CreateLeague';
import ViewLeague from './components/ViewLeague';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={SignInUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/calendar" component={CreateLeague} />
          <Route exact path="/leagues/:id" component={ViewLeague} />

        </div>
      </Router>
    );
  }
}
