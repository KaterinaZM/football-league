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

    let count = 0;
    return (
      <div className="view-league">
          <h2 className="view-league__players-title">Users:</h2>
          <ul className="view-league__players-list">
            
            {this.state.userPool.length > 0 ? (
              this.state.userPool.map((element, idx) => (
              <li className="view-league__players-list-item">{ idx + 1}. {element.username}</li>
              ))
            ) : (
              <li>No players yet</li>
            )}
          </ul>

          <h2 className="view-league__teams-title">Teams:</h2>
          <ul className="view-league__teams-list">
            {this.state.teamPool.length > 0 ? (
              this.state.teamPool.map((element, idx) => (
                <li className="view-league__teams-list-item">{ idx + 1}. {element.title} </li>
              ))
            ) : (
              <li>No teams yet</li>
            )}
          </ul>

        {this.state.userPool.length > 0 ? (
          <Link
            id={this.state.leagueID}
            className="view-league__button"
            to="/league/events"
            onClick={() => this.startGame(this.state.leagueID)}
          >
            Start!
          </Link>
        ) : ( null )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.login.userLogged
  };
}

export default connect(mapStateToProps)(ViewLeague);
