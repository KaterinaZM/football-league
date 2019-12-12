import { LOGIN_USER } from './types'

export const FetchToLoginAC = (username, password) => {
    return async (dispatch) => {
        try {
            let userLoggedData = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            let userLoggedIn = await userLoggedData.json();
            console.log(userLoggedIn);
            dispatch(loginUserAC(userLoggedIn));
        } catch (err) {
            alert(err);
        }
    }
}
const loginUserAC = (userLoggedIn) => {
    return {
        type: LOGIN_USER,
        userLogged: userLoggedIn
    }
}