import { connect } from 'react-redux';
import React, { Component } from 'react';
import './League.css';

/* eslint no-underscore-dangle: 0 */

class League extends Component {
  state = {
    leagues: []
  };

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
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return (
      <>
        <ul className='league-list'>
          {this.state.leagues.map((element) => (

            <li className='league-list__item'>
              <a className='league-list__item-name'
                id={element._id}
                onClick={this.onClick}>{element.leagueName}</a>
              <span className='league-list__item-date'>
                {new Date(element.startDate).toLocaleString('en-US', options)}
              </span>
              <span className='league-list__item-users'>
                {element.users.length}
              </span>
              <button className='league-list__item-join'>Join</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.login.userLogged
  };
}

export default connect(mapStateToProps)(League);
