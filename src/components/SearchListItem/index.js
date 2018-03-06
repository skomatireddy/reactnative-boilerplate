/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import '../../assets/images/artist-fallback.png';

const SearchListItem = (props) => {
  console.log('artist props', props);
  const addArtist = () => {
    props.addArtist(props.artist);
  };
  return (
    <View>
      {/* {editUser(props)} */}
      <TouchableOpacity onPress={addArtist}>
        <Text key={props.artist.item.id}>{props.artist.item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

SearchListItem.propTypes = {
  artist: PropTypes.object,
  removeArtistFromList: PropTypes.func,
  addArtist: PropTypes.func,
  editUser: PropTypes.bool,
};

export default SearchListItem;
