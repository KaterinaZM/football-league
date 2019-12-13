import { LOGIN_USER, SIGNUP_USER } from '../actions/actionTypes';

const initialState = {
  userLogged: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userLogged: action.userLogged
      };
    }
    case SIGNUP_USER: {
      return {
        ...state,
        userLogged: action.userLogged
      };
    }
    default:
      return state;
  }
}