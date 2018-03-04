import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Authentication from './src/screens/Auth/Auth';
import NavSideDrawer from './src/screens/NavSideDrawer/NavSideDrawer'
import Icon from 'react-native-vector-icons/Ionicons';
import 'babel-polyfill';

import configureStore from './src/store/configureStore';
// Create redux store with history
const store = configureStore();

// Register screens
// Auth screen
Navigation.registerComponent(
  'swift-alerts-mobile.Auth',
  () => Authentication,
  store,
  Provider
);

// Side Header Nav Screen
Navigation.registerComponent(
  'swift-alerts-mobile.Nav',
  () => NavSideDrawer,
  store,
  Provider
);

startApp = () => {
  Promise.all([
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'swift-alerts-mobile.Auth',
        title: 'Login',
        navigatorButtons: {
          leftButtons: [
            {
              icon: sources[0],
              title: "Menu",
              id: "navSideDrawer"
            }
          ]
        }
      },
      drawer: {
        left: {
          screen: 'swift-alerts-mobile.Nav',
        }
      }
    });
  })
};

// start a App
startApp();



