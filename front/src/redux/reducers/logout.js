import { LOGOUT_USER } from "../actions/actionTypes";
const inititialState = {
    userLogged: ""
}
export default function (state = inititialState, action) {
    switch (action.type) {
        case LOGOUT_USER: {
            return {
                ...state,
                userLogged: false
            }
        }
    }
    return state
}