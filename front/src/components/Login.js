import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import bcrypt from 'bcrypt';

const saltRounds = 10;
class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChangeUsername = e => {
        this.setState({ username: e.target.value })
    }
    handleChangePassword = e => {
        this.setState({ password: e.target.value })
    }
    preFetchLogin = async () => {
        let userName = this.state.username;
        let userPassword = this.state.password;
        await bcrypt.hash(userPassword, saltRounds, function (err, hash) {
            return userPassword = hash;
        });
        await this.props.fetchToLogin(userName, userPassword)
    }

    render() {
        return (
            <div>
                <input className='login' />
                <input className='password' />
                <button type='submit' onClick={this.preFetchLogin}>Login</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchToLogin: (username, password) => { dispatch(fetchToLoginAC(username, password)) }
    }
}
export default connect(null, mapDispatchToProps)(Login);