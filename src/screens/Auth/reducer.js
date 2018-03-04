/* eslint-disable prefer-const */
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  USER_OBJECT,
  GET_USEROBJECT
} from './constants';


// The initial state of the App
const initialState = {
  isLoggedIn: false,
  userObject: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_COMPLETED:
      console.log('login', action.payload);
      return {
        ...state,
        token: action.payload
      };
    case LOGIN_ERROR:
      console.log('err in red', action.payload);
      return {
        ...state,
        error: action.payload
      };
    case GET_USEROBJECT:
      return state;
    case USER_OBJECT:
      console.log('user object', action.payload);
      return {
        ...state,
        userObject: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;
