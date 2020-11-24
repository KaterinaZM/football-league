import { LOGOUT_USER } from '../actions/actionTypes';

const inititialState = {
  userLogged: true
};

export default function logout(state = inititialState, action) {
  switch (action.type) {
    case LOGOUT_USER: {
      return {
        ...state,
        userLogged: false
      };
    }
    default: return state;
  }
}
