import React, { Component } from "react";
import "./League.css";
import { timingSafeEqual } from "crypto";

export default class CreateLeague extends Component {
  state = {
    leagues: []
  };

  async componentDidMount() {
    const response = await fetch(`/api/leagues`);
    const data = await response.json();
    this.setState({ leagues: data });
  }

  onSubmit = async event => {
    event.preventDefault();

    const newLeague = {
      leagueName: event.target.leagueName.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value
    };

    const response = await fetch("/api/newleague", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newLeague)
    });
    const result = await response.json();
    return this.props.history.push(`/leagues/${result}`);
  };

  render() {
    return (
      <>
        <label className="createLeague__label">Leagues</label>
        <ul className="createLeague" style={{ color: "white" }}>
          {this.state.leagues.map(element => (
            <li style={{ listStyleType: "none" }}>
              {" "}
              {element.leagueName}
              <button className="createLeague__button">Join</button>{" "}
            </li>
          ))}{" "}
        </ul>

        <form
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
        </form>
      </>
    );
  }
}
