import {
  SEARCH_ARTIST,
  ARTIST_LOADED,
  ARTIST_ADD,
  ARTISTS_INITIALIZE,
  SUBS_INITIALIZE
} from './constants';

export function searchArtist(term) {
  return {
    type: SEARCH_ARTIST,
    payload: term,
  };
}

export function artistLoaded(artists) {
  console.log('action artists', artists);
  return {
    type: ARTIST_LOADED,
    payload: artists,
  };
}

export function addArtistToFollowedList(artist) {
  return {
    type: ARTIST_ADD,
    payload: artist,
  };
}

export function initializeArtists(artists) {
  return {
    type: ARTISTS_INITIALIZE,
    payload: artists
  };
}

export function initializeSubs(user) {
  return {
    type: SUBS_INITIALIZE,
    payload: user
  };
}
