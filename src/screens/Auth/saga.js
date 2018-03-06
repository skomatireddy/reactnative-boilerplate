import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import {
  LOGIN,
  LOGIN_ERROR,
  GET_USEROBJECT
} from './constants';
import {
  loginCompleted,
  loginError,
  receiveUserObjectFromToken
} from './actions';
import client from '../../utils/apollo.client';
import { getUserFromToken } from '../../queries/index';
import { initializeArtists, initializeSubs } from '../ArtistsScreen/actions';
// const hostUrl = process.env.API_HOST;
const DIZZEE_LOGIN = 'https://192.168.0.10:8888/service/login?app=swiftTrends';


export function* getToken() {
  try {
    console.log('get token');
    // Call our request helper (see 'utils/request')
    const userToken = yield call(request, 'https://facebook.github.io/react-native/movies.json');
    console.log('user tokwn', userToken);
    yield put(loginCompleted(userToken));
    // yield put(getUserObjectFromToken());
  } catch (error) {
    yield put(loginError(error));
  }
}

export function* getUserSign() {
  try {
    // Call our request helper (see 'utils/request')
    // const userToken = yield call(request, requestUserToken);
    yield call(() => (window.location.href = DIZZEE_LOGIN));
  } catch (err) {
    yield put(loginError(err));
  }
}

export function* getUserObject() {
  // const token = yield select(makeSelectUserToken());
  const variables = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNyaWthbnRoLktvbWF0aXJlZGR5QHVtdXNpYy5jb20iLCJpYXQiOjE1MjAzNTc5MjYsImV4cCI6MTUyMDM4NjcyNn0.3cd4IWJTTXLwArecJ0YWHMXY9L0wcFCwH50L1yvMSj4',
    app: 'swiftTrends'
  };
  try {
    const userobj = yield call(client.query, { query: getUserFromToken, variables });
    yield put(receiveUserObjectFromToken(userobj));
    yield put(initializeArtists(userobj.data.getUserFromToken.applications[0].followedArtists));
    yield put(initializeSubs(userobj.data.getUserFromToken.applications[0].subscriptions[0]));
    // yield put(initializeArtists(userobj.data.getUserFromToken.applications[0].followedArtists));
  } catch (err) {
    console.log('In saga', err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getUserToken() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN, getToken);
  yield takeLatest(LOGIN_ERROR, getUserSign);
  yield takeLatest(GET_USEROBJECT, getUserObject);
}

