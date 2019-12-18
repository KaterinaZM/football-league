import React, { Component } from 'react';

export default class League extends Component {
  state = {
    leagues: []
  }

  async componentDidMount() {
    const response = await fetch(`/api/leagues`);
    const data = await response.json();
    console.log(data);
    
    this.setState({ leagues: data });
  }

  render() {
    return <>
      <ul style={{ color: "white" }}>{this.state.leagues.map((element) => <li style={{ listStyleType: "none" }}> {element.leagueName} <button>Join</button></li>)} </ul>
    </>
  }
}