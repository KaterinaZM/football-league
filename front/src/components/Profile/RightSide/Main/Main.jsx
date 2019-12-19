import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.css";

class Main extends Component {
  state = {
    news: []
  };
  async componentDidMount() {
    const response = await fetch("/api/news");
    const news = await response.json();

    this.setState({ news: news });
  }
  render() {
    let stats = this.props.userDetails.stats || {};
    let leagues = this.props.userDetails.leagues || [];

    return (
      <div className="main__wrapper">

        <div className="main__main-box">
          <span className="main__main-box-title">Latest News</span>
            <ul className="main__main-box-news-list">
              {this.state.news.map(element => (
                <li className="main__main-box-news-item">
                  <span className="main__main-box-news-item-title">{element.title}</span>: {element.msg}
                </li>
              ))}
            </ul>
        </div>

        <div className="main__events">
          <span className="main__events-title">Next Events</span>

          <ul className="main__events-body">
            {leagues.map(element =>
              element.events.map(event => (
                <li className="main__events-item">{event.date}</li>
              ))
            )}
          </ul>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Games Played</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{stats.games}</span>
          </div>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">Goals</span>

          <div className="main__small-box-body">
            <span className="main__user-games">{stats.goals}</span>
          </div>
        </div>

        <div className="main__small-box">
          <span className="main__small-box-title">GGR</span>

          <div className="main__small-box-body">
            <span className="main__user-games">
              {Math.round((stats.goals / stats.games) * 100) / 100 || ""}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.login.profileInfo
  };
}

export default connect(mapStateToProps)(Main);
