import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToLogoutAC } from '../../../../redux/actions/actions';

class Logout extends Component {
    logoutFetch = async (e) => {
      e.preventDefault();
      await this.props.fetchToLogout();
    }

    render() {
      return (

        <button onClick={this.logoutFetch}>Sign Out</button>

      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchToLogout: () => {
      dispatch(FetchToLogoutAC());
    }
  };
}
export default connect(null, mapDispatchToProps)(Logout);
