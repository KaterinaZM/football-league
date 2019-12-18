import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import "./League.css";

class League extends Component {
  state = {
    leagues: []
  };

  onClick = async event => {
    event.preventDefault();
    return this.props.history.push(`/leagues/${event.target.id}`);
  };

  async componentDidMount() {
    const response = await fetch("/api/leagues");
    const data = await response.json();
    this.setState({ leagues: data });
  }
  async startGame(id) {
    console.log(id);
    console.log(this.props.userID);

    const sendID = await fetch("../api/currentleague", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ leagueID: id, userID: this.props.userID })
    });
  }
  render() {
    return (
      <>
        <ul className="league-list">
          {this.state.leagues.map(element => (
            <li className="league-list__item">
              <a className="league-list__item-name">{element.leagueName}</a>
              <span className="league-list__item-date">
                {element.startDate}
              </span>
              <span className="league-list__item-users">
                {element.users.length}
              </span>
              <button
                className="league-list__item-details"
                id={element._id}
                onClick={this.onClick}
              >
                Details
              </button>
              <button className="league-list__item-join">Join</button>
              <Link
                to="/league/events"
                onClick={() => this.startGame(element._id)}
              >
                Start!
              </Link>
            </li>
          ))}
        </ul>
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
