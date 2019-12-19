import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToSignUpAC } from '../../../redux/actions/actions';
import './SignUp.css';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  preFetchSignUp = async (e) => {
    e.preventDefault();
    const userName = this.state.username;
    const userEmail = this.state.email;
    const userPassword = this.state.password;
    await this.props.fetchToSignUp(userName, userEmail, userPassword);
    this.props.history.push('/signin')
  }

  render() {
    return (
      <form
        className='sign-up'
        onSubmit={this.preFetchSignUp}
      >

        <label className='sign-up__user-name-label' >Login <span id='errorName'></span></label>
        <input className='sign-up__user-name-input' id='userName' onChange={this.handleChangeUsername} type='text' placeholder='login' required />

        <label className='sign-up__email-label' >Email <span id='errorEmail'></span></label>
        <input className='sign-up__email-input' id='email' onChange={this.handleChangeEmail} type='text' placeholder='email' required />

        <label className='sign-up__password-label' >Password</label>
        <input className='sign-up__password-input' onChange={this.handleChangePassword} type='password' placeholder='password' required />

        <button className='sign-up__button' >Sign Up</button>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchToSignUp: (username, email, password) => {
      dispatch(FetchToSignUpAC(username, email, password));
    }
  };
}
export default connect(null, mapDispatchToProps)(SignUp);
