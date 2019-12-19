import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToLogoutAC } from '../../../../redux/actions/actions';
import './Logout.css';

class Logout extends Component {
    logoutFetch = async (e) => {
      console.log(this.props);
      e.preventDefault();
      try {
        await this.props.fetchToLogout();

        this.props.history.push('/');
      } catch (e) {
        console.error(e);
      }
      // window.location.replace('/')      \\\\\
    }

    render() {
      return (
            <button className="sign-out" onClick={this.logoutFetch.bind(this)}>Sign Out</button>
      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchToLogout: async () => {
      await dispatch(FetchToLogoutAC());
    }
  };
}
export default connect(null, mapDispatchToProps)(Logout);
