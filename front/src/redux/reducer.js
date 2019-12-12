import { LOGIN_USER } from "./types";
const initialState = {
  userLogged: false
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userLogged: action.userLogged
      }
    }
    default:
      return state;
  }
}
