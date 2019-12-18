import React, { Component } from "react";
import { connect } from "react-redux";
import "./League.css";
import { timingSafeEqual } from "crypto";

class CreateLeague extends Component {

  onSubmit = async event => {
    event.preventDefault();

    const newLeague = {
      creator: this.props.id,
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
    console.log(this.props);

    return (
      <>
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

function mapStateToProps(state) {
  return {
    id: state.login.userLogged
  };
}

export default connect(mapStateToProps)(CreateLeague);
