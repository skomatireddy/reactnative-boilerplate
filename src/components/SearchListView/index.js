/* eslint-disable react/no-unused-prop-types,consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, FlatList, StyleSheet } from 'react-native';
import SearchListItem from '../SearchListItem';

const SearchListView = (props) => {
  console.log('List View', props);
  const isSearchListEmpty = () => {
    if (!props.searchRes) {
      return;
    }
    const addArtist = (evt) => {
      console.log(evt);
      props.addArtist(evt);
    };
    return (<ScrollView>
      <View style={styles.listView}>
        <FlatList
          data={props.searchRes}
          keyExtractor={(item, index) => index}
          renderItem={(info) => (
            <SearchListItem
              artist={info}
              key={info.id}
              addArtist={addArtist}
            />
          )}
        />
      </View>
    </ScrollView>);
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
      {isSearchListEmpty()}
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

SearchListView.propTypes = {
  addArtist: PropTypes.func,
  artists: PropTypes.array,
  editUser: PropTypes.bool,
  saveArtists: PropTypes.func,
  removeArtistFromList: PropTypes.func,
  searchRes: PropTypes.array,
  saveState: PropTypes.bool
};

export default SearchListView;
