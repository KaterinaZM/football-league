import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.css";

class Main extends Component {
  render() {
    let stats = this.props.userDetails.stats
    let leagues = this.props.userDetails.leagues

    return (
      <div className="main__wrapper">
        <div className="main__main-box">
          <span className="main__main-box-title">Latest News</span>
          <div className="main__small-box-body">
            <span className="main__user-games">Some news</span>
          </div>
        </div>

        <div className="main__events">
          <span className="main__events-title">Next Events</span>

          <ul className="main__events-body">
            {leagues.map(element => (
              element.events.map(event => (
                <li className="main__events-item" >
                  {event.date}
                </li>
              )
              )
            ))}
          </ul>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Games Played</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{stats.games}</span>
          </div>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Goals</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{stats.goals}</span>
          </div>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Effectivness</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{Math.round(stats.games / stats.goals * 100) / 100 || ''}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.login.profileInfo
  };
}

export default connect(mapStateToProps)(Main);
