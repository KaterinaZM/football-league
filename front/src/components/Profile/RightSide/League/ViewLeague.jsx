import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./ViewLeague.css";

class ViewLeague extends Component {
  state = {
    userPool: [],
    teamPool: [],
    leagueID: "",
    started: false
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`/api/leagues/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
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
    let request = await fetch("/api/gamestart", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ leagueID: id, userID: this.props.userID })
    });
  }

  render() {
    return (
      <>
        <h2 className="view-league-list">Users</h2>
        <ul className="view-league-list">
          {this.state.userPool.length > 0 ? (
            this.state.userPool.map(element => (
              <li className="view-league-list__item">{element.username}</li>
            ))
          ) : (
            <li>No players yet :(</li>
          )}
        </ul>
        <h2 className="view-league-list">Teams</h2>
        <ul className="view-league-list">
          {this.state.teamPool.length > 0 ? (
            this.state.teamPool.map(element => (
              <li className="view-league-list__item"> {element.title} </li>
            ))
          ) : (
            <li>No teams yet :(</li>
          )}
        </ul>
        {this.state.userPool.length > 0 ? (
          <Link
            id={this.state.leagueID}
            className="view-league-list__button"
            to="/league/events"
            onClick={() => this.startGame(this.state.leagueID)}
          >
            Start!
          </Link>
        ) : (
          <br></br>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.login.userLogged
  };
}

export default connect(mapStateToProps)(ViewLeague);
