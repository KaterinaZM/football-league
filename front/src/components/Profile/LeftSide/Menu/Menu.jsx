import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">

        <h3 className="menu__title">Menu</h3>

        <nav>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to="/profile">Main</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/profile/teammates">Teammates</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/profile/playgrounds">Playgrounds</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/profile/calendar">Calendar</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/profile/achievements">Achievements</Link>
            </li>

          </ul>
        </nav>

      </div>
    );
  }
}
