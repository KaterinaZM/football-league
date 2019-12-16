import React, { Component } from 'react';
import { connect } from 'react-redux';
import defaultUserImage from './defaultUserImage.jpg';
import './User.css';

class User extends Component {
  render() {
    return (
      <div className="user">
        <img className="user__avatar" src={ defaultUserImage } alt="userAvatar"/>
        <span className="user__name">Hi, { this.props.userDetails.name }</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.profile.user
  };
}

export default connect(mapStateToProps)(User);
