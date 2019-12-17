import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import SignInUp from './components/SignInUp/SignInUp';
import { connect } from 'react-redux';
import { loginUserAC } from './redux/actions/actions';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const response = await fetch('/api/login', {
      credentials: 'include'
    })
    if (!response.validationError) {
      let result = await response.json();
      this.props.loginCheck(result);
    } else { alert("Something went wrong!") }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/calendar" component={Profile} />
            <Route path='/' component={SignInUp} />
          </Switch>

        </div>
      </Router>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginCheck: (result) => { dispatch(loginUserAC(result)) }
  }
}
export default connect(null, mapDispatchToProps)(App);