import { combineReducers } from 'redux';
import profile from './profile';
import login from './login';

export default combineReducers({
  profile, login
});
