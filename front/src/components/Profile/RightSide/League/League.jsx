import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class League extends Component {
  state = {
    leagues: []
  };
  onClick = async event => {
    event.preventDefault();
    return this.props.history.push(`/leagues/${event.target.id}`);
  };

  async componentDidMount() {
    const response = await fetch(`/api/leagues`);
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
        <ul style={{ color: "white" }}>
          {this.state.leagues.map(element => (
            <li style={{ listStyleType: "none" }}>
              {" "}
              {element.leagueName} {element.startDate} {element.users.length}
              <button id={element._id} onClick={this.onClick}>
                Details
              </button>
              <button>Join</button>
              <Link
                to="/league/events"
                onClick={() => this.startGame(element._id)}
              >
                Start!
              </Link>
            </li>
          ))}{" "}
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
