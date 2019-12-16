import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Event from '../Event/Event';
// import Stats from '../Stats/Stats';
import getUserDetails from '../../redux/actions/actions';
import './Profile.css';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';


class Profile extends Component {
  render() {
    return (
      <div className="profile">

        <LeftSide />

        <RightSide />


                  {/* <div className="profile__user-details">
            <h2>User details:</h2>
            <span>Hi, { this.props.userDetails.name }</span>
            <span>Email: { this.props.userDetails.email }</span>
            <span>About: { this.props.userDetails.about }</span>
            <span>Role: { this.props.userDetails.role }</span>
          </div> */}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.profile.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: (id) => dispatch(getUserDetails(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
