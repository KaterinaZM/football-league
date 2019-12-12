import { GET_USER_DETAILS } from '../actions/actionTypes';

const initialState = {
  user: {
    name: 'Denis',
    email: 'Denis@sutulaya.ru',
    about: 'Im very good player, I can shoot the ball',
    role: 'back',
    stats: {
      wins: 2,
      lose: 109
    }
  }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        imgUrl: action.url
      };
    default:
      return state;
  }
}
