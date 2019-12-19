import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./ViewLeague.css";

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
    return (
      <>
        <ul className="view-league-list">
          {this.state.userPool.map(element => (
            <li className="view-league-list__item"> {element.username} </li>
          ))}
        </ul>
        <button className="view-league-list__button">Start games</button>
      </>
    );
  }
}
