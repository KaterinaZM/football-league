import React, { Component } from 'react';
import User from './User/User';
import Menu from './Menu/Menu';
import './LeftSide.css';
import Logout from './Logout/Logout';

export default class LeftSide extends Component {
  render() {
    return (
      <div className="left-side">
        <User />
        <Menu {...this.props}/>
        <Logout {...this.props} />
      </div>
    );
  }
}
