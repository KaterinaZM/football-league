import { LOGIN_USER, SIGNUP_USER } from "../actions/actionTypes";

const initialState = {
  userLogged: "",
  profileInfo: {
    stats: {
      games: "",
      wins: "",
      goals: ""
    },
    leagues: [
      {
        events: [
          {
            name: '',
            date: '',
          },
        ]
      },
    ]
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userLogged: action.userLogged,
        profileInfo: action.profileInfo
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
