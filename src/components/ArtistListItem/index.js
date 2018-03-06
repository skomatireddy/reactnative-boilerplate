/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, } from 'react-native';

const ArtistListItem = (props) => {
  console.log('artist props', props);
  const artistImage = () => {
    if (!props.artist.item.image) {
      return require('../../assets/images/artist-fallback.png');
    }
    return { uri: props.artist.item.image };
  };
  return (
    <View style={styles.listItem} >
      {/* {editUser(props)} */}
      <Image
        style={styles.placeImage}
        source={artistImage()}
      />
      <Text key={props.artist.item.id}>{props.artist.item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 5,
    padding: 10
  },
  placeImage: {
    borderRadius: 25,
    height: 50,
    width: 50,
    flexDirection: 'row'
  }
});

ArtistListItem.propTypes = {
  artist: PropTypes.object,
  removeArtistFromList: PropTypes.func,
  editUser: PropTypes.bool,
};

export default ArtistListItem;
