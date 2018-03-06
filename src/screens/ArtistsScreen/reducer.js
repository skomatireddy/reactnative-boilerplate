/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import {
  SEARCH_ARTIST,
  ARTIST_LOADED,
  ARTIST_ADD,
  ARTISTS_INITIALIZE,
  SUBS_INITIALIZE,

} from './constants';

const initialState = {
  artistFollowedData: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return state;
    case ARTIST_LOADED:
      console.log('artists reducer', action.payload);
      return {
        ...state,
        artistSearchData: action.payload.data.searchArtists
      };
    case ARTIST_ADD:
      console.log('add artist', action.payload);
      {
        const addNewArtist = state.artistFollowedData;
        const y = _.findIndex(addNewArtist, (o) => { return o._id === action.payload.item._id; });
        console.log('add artist', y);
        if (y === -1) {
          console.log(state);
          return {
            ...state,
            artistFollowedData: [...state.artistFollowedData, action.payload.item]
          };
        }
        return state;
      }
    case ARTISTS_INITIALIZE:
      console.log('artist data redu', action.payload);
      return {
        ...state,
        artistFollowedData: action.payload
      };
    case SUBS_INITIALIZE:
      console.log('sub data redu', action.payload);
      return {
        ...state,
        subData: action.payload
      };
    default:
      return state;
  }
}

