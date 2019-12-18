import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SignInUp from "./components/SignInUp/SignInUp";
import { connect } from "react-redux";
import { loginUserAC } from "./redux/actions/actions";
import "./App.css";
import { userInfo } from "os";

class App extends Component {
  async componentDidMount() {
    const response = await fetch("/api/login", {
      credentials: "include"
    });
    let result = await response.json();
    const getProfile = await fetch("api/profileinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userID: result })
    });
    const getProfileRes = await getProfile.json();

    if (!response.validationError) {
      this.props.loginCheck(result, getProfileRes);
    } else {
      alert("Something went wrong!");
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={SignInUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/calendar" component={Profile} />
          <Route exact path="/profile/leagues" component={Profile} />
          <Route exact path="/profile/playgrounds" component={Profile} />
        </div>
      </Router>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginCheck: (result, profileInfo) => {
      dispatch(loginUserAC(result, profileInfo));
    }
  };
}
export default connect(null, mapDispatchToProps)(App);
