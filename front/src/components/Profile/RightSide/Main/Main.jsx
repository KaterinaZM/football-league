import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main__wrapper">

        <div className="main__main-box">
          <span className="main__main-box-title">Last News</span>
        </div>

        <div className="main__events">
          <span className="main__events-title">Next Events</span>

          <ul className="main__events-body">
            { this.props.events.map(event => <li className="main__events-item">{event.name}: {event.date}</li>)}
          </ul>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Games Played</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{this.props.userDetails.events.length}</span>
          </div>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Goals</span>

          <div className="main__small-box-body">
            <span className="main__user-games">
              {this.props.userDetails.events[0].goals}
            </span>
          </div>
        </div>

        <div className="main__small-box">
          <div className="main__small-box-title">Top Teammates</div>

          <div className="main__small-box-body">

          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.profile.user,
    events: state.profile.events
  };
}

export default connect(mapStateToProps)(Main);
