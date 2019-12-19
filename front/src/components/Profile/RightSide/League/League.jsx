import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './League.css';

class League extends Component {
  state = {
    leagues: []
  };

  onClick = async (event) => {
    event.preventDefault();
    return this.props.history.push(`/leagues/${event.target.id}`);
  };

  async componentDidMount() {
    const response = await fetch('/api/leagues');
    const data = await response.json();
    this.setState({ leagues: data });
  }

  // async startGame(id) {
  //   console.log(id);
  //   console.log(this.props.userID);

  //   const sendID = await fetch('../api/currentleague', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ leagueID: id, userID: this.props.userID })
  //   });
  // }

  render() {

    let options = {
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    
    return (
      <>
      <ul className="league-list">

        {this.state.leagues.map((element) => (
          
          <li className="league-list__item">
            <a className="league-list__item-name"
            id={element._id}
            onClick={this.onClick}>{element.leagueName}</a>

            <span className="league-list__item-date">
              {new Date(element.startDate).toLocaleString("en-US", options)}

            </span>

            <span className="league-list__item-users">
              {element.users.length}
            </span>

            <button className="league-list__item-join">Join</button>
{/*             
            <Link
              to="/league/events"
              onClick={() => this.startGame(element._id)}
            >
              Start!
            </Link> */}
          </li>
        ))}
      </ul>

      {/* <form
      className="createLeague"
      name="createLeague"
      onSubmit={this.onSubmit}
      >
      <label className="createLeague__label">New League</label>
      <br />
      <label className="createLeague__label">Your League name </label>
      <input
        className="createLeague__input"
        name="leagueName"
        type="text"
        required
      />
      <br />
      <label className="createLeague__label">Start date: </label>
      <input
        className="createLeague__input"
        name="startDate"
        type="date"
        required
      />
      <br />
      <label className="createLeague__label">End date: </label>
      <input
        className="createLeague__input"
        name="endDate"
        type="date"
        required
      />
      <button className="createLeague__button">Create</button>
      </form> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.login.userLogged
  };
}

export default connect(mapStateToProps)(League);
