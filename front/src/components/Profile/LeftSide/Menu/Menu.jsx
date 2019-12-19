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
              <Link className="menu__link" to="/leagues">Browse Leagues</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/playgrounds">Playgrounds</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/calendar">My Events</Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/achievements">Achievements</Link>
            </li>

          </ul>
        </nav>

      </div>
    );
  }
}
