import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import Profile from './components/Profile/Profile';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/profile'>Profile</Link>
          </nav>

          <Route exact path="/" component={TaskList} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}
