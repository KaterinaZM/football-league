import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateLeague.css';

class CreateLeague extends Component {
  onSubmit = async (event) => {
    event.preventDefault();

    const newLeague = {
      creator: this.props.id,
      leagueName: event.target.leagueName.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value
    };

    const response = await fetch('/api/newleague', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newLeague)
    });
    const result = await response.json();
    return this.props.history.push(`/leagues/${result}`);
  };

  render() {
    return (
      <form name="createLeague" onSubmit={this.onSubmit}>
        <label>Create New League</label>

        <label>Your League name </label>
        <input name="leagueName" type="text" required />

        <label>Start date: </label>
        <input name="startDate" type="datetime-local" required />

        <label>End date: </label>
        <input name="endDate" type="datetime-local" required />
        <button >Create</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.login.userLogged
  };
}

export default connect(mapStateToProps)(CreateLeague);
