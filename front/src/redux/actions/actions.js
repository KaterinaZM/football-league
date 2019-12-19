import { LOGIN_USER, GET_USER_DETAILS, LOGOUT_USER } from "./actionTypes";

export default function getUserDetails(id) {
  return {
    type: GET_USER_DETAILS,
    id
  };
}
export const loginUserAC = (userLoggedIn, profileInfo) => ({
  type: LOGIN_USER,
  userLogged: userLoggedIn,
  profileInfo: profileInfo
});

export const FetchToLoginAC = (username, password) => async dispatch => {
  try {
    console.log("Fetch to Login");

    const userLoggedData = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const userLoggedIn = await userLoggedData.json();
    console.log(userLoggedIn);

    // Максим: ниже добавил доп. фетч для запроса инфы по профилю
    const getProfile = await fetch("api/profileinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userID: userLoggedIn })
    });
    const getProfileRes = await getProfile.json();
    console.log('userLoggedIn');
    console.log(userLoggedIn);
    if (userLoggedIn.error) {
      console.log('user logges error');
      alert('Login or password is invalid')
    } else {
      dispatch(loginUserAC(userLoggedIn, getProfileRes));
    }
  } catch (err) {
    dispatch(loginUserAC(false, false));
    // alert(err);
  }
};
export const FetchToLogoutAC = () => async dispatch => {
  const userLogoutData = await fetch("api/logout", {
    credentials: "include"
  });
  const userLogout = await userLogoutData.json();
  if (userLogout) {
    await dispatch(logoutUserAC())
    await dispatch(loginUserAC(false, false))
  }
}
export const logoutUserAC = () => ({
  type: LOGOUT_USER,
  userLogged: false
});
export const FetchToSignUpAC = (
  username,
  email,
  password
) => async dispatch => {
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
    //alert(err);
  }
};
