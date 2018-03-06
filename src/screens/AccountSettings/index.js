/* eslint-disable no-undef */
import React from 'react';
import { Text } from 'react-native';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

// import injectReducer from '../../utils/injectReducer';
// import injectSaga from '../../utils/injectSaga';


// import reducer from './reducer';
// import saga from './saga';

// import { } from './actions';

const AccountSettingsScreen = () => {
  return (<Text> Welcome to your Settings!! I will be ready soon for you!! </Text>);
};

export default AccountSettingsScreen;
// ArtistsScreen.propTypes = {
//   onAddArtist: PropTypes.func,
//   onArtistSearch: PropTypes.func,
//   artistSearchResult: PropTypes.array,
//   followedArtists: PropTypes.array
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//     onArtistSearch: (evt) => dispatch(searchArtist(evt)),
//     onAddArtist: (evt) => dispatch(addArtistToFollowedList(evt))
//   };
// }

// export function mapStateToProps(state) {
//   return {
//     artistSearchResult: state.artists.artistSearchData,
//     followedArtists: state.artists.artistFollowedData
//   };
// }


// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'artists', reducer });
// const withSaga = injectSaga({ key: 'artists', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(AccountSettingsScreen);
