import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import 'babel-polyfill';
import { registerScreens, registerScreenVisibilityListener } from './src/screens';

// Register screens
registerScreens();
registerScreenVisibilityListener();

const startApp = () => {
  Promise.all([
    Icon.getImageSource('ios-menu', 30)
  ]).then((sources) => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'swift-alerts-mobile.Auth',
        title: 'Swift | Alerts',
        navigatorButtons: {
          leftButtons: [
            {
              icon: sources[0],
              title: 'Menu',
              id: 'navSideDrawer'
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
  });
};

// start a App
startApp();

