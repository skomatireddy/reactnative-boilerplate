import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

class NavSideDrawer extends React.PureComponent {
  navigateToArtistsScreen = () => {
    this.toggleDrawer();
    this.props.navigator.handleDeepLink({
      link: 'swift-alerts-mobile.Artists'
    });
  };

  navigateToSettingsScreen = () => {
    this.toggleDrawer();
    this.props.navigator.handleDeepLink({
      link: 'swift-alerts-mobile.Settings'
    });
  };

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get('window').width * 0.8 }
        ]}
      >
        <Text>Swift Alerts</Text>
        <TouchableOpacity onPress={this.navigateToArtistsScreen}>
          <View style={styles.drawerItem}>
            <Text>Your Artists</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateToSettingsScreen}>
          <View style={styles.drawerItem}>
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    flex: 1
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  }
});

NavSideDrawer.propTypes = {
  navigator: PropTypes.object
};

export default NavSideDrawer;
