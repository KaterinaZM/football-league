import { LOGIN_USER, GET_USER_DETAILS } from './actionTypes';


export default function getUserDetails(id) {
  return {
    type: GET_USER_DETAILS,
    id
  };
}

export const FetchToLoginAC = (username, password) => async (dispatch) => {
  try {
    console.log('Fetch to Login');

    const userLoggedData = await fetch('/api/login', {
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
    dispatch(loginUserAC(userLoggedIn));
    console.log(userLoggedIn);

  } catch (err) {
    alert(err);
  }
};

export const loginUserAC = (userLoggedIn) => ({
  type: LOGIN_USER,
  userLogged: userLoggedIn
});

export const FetchToSignUpAC = (username, email, password) => async (dispatch) => {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const responseJSON = await response.json();
    if (responseJSON.validationError) {
      alert(responseJSON.validationError);
    } else if (responseJSON.successMessage) {
      console.log(username, password);
      await dispatch(FetchToLoginAC(username, password));
    }
  } catch (err) {
    alert(err)
  }
}
