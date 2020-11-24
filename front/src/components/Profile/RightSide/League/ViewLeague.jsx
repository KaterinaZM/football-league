import React, { Component } from 'react';
import {
  BrowserRouter as Link
} from 'react-router-dom';
import './ViewLeague.css';

/* eslint no-underscore-dangle: 0 */

export default class ViewLeague extends Component {
  state = {
    userPool: [],
    teamPool: [],
    leagueID: '',
    started: false
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`/api/leagues/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    this.setState({
      userPool: data.usersHistory,
      teamPool: data.teams,
      started: data.started,
      leagueID: data._id
    });
  }

  async startGame(id) {
    await fetch('/api/gamestart', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  }

  render() {
    return (
      <>
        <tr className="view-league-list-td">
          <td>
            <h2 className="view-league-list">Users</h2>
            <ul className="view-league-list">
              {this.state.userPool.length > 0 ? (
                this.state.userPool.map((element) => (
                  <li className="view-league-list__item">{element.username}</li>
                ))
              ) : (
                  <li>No players yet :(</li>)}
            </ul>
          </td>
          <td>
            <h2 className="view-league-list">Teams</h2>
            <ul className="view-league-list">
              {this.state.teamPool.length > 0 ? (
                this.state.teamPool.map((element) => (
                  <li className="view-league-list__item"> {element.title} </li>
                ))
              ) : (
                  <li>No teams yet :(</li>)}
            </ul>
          </td>
        </tr>
        {this.state.userPool.length > 0 && !this.state.started ? (
          <Link
            className="view-league-list__button"
            to="/league/events"
            onClick={() => this.startGame(this.state.leagueID)}
          >
            Start!
          </Link>
        ) : (
            <br></br>)}
      </>
    );
  }
}
