import { LOGIN_USER, GET_USER_DETAILS } from './actionTypes';


export default function getUserDetails(id) {
  return {
    type: GET_USER_DETAILS,
    id
  };
}

export const FetchToLoginAC = (username, password) => async (dispatch) => {
  try {
    const userLoggedData = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const userLoggedIn = await userLoggedData.json();
    console.log(userLoggedIn);
    dispatch(loginUserAC(userLoggedIn));
  } catch (err) {
    alert(err);
  }
};

export const loginUserAC = (userLoggedIn) => ({
  type: LOGIN_USER,
  userLogged: userLoggedIn
});
