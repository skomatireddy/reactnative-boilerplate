import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_ARTIST } from './constants';
import client from '../../utils/apollo.client';
import { searchArtistQuery } from '../../queries/index';
import { artistLoaded } from './actions';

// const DIZZEE_WHOAMI = 'https://10.130.172.228:8888/api/whoami?app=swiftTrends';
// const DIZZEE_LOGIN = 'https://192.168.0.10:8888/service/login?app=swiftTrends';
// const DIZZEE_LOGOUT = 'https://192.168.0.10:8888/service/logout?app=swiftTrends';


export function* loadArtist(term) {
  // const requestURL = 'https://consumption-api.swift-dev.umusic.com/api/search';
  // console.log('saga', term);
  // const data = {
  //   searchTerm: term.payload,
  //   userInfo: {
  //     internal: true,
  //     userType: null,
  //     defaultLabel: {
  //       id: '',
  //       name: '',
  //       type: ''
  //     },
  //     accessArtists: null,
  //     canView: true
  //   },
  //   searchAreas: ['Artist'],
  //   paging: {
  //     skip: 0,
  //     limit: 10
  //   }
  // };
  const params = {
    searchText: term.payload,
    paging: { skip: 0, limit: 10 },
  };

  // client.query({ query: searchArtistQuery, variables: params }).then(console.log);

  try {
    // Call our request helper (see 'utils/request')
    // console.log('hostUrl', hostUrl);
    const artists = yield call(client.query, { query: searchArtistQuery, variables: params });
    yield put(artistLoaded(artists));
  } catch (err) {
    console.log('In saga', err);
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* getArtists() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEARCH_ARTIST, loadArtist);
}

