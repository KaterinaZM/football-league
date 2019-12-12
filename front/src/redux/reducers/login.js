import { LOGIN_USER } from '../actions/actionTypes';

const initialState = {
  userLogged: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userLogged: action.userLogged
      };
    }
    default:
      return state;
  }
}
