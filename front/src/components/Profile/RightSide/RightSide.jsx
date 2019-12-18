import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main/Main';
import CreateLeague from './League/CreateLeague';
import ViewLeague from './League/ViewLeague';
import './RightSide.css';


class RightSide extends Component {
  render() {
    return (
        <div className="right-side">

          <Route exact path="/profile" component={Main} />
          <Route exact path="/profile/calendar" component={CreateLeague} />
          <Route exact path="/leagues/:id" component={ViewLeague} />

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
