import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./ViewLeague.css";

class OngoingLeague extends Component {
  state = {
    events: []
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
    console.log(checkEventsRes);
    !this.state.events.length > 0 &&
      this.setState({ events: checkEventsRes.events });

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
  // async componentDidUpdate() {
  //   let currentLeagueID = this.props.propCurrLeague;
  //   console.log("11111111212121212");

  //   console.log(currentLeagueID);

  //   let checkEventsReq = await fetch("/api/event/eventlist", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({ currentLeagueID })
  //   });

  //   let checkEventsRes = await checkEventsReq.json();

  //   console.log("checkEventsRes");
  //   console.log(checkEventsRes);
  //   !this.state.events && this.setState({ events: checkEventsRes.events });

  //   let fetchedLeagueEvents = checkEventsRes.events;

  //   if (fetchedLeagueEvents.length === 0) {
  //     console.log("is zero!");
  //     console.log(currentLeagueID);
  //     let findLeagueReq = await fetch("/api/event/eventcreator", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json"
  //       },
  //       body: JSON.stringify({ currentLeagueID })
  //     });
  //     let findLeagueRes = await findLeagueReq.json();
  //     console.log(findLeagueRes.events);
  //     this.setState({ events: findLeagueRes.events });
  //   }
  // }
  async submitScore(e) {
    e.preventDefault();
    let score1 = e.target.team1.value;
    let score2 = e.target.team2.value;

    if (score1 > score2) {
      let winner = await fetch("/api/result", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ id: e.target.id, winner: 0 })
      });
    } else {
      let winner = await fetch("/api/result", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ id: e.target.id, winner: 1 })
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
            this.state.events.map(element =>
              element.teams.length == 2 ? (
                <form
                  onSubmit={this.submitScore}
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
                  {element.teams[0].title} - autowin
                </li>
              )
            )
          ) : (
            <h1>No events</h1>
          )}
        </ul>
        <button className="view-league-list__button" onClick={() => {}}>
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
