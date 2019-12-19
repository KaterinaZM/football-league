import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./ViewLeague.css";

class OngoingLeague extends Component {
  async componentDidMount() {
    return this.props.userLogged;
  }

  render() {
    return (
      <>
        <ul className="view-league-list">
          {this.state.userPool.map(element => (
            <li className="view-league-list__item"> {element.username} </li>
          ))}
        </ul>
        <button className="view-league-list__button">Start games</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLogged: state.userLogged
  };
}

export default connect(mapStateToProps)(OngoingLeague);
