import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Main/Main";
import League from "./League/League";
import CreateLeague from "./League/CreateLeague";
import Playgrounds from "./Playgrounds/Playgrounds";
import ViewLeague from "./League/ViewLeague";
import OngoingLeague from "./League/OngoingLeague";
import "./RightSide.css";

class RightSide extends Component {
  render() {
    return (
      <div className="right-side">
        <Route exact path="/profile" component={Main} />
        <Route exact path="/profile/calendar" component={CreateLeague} />
        <Route exact path="/profile/playgrounds" component={Playgrounds} />
        <Route exact path="/leagues/:id" component={ViewLeague} />
        <Route exact path="/profile/leagues" component={League} />
        <Route exact path="/league/events" component={OngoingLeague} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.profile.user
  };
}

export default connect(mapStateToProps)(RightSide);
