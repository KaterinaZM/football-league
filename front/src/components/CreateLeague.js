import React, { Component } from 'react';

export default class CreateLeague extends Component {
  onSubmit = async (event) => {
    event.preventDefault()

    const newLeague = {
      leagueName: event.target.leagueName.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
    }

    const response = await fetch('/api/newleague', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newLeague),
    })
    const result = await response.json();
    return this.props.history.push(`/leagues/${result}`);
  };

  render() {
    return <form name='createLeague' onSubmit={this.onSubmit}>
      <label>New League</label>
      <br />
      <label>Your League name </label>
      <input name='leagueName' type="text" />
      <br />
      <label>Start date: </label>
      <input name='startDate' type="date" />
      <br />
      <label>End date: </label>
      <input name='endDate' type="date" />
      <button>Create</button>
    </form>
  }
}
