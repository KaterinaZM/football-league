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
            <form className='sign-up'>
                <button onClick={this.logoutFetch}>Sign Out</button>
            </form>
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
