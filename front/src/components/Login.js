import React, { Component } from 'react';
import { connect } from 'react-redux';
// import bcrypt from 'bcrypt';
import { FetchToLoginAC } from '../redux/actions/actions';

// const saltRounds = 10;
class Login extends Component {
    state = {
      username: '',
      password: ''
    }

    handleChangeUsername = (e) => {
      this.setState({ username: e.target.value });
    }

    handleChangePassword = (e) => {
      this.setState({ password: e.target.value });
    }

    preFetchLogin = async (e) => {
      e.preventDefault();
      const userName = this.state.username;
      const userPassword = this.state.password;
      //   await bcrypt.hash(userPassword, saltRounds, (err, hash) => {
      //     userPassword = hash;
      //     return userPassword;
      //   });
      await this.props.fetchToLogin(userName, userPassword);
    }

    render() {
      return (
            <form>
                <input className='login' type="text" required/>
                <input className='password' type="password" required/>
                <button onClick={this.preFetchLogin}>Login</button>
            </form>
      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchToLogin: (username, password) => { dispatch(FetchToLoginAC(username, password)); }
  };
}
export default connect(null, mapDispatchToProps)(Login);
