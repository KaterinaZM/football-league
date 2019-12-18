import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class CreateLeague extends Component {
  state = {
    userPool: []
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
    this.setState({ userPool: data });
    console.log(data);
  }

  render() {
    console.log(this.state.userPool);

    return (
      <>
        <ul>
          {this.state.userPool.map(element => (
            <>
              <li> {element.username} </li>
            </>
          ))}{" "}
        </ul>

        <Link onClick = {this.startGame(this.state)}to="/league/events">Start League</Link>
      </>
    );
  }
}
