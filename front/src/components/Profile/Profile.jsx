import React, { Component } from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './Profile.css';


export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <LeftSide {...this.props} />
        <RightSide />
      </div>
    );
  }
}
