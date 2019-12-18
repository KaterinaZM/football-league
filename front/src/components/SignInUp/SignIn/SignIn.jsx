import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToLoginAC } from '../../../redux/actions/actions';
import './SignIn.css';

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
    await this.props.fetchToLogin(userName, userPassword);
    //window.location.replace('/profile')
    console.log(this.props);
    
    this.props.history.push('/profile')
  }

  render() {
    return (
      <form className='login'>

        <label className='login__user-name-label'>Login</label>
        <input className='login__user-name-input' onChange={this.handleChangeUsername} type="text" placeholder='login' required />

        <label className='login__password-label'>Password</label>
        <input className='login__password-input' onChange={this.handleChangePassword} type="password" placeholder='password' required />

        <button className='login__button' onClick={this.preFetchLogin}>Sign In</button>
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
