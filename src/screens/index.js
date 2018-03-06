import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Authentication from './Auth';
import ArtistsScreen from './ArtistsScreen';
import AccountSettingsScreen from './AccountSettings';
import NavSideDrawer from './NavSideDrawer';
import configureStore from '../store/configureStore';
const store = configureStore();

export function registerScreens() {
// Auth screen
  Navigation.registerComponent(
    'swift-alerts-mobile.Auth',
    () => Authentication,
    store,
    Provider
  );
  // Artists Screen
  Navigation.registerComponent(
    'swift-alerts-mobile.Artists',
    () => ArtistsScreen,
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

  // Account Settings Screen
  Navigation.registerComponent(
    'swift-alerts-mobile.Settings',
    () => AccountSettingsScreen
  );
}


export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
