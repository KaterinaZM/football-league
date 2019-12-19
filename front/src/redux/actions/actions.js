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
    // Максим: ниже добавил доп. фетч для запроса инфы по профилю
    const getProfile = await fetch("api/profileinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userID: userLoggedIn })
    });
    const getProfileRes = await getProfile.json();
    console.log(userLoggedIn);

    dispatch(loginUserAC(userLoggedIn, getProfileRes));
  } catch (err) {
    dispatch(loginUserAC(false, false));
    alert(err);
  }
};
export const FetchToLogoutAC = () => async dispatch => {
  // try {
  const userLogoutData = await fetch("api/logout", {
    credentials: "include"
  });
  const userLogout = await userLogoutData.json();
  if (userLogout) {
    await dispatch(logoutUserAC())
  }
  // } catch (err) {
  //   alert('Logout' + err)
  // }
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

    if (response.status === 200) {
      const responseJSON = await response.json();
      console.log(responseJSON)
  
      if(responseJSON.errorName) {
        document.getElementById('errorName').innerText = responseJSON.errorName;
        document.getElementById('userName').style.borderColor = 'red';
        document.getElementById('errorEmail').innerText = '';
        document.getElementById('email').style.borderColor = 'white';
  
      } else if (responseJSON.errorEmail){
        document.getElementById('errorEmail').innerText = responseJSON.errorEmail;
        document.getElementById('userName').style.borderColor = 'white';
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('errorName').innerText = '';
      } else if (responseJSON.successMessage) {
          console.log(username, password);
          await dispatch(FetchToLoginAC(username, password));
        }
    }
    
  } catch (err) {
    alert(err);
  }
};
