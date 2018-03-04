import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  GET_USEROBJECT,
  USER_OBJECT,
  SHOW_MODAL,
  HIDE_MODAL
} from './constants';

export function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

export function loginCompleted(token) {
  return {
    type: LOGIN_COMPLETED,
    payload: token,
  };
}

export function getUserObjectFromToken(token) {
  return {
    type: GET_USEROBJECT,
    payload: token
  };
}

export function receiveUserObjectFromToken(userobject) {
  return {
    type: USER_OBJECT,
    payload: userobject
  };
}

export function showModalFromHeader() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModalFromHeader() {
  return {
    type: HIDE_MODAL,
  };
}
