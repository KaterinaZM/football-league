import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './components/Profile/Profile';
import SignInUp from './components/SignInUp/SignInUp';
import { loginUserAC } from './redux/actions/actions';
import './App.css';

class App extends Component {
  async componentDidMount() {
    // checks if user is logged in by checking if there are any existing sessions
    const response = await fetch('/api/login', {
      credentials: 'include'
    });
    const result = await response.json();
    console.log(result, '<<<<<<<<<<<<<<<< get req to api/login result');

    if (result) {
      this.props.loginCheck(result.id, result);
    } else {
      this.props.loginCheck(false, false);
    }
  }

  render() {

    const { userInfo } = this.props;
    if (userInfo === '') {
      return <h1>Please, wait</h1>;
    }
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              {userInfo ? (
                <Redirect to='/profile' />
              ) : (<Redirect to='/signin' />)}
            </Route>

            <Route exact path='/profile' component={Profile} />
            <Route exact path='/signin' component={SignInUp} />
            <Route exact path='/profile/calendar' component={Profile} />
            <Route exact path='/signup' component={SignInUp} />
            <Route exact path='/profile/leagues' component={Profile} />
            <Route exact path='/profile/playgrounds' component={Profile} />
            <Route exact path='/leagues/:id' component={Profile} />
            <Route exact path='/league/events' component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginCheck: (result, profileInfo) => {
      dispatch(loginUserAC(result, profileInfo));
    }
  };
}
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
