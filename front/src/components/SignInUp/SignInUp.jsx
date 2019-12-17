import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './SignInUp.css';

export default class SignInUp extends Component {
  render() {
    return (

        <Router>
            <div className="sign-in-up">
                <nav className="sign-in-up__menu">
                    <Link className="sign-in-up__menu-item" to='/'>Sign In</Link>
                    <Link className="sign-in-up__menu-item" to='/signup'>Sign Up</Link>
                </nav>

                <Route exact path='/' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
            </div>
        </Router>
    );
  }
}
