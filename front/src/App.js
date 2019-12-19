import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { userInfo } from "os";
import Profile from "./components/Profile/Profile";
import SignInUp from "./components/SignInUp/SignInUp";
import { loginUserAC } from "./redux/actions/actions";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const response = await fetch("/api/login", {
      credentials: "include"
    });

    let result = await response.json();
    if (result) {
      const getProfile = await fetch("/api/profileinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userID: result })
      });
      const getProfileRes = await getProfile.json();

      // if (!response.validationError) {
      this.props.loginCheck(result, getProfileRes);

      // } else {
      //   alert("Something went wrong!");
      // }
    } else {
      //alert('eroroljkfdvjlkv')
      //this.props.userLogged = false
      this.props.loginCheck(false, false);
      console.log(this.props);
    }
  }

  render() {
    const userLogged = this.props.userLogged;
    console.log("User logged " + userLogged);

    if (userLogged === "") {
      return <h1>Please, wait</h1>;
    } else {
      console.log("userLogges:" + typeof userLogged);
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                {userLogged ? (
                  <Redirect to="/profile" />

                ) : (
                    <Redirect to="/signin" />
                  )}
              </Route>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/calendar" component={Profile} />
              <Route exact path="/signup" component={SignInUp} />
              <Route exact path="/signin" component={SignInUp} />
              <Route exact path="/profile/leagues" component={Profile} />
              <Route exact path="/profile/playgrounds" component={Profile} />
              <Route exact path="/leagues/:id" component={Profile} />
              <Route exact path="/league/events" component={Profile} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginCheck: (result, profileInfo) => {
      dispatch(loginUserAC(result, profileInfo));
    }
  };
}
function mapStateToProps(state) {
  return {
    userLogged: state.login.userLogged
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
