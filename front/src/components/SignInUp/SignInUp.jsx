import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'

export default class SignInUp extends Component {
    render() {
        return (

            <Router>
                <div >
                    <nav>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Login</Link>
                    </nav>

                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                </div>
            </Router>
        );
    }
}
