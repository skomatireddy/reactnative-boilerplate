/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, View, FlatList, StyleSheet } from 'react-native';
import ArtistListItem from '../ArtistListItem';

const ListView = (props) => {
  console.log('List View', props);
  const isArtistsEmpty = () => {
    if (!props.artists) {
      return (<Text>You have not yet followed any artists. Please search for an artist and click to follow.</Text>);
    }
    return (
      <ScrollView>
        <Text> Your Artists</Text>
        <View style={styles.listView}>
          <FlatList
            data={props.artists}
            keyExtractor={(item, index) => index}
            renderItem={(info) => (
              <ArtistListItem
                artist={info}
                key={info.id}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  };

  // const saveState = () => {
  //   // console.log('save state', props.saveState);
  //   if (props.saveState) {
  //     return (<TouchableOpacity onPress={() => props.saveArtists()}> save </TouchableOpacity>);
  //   }
  //   return;
  // };
  // const imageItems = () => {
  //   return
  // };

  return (
    <View>
      {isArtistsEmpty()}
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'row'
  }
});

ListView.propTypes = {
  artists: PropTypes.array,
  editUser: PropTypes.bool,
  saveArtists: PropTypes.func,
  removeArtistFromList: PropTypes.func,
  saveState: PropTypes.bool
};

export default ListView;
