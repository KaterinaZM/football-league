import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RightSide.css';

class RightSide extends Component {
  render() {
    return (
      <div className="right-side">

        <div className="right-side__wrapper">

          <div className="right-side__main-box">
            <span className="right-side__main-box-title">Last News</span>
          </div>

          <div className="right-side__events">
            <span className="right-side__events-title">Next Events</span>

            <div className="right-side__events-body">

            </div>
          </div>

          <div className="right-side__small-box">
            <span className="right-side__small-box-title">Games Played</span>

            <div className="right-side__small-box-body">
              <span className="right-side__user-games">{this.props.userDetails.events.length}</span>
            </div>
          </div>

          <div className="right-side__small-box">
            <span className="right-side__small-box-title">Goals</span>

            <div className="right-side__small-box-body">
              <span className="right-side__user-games">
                {this.props.userDetails.events[0].goals}
              </span>
            </div>
          </div>

          <div className="right-side__small-box">
            <div className="right-side__small-box-title">Top Teammates</div>

            <div className="right-side__small-box-body">

            </div>
          </div>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.profile.user
  };
}

export default connect(mapStateToProps)(RightSide);
