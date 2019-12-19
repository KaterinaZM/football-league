import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./ViewLeague.css";

class OngoingLeague extends Component {
  state = {
    events: ""
  };
  async componentDidMount() {
    let currentLeagueID = this.props.propCurrLeague;
  }
  async componentDidUpdate() {
    let currentLeagueID = this.props.propCurrLeague;
    console.log(currentLeagueID);

    let checkEventsReq = await fetch("/api/event/eventlist", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ currentLeagueID })
    });

    let checkEventsRes = await checkEventsReq.json();

    console.log("checkEventsRes");
    console.log(checkEventsRes);
    !this.state.events && this.setState({ events: checkEventsRes.events });

    let fetchedLeagueEvents = checkEventsRes.events;

    if (fetchedLeagueEvents.length === 0) {
      console.log("is zero!");
      console.log(currentLeagueID);
      let findLeagueReq = await fetch("/api/event/eventcreator", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ currentLeagueID })
      });
      let findLeagueRes = await findLeagueReq.json();
      console.log(findLeagueRes.events);
      this.setState({ events: findLeagueRes.events });
    }
  }

  render() {
    return (
      <>
        <ul className="view-league-list">
          {this.state.events.length > 0 ? (
            this.state.events.map(element => (
              <form>
                <li className="view-league-list__item"> {element._id} </li>
              </form>
            ))
          ) : (
            <h1>No events</h1>
          )}
        </ul>
        <button className="view-league-list__button">Start games</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    propCurrLeague: state.login.profileInfo.currentLeague
  };
}

export default connect(mapStateToProps)(OngoingLeague);
