/* eslint-disable no-undef */
import React from 'react';
import { Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import InputField from '../../components/TextInput';
import ListView from '../../components/ArtistListView';
import SearchListView from '../../components/SearchListView';

import reducer from './reducer';
import saga from './saga';

import { searchArtist, addArtistToFollowedList } from './actions';

class ArtistsScreen extends React.Component {
  onTextEnter = (event) => {
    this.props.onArtistSearch(event);
  };

  addArtistToFollowedArtists = (event) => {
    this.props.onAddArtist(event);
  };

  render() {
    console.log(' artists props', this.props);
    let followedArtists;
    if (this.props.followedArtists && this.props.followedArtists.length) {
      ({ followedArtists } = this.props);
    }
    console.log(' followed artists ', followedArtists);
    return (
      <ScrollView>
        <Text>Search Artists</Text>
        <InputField
          onTextEnter={this.onTextEnter}
        />
        <SearchListView
          searchRes={this.props.artistSearchResult}
          addArtist={this.addArtistToFollowedArtists}
        />
        <ListView
          artists={followedArtists}
        />
      </ScrollView>);
  }
}

ArtistsScreen.propTypes = {
  onAddArtist: PropTypes.func,
  onArtistSearch: PropTypes.func,
  artistSearchResult: PropTypes.array,
  followedArtists: PropTypes.array
};

export function mapDispatchToProps(dispatch) {
  return {
    onArtistSearch: (evt) => dispatch(searchArtist(evt)),
    onAddArtist: (evt) => dispatch(addArtistToFollowedList(evt))
  };
}

export function mapStateToProps(state) {
  return {
    artistSearchResult: state.artists.artistSearchData,
    followedArtists: state.artists.artistFollowedData
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'artists', reducer });
const withSaga = injectSaga({ key: 'artists', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ArtistsScreen);
