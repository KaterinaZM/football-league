import React, { Component } from 'react';

export default class League extends Component {
  state = {
    leagues: []
  }

  onClick = async (event) => {
    event.preventDefault();
    return this.props.history.push(`/leagues/${event.target.id}`);
  };

  async componentDidMount() {
    const response = await fetch('/api/leagues');
    const data = await response.json();
    this.setState({ leagues: data });
  }

  render() {
    return <>
      <ul style={{ color: 'white' }}>{this.state.leagues.map((element)  => {
        return <li style={{ listStyleType: 'none' }}> {element.leagueName} {element.startDate} {element.users.length}
          <button id={element._id} onClick={this.onClick}>Details</button>
          <button>Join</button></li>;
      })}
      </ul>
    </>;
  }
}
