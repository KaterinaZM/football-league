import { GET_USER_DETAILS } from './actionTypes';

export default function getUserDetails(id) {
  return {
    type: GET_USER_DETAILS,
    id
  };
}
