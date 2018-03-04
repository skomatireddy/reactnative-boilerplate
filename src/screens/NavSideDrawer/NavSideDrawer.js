import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native'

class NavSideDrawer extends React.PureComponent{
  render() {
    return(<View style={[
      styles.container,
      { width: Dimensions.get("window").width * 0.8 }
    ]} >
      <Text>Swift Alerts</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  }
});

export default NavSideDrawer;