import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./ViewLeague.css";

class OngoingLeague extends Component {
  state = {
    events: [],
    thisLeagueID: ""
  };
  async componentDidMount() {
    let currentLeagueID = this.props.propCurrLeague;
    console.log("11111111212121212");

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
    // console.log(checkEventsRes);
    !this.state.events.length > 0 &&
      this.setState({
        thisLeagueID: this.props.propCurrLeague,
        events: checkEventsRes.events
      });

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
      this.setState({
        thisLeagueID: this.props.propCurrLeague,
        events: findLeagueRes.events
      });
    }
  }

  async generateNew(e) {
    e.preventDefault();
    let currentLeagueID = this.props.propCurrLeague;
    console.log("league id in generate is ");
    console.log(currentLeagueID);

    let data = await fetch("/api/result/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        leagueID: currentLeagueID
      })
    });
    let response = await data.json();
    this.setState({ events: response.events });
  }
  async submitScore(e) {
    // debugger;
    e.preventDefault();
    let currentLeagueID = this.props.propCurrLeague;

    let score1 = e.target.team1.value;
    let score2 = e.target.team2.value;

    if (score1 > score2) {
      let winner = await fetch("/api/result", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          leagueID: currentLeagueID,
          eventID: e.target.id,
          winnerInd: 0
        })
      });
    } else {
      let winner = await fetch("/api/result", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          leagueID: currentLeagueID,
          eventID: e.target.id,
          winnerInd: 1
        })
      });
    }

    // let await fetch()
    console.log(score1);
    console.log(score2);
  }

  render() {
    return (
      <>
        <ul className="view-league-list">
          {this.state.events.length > 0 ? (
            this.state.events.map((element, index) => {
              console.log(element);

              return element.teams.length == 2 ? (
                <form
                  onSubmit={this.submitScore.bind(this)}
                  className="events"
                  id={element._id}
                >
                  <li className="view-league-list__item">
                    {element.teams[0].title} vs. {element.teams[1].title}
                  </li>
                  <input name="team1" type="text" />
                  <input name="team2" type="text" />
                  <button>Submit</button>
                </form>
              ) : (
                <li className="view-league-list__item">
                  {element.teams[0].title} - Event winner
                </li>
              );
            })
          ) : (
            <h1>No events</h1>
          )}
        </ul>
        <button
          className="view-league-list__button"
          onClick={this.generateNew.bind(this)}
        >
          Submit scores
        </button>
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
