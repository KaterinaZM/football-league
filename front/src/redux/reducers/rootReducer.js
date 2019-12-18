import { combineReducers } from 'redux';
import profile from './profile';
import login from './login';
import logout from './logout';

export default combineReducers({
  profile, login, logout
});
