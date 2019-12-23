import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToLoginAC } from '../../../redux/actions/actions';
import './SignIn.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
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
    await this.props.fetchToLogin(userName, userPassword);

    this.props.history.push('/profile')
  }

  render() {
    return (
      <form
        className='login'
        onSubmit={this.preFetchLogin}>

        <label className='login__user-name-label'>Login</label>
        <input
          required
          className='login__user-name-input'
          onChange={this.handleChangeUsername}
          type="text"
          placeholder='login'
        />

        <label className='login__password-label'>Password</label>
        <input
          required
          className='login__password-input'
          onChange={this.handleChangePassword}
          type="password"
          placeholder='password'
        />

        <button className='login__button' >Sign In</button>
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
