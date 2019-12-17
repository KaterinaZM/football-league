import { GET_USER_DETAILS } from "../actions/actionTypes";
const initialState = {
  user: {},
  events: []
};

// const initialState = {
//   user: {
//     name: 'Denis',
//     email: 'Denis@sutulaya.ru',
//     about: 'Im very good player, I can shoot the ball',
//     role: 'back',
//     events: [
//       {
//         name: 'First liga',
//         status: 'lose',
//         goals: 0,
//         teammate: 'Ivan'
//       },
//       {
//         name: 'Second liga',
//         status: 'lose',
//         goals: 0,
//         teammate: 'Igor'
//       },
//       {
//         name: 'September Cup',
//         status: 'lose',
//         goals: 1,
//         teammate: 'Valera'
//       },
//       {
//         name: 'Third liga',
//         status: 'win',
//         goals: 0,
//         teammate: 'Andrash'
//       },
//       {
//         name: 'Fourth liga',
//         status: 'lose',
//         goals: 3,
//         teammate: 'Bobby'
//       },
//       {
//         name: 'November liga',
//         status: 'lose',
//         goals: 0,
//         teammate: 'Bobby'
//       },
//       {
//         name: 'All Stars Cup',
//         status: 'lose',
//         goals: 0,
//         teammate: 'Valera'
//       }
//     ]
//   },
//   events: [
//     {
//       name: 'First liga',
//       date: '12.12.2019'

//     },
//     {
//       name: 'Second liga',
//       date: '13.12.2019'
//     },
//     {
//       name: 'September Cup',
//       date: '14.12.2019'
//     },
//     {
//       name: 'Third liga',
//       date: '15.12.2019'
//     },
//     {
//       name: 'Fourth liga',
//       date: '16.12.2019'
//     },
//     {
//       name: 'November liga',
//       date: '17.12.2019'
//     },
//     {
//       name: 'All Stars Cup',
//       date: '18.12.2019'
//     }
//   ]
//   }

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
