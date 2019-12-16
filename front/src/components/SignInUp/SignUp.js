import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchToSignUpAC } from '../../redux/actions/actions';

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
    }

    render() {
        return (
            <form>
                <label>Login</label>
                <input onChange={this.handleChangeUsername} className='login' type='text' placeholder='login' required />
                <label>Email</label>
                <input onChange={this.handleChangeEmail} className='email' type='text' placeholder='email' required />
                <label>Password</label>
                <input onChange={this.handleChangePassword} className='password' type='password' placeholder='password' required />
                <button onClick={this.preFetchSignUp}>Login</button>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchToSignUp: (username, email, password) => { dispatch(FetchToSignUpAC(username, email, password)); }
    };
}
export default connect(null, mapDispatchToProps)(SignUp);
