import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from '../Logout/Logout';
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="profile-menu">
        <h3 className="profile-menu__title">Menu</h3>

        <nav>

          {/* HAMBURGER MENU */}
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />>
            <div className="hamburger"><div></div></div>
            <div className="menu" >
              <div id='ham-menu'>
                <div className='ham-menu' >
                <h3 className="profile-menu__title-hamburger">Menu</h3>
                  <ul>
                    <li>
                      <Link className="profile-menu__link" to="/profile">
                        Main
                      </Link>
                    </li>

                    <li className="header__hamburger-menu-item">
                      <Link className="profile-menu__link" to="/profile/leagues">
                        Browse Leagues
                      </Link>
                    </li>

                    <li className="header__hamburger-menu-item">
                      <Link className="profile-menu__link" to="/profile/playgrounds">
                        Playgrounds
                      </Link>
                    </li>

                    <li className="header__hamburger-menu-item">
                      <Link className="profile-menu__link" to="/profile/calendar">
                        Create Event
                      </Link>
                    </li>

                    <li className="header__hamburger-menu-item">
                      <Link className="profile-menu__link" to="/profile/achievements">
                        <Logout {...this.props} />
                      </Link>
                    </li> 

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ul className="profile-menu__list">
            
            <li className="profile-menu__item">
              <Link className="profile-menu__link" to="/profile">
                Main
              </Link>
            </li>

            <li className="profile-menu__item">
              <Link className="profile-menu__link" to="/profile/leagues">
                Browse Leagues
              </Link>
            </li>

            <li className="profile-menu__item">
              <Link className="profile-menu__link" to="/profile/playgrounds">
                Playgrounds
              </Link>
            </li>

            <li className="profile-menu__item">
              <Link className="profile-menu__link" to="/profile/calendar">
              Create Event
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}
