import React, { Component } from 'react';
import { connect } from 'react-redux';

class Event extends Component {
  render() {
    return (
      <div>
        <h2>User statistic:</h2>
        <span>Wins: { this.props.userStats.wins }</span>
        <span>Lose: { this.props.userStats.lose }</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userStats: state.profile.user.stats
  };
}

export default connect(mapStateToProps)(Event);
