import React, { Component } from 'react';
import User from './User/User';
import Menu from './Menu/Menu';
import './LeftSide.css';

export default class LeftSide extends Component {
  render() {
    return (
      <div className="left-side">
        <User />
        <Menu />
      </div>
    );
  }
}
