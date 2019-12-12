import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Event from '../Event/Event';
import Stats from '../Stats/Stats';
import getUserDetails from '../../redux/actions/actions';
import userImg from './user.jpg';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile">

        <div className="profile__user">

          <img className="profile__user-avatar" src={ userImg } alt="userAvatar"/>

          <div className="profile__user-details">
            <h2>User details:</h2>
            <span>Name: { this.props.userDetails.name }</span>
            <span>Email: { this.props.userDetails.email }</span>
            <span>About: { this.props.userDetails.about }</span>
            <span>Role: { this.props.userDetails.role }</span>
          </div>

        </div>

        <Router>
          <div className="profile__user-menu">
            <nav>
              <Link to="/profile">Ближайшие мероприятия</Link>
              <Link to="/profile/stats">Статистика</Link>
            </nav>

            <Route exact path="/profile" component={ Event }/>
            <Route exact path="/profile/stats" component={ Stats }/>
          </div>
        </Router>
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
