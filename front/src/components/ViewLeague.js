import React, { Component } from 'react';

export default class CreateLeague extends Component {
  state = {
    userPool: [],
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await fetch(`/api/leagues/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({id}),
    })
    const data = await response.json();
    this.setState({ userPool: data });
  }

  render() {
    return <>
      <ul>{this.state.userPool.map(element => <li> {element} </li>)} </ul>
    </>
  }

}
